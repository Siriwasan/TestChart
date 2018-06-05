import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { HorizontalBarChartComponent } from './horizontal-bar-chart/horizontal-bar-chart.component';
import { GroupedBarChartComponent } from './grouped-bar-chart/grouped-bar-chart.component';
import { MixedChartComponent } from './mixed-chart/mixed-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    RadarChartComponent,
    PolarAreaChartComponent,
    DoughnutChartComponent,
    HorizontalBarChartComponent,
    GroupedBarChartComponent,
    MixedChartComponent,
    BubbleChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
