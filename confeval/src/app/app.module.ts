import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgChartsModule } from 'ng2-charts';
import { RadarChartComponent } from './pages/components/radar-chart/radar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    RadarChartComponent,
  ],
  imports: [
    BrowserModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
