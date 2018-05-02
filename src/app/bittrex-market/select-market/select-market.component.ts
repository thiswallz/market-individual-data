import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Market, MarketService } from '../../core';

@Component({
  selector: 'app-select-market',
  templateUrl: './select-market.component.html',
  styleUrls: ['./select-market.component.scss']
})
export class SelectMarketComponent implements OnInit {
  displayedColumns = ['select', 'MarketName'];
  loading: boolean = false;
  dataSource = new MatTableDataSource<Market>();
  selection = new SelectionModel<Market>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private marketService: MarketService) {}

  ngOnInit() {
    this.populateData();
  }

  selectMarket($event, market: Market) {
    console.log(market);
    if (market.selected === false || market.selected === undefined) {
      market.selected = true;
      this.marketService.addMarket(market);
      this.selection.select(market);
    } else {
      market.selected = false;
      this.marketService.removeMarket(market);
      this.selection.deselect(market);
    }
  }

  populateData() {
    this.loading = true;
    this.marketService.getAll().subscribe(markets => {
      this.dataSource = new MatTableDataSource(markets);
      this.dataSource.paginator = this.paginator;
      this.loading = false;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
