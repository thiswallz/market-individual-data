import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { trigger, style, animate, transition } from '@angular/animations';
import { Market, DetailMarket, MarketService } from '../../core';

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.component.html',
  styleUrls: ['./market-detail.component.scss'],
  animations: [
    trigger('markets', [
      transition(':enter', [style({ transform: 'translateX(-100%)' }), animate(350)]),
      transition(':leave', [animate(350), style({ transform: 'translateX(100%)' })])
    ])
  ]
})
export class MarketDetailComponent implements OnInit {
  displayedColumns = ['MarketName', 'Bid', 'Ask', 'Last'];
  dataSource = new MatTableDataSource<DetailMarket>();
  loading: boolean = false;

  constructor(private marketService: MarketService) {
    this.marketService.getSelectedMarkets().subscribe(detailMarkets => {
      this.dataSource = new MatTableDataSource(detailMarkets);
    });

    this.marketService.isLoading().subscribe(loading => {
      this.loading = loading;
    });
  }

  ngOnInit() {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
