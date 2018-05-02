import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ApiService } from './api.service';
import { Market, DetailMarket } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class MarketService {
  private detailMarketsSubject = new Subject<DetailMarket[]>();
  private isLoadingSubject = new Subject<boolean>();
  private detailMarkets: DetailMarket[] = [];

  constructor(private apiService: ApiService) {}

  isLoading(): Observable<boolean> {
    return this.isLoadingSubject.asObservable();
  }

  getSelectedMarkets(): Observable<DetailMarket[]> {
    return this.detailMarketsSubject.asObservable();
  }

  addMarket(market: Market) {
    this.isLoadingSubject.next(true);
    this.get(market.MarketName).subscribe(detailMarket => {
      this.detailMarkets.push({ MarketName: market.MarketName, ...detailMarket });
      this.isLoadingSubject.next(false);
      this.detailMarketsSubject.next(this.detailMarkets);
    });
  }

  removeMarket(market: Market) {
    this.detailMarkets = this.detailMarkets.filter(detailMarket => detailMarket.MarketName !== market.MarketName);
    this.detailMarketsSubject.next(this.detailMarkets);
  }

  getAll(): Observable<Market[]> {
    return this.apiService.get('getmarketsummaries').pipe(map(data => data.result));
  }

  get(market: string): Observable<DetailMarket> {
    return this.apiService.get(`getticker/?market=${market}`).pipe(map(data => data.result));
  }
}
