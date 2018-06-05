import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  data = [{nights: 1, yatra: 2728, expedia: 4282}, { nights: 2, yatra: 6886, expedia: 10243},
    { nights: 3, yatra: 10808, expedia: 16850 }, { nights: 4, yatra: 13361, expedia: 27111},
    { nights: 5, yatra: 18751, expedia: 27111 }, { nights: 6, yatra: 20440, expedia: 30658 }];
  chart: any;

  constructor() { }

  ngOnInit() {
    const nights: string[] = this.data.map(item => item.nights.toString());
    const yatraList: number[] = this.data.map(item => item.yatra);
    const expediaList: number[] = this.data.map(item => item.expedia);
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: nights,
        datasets: [
          {
            label: 'Yatra',
            data: yatraList,
            backgroundColor: 'Aqua',
          },
          {
            label: 'Expedia',
            data: expediaList,
            backgroundColor: 'LightPink',
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Rate'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Nights'
            }
          }]
        }
      }
    });
  }

}
