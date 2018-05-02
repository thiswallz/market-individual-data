import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BittrexMarketModule } from './bittrex-market/bittrex-market.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.modules';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BittrexMarketModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
