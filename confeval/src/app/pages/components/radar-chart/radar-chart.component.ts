import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  /*public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: any = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];*/

  public barChartLabels: string[] = ['2006', '2007', '2008'];
  public barChartType: string = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public chartColors: any[] = [
    {
      fillColor:'rgba(0,0,0,0.2)',
      strokeColor:'rgba(0,0,0,1)',
      pointColor:'rgba(0,0,0,1)',
      pointStrokeColor:'#fff',
      pointHighlightFill:'#fff',
      pointHighlightStroke:'rgba(200,100,10,0.8)',
      
    }];

  public barChartData: any = [
    { data: [1, 4, 3], label: 'Series A' },
    { data: [2, 2, 2], label: 'Series B' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
