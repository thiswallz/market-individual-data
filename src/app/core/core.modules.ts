import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
    ApiService, MarketService
} from './services';
  
@NgModule({
    imports: [
      CommonModule,
      HttpClientModule
    ],
    providers: [
      ApiService,
      MarketService
    ],
    declarations: []
})
export class CoreModule { }