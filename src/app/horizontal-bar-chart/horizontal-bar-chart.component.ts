import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit {

  chart: object;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart('horizontal-bar-chart', {
      type: 'horizontalBar',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  });
  }

}
