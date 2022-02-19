import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgChartsModule } from 'ng2-charts';
import { RadarChartComponent } from './pages/components/radar-chart/radar-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PnFormComponent } from './pages/components/pn-form/pn-form.component';
import { NgMaterialModule } from './shared/ng-material/ng-material.module';

@NgModule({
  declarations: [
    AppComponent,
    RadarChartComponent,
    PnFormComponent,
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    BrowserAnimationsModule,
     NgMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
