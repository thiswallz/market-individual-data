import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule
} from '@angular/material';
import { MarketDetailComponent } from './market-detail/market-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectMarketComponent } from './select-market/select-market.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports: [MarketDetailComponent, SelectMarketComponent],
  declarations: [MarketDetailComponent, SelectMarketComponent]
})
export class BittrexMarketModule {}
