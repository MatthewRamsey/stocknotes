import { Component, OnInit, AfterViewInit, OnDestroy, Input, EventEmitter } from '@angular/core';
import { AmChartsService } from 'amcharts3-angular2';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit, OnDestroy {

  @Input() symbol: String;

  private chart: any;
  private chartData = [
    {date: new Date(2011, 5, 1, 0, 0, 0, 0), val:10},
    {date: new Date(2011, 5, 2, 0, 0, 0, 0), val:11},
    {date: new Date(2011, 5, 3, 0, 0, 0, 0), val:12},
    {date: new Date(2011, 5, 4, 0, 0, 0, 0), val:11},
    {date: new Date(2011, 5, 5, 0, 0, 0, 0), val:10},
    {date: new Date(2011, 5, 6, 0, 0, 0, 0), val:11},
    {date: new Date(2011, 5, 7, 0, 0, 0, 0), val:13},
    {date: new Date(2011, 5, 8, 0, 0, 0, 0), val:14},
    {date: new Date(2011, 5, 9, 0, 0, 0, 0), val:17},
    {date: new Date(2011, 5, 10, 0, 0, 0, 0), val:13}
];

  constructor(private stockService: StockService,
    private AmCharts: AmChartsService) {
  }

  ngOnInit() {
    //this.stockService.getStockChartData(this.symbol).subscribe(this.updateChart);
    this.chart = this.AmCharts.makeChart("chartdiv", {
      type: "serial",
      theme: "black",
      responsive: {
        "enabled": false
      },
      categoryAxesSettings: {
        minPeriod: "mm"
      },
      dataSets: [{
        color: "#b0de09",
        fieldMappings: [{
          fromField: "value",
          toField: "value"
        }, {
          fromField: "openField",
          toField: "open"
        }, {
          fromField: "closeField",
          toField: "close"
        }, {
          fromField: "highField",
          toField: "high"
        }, {
          fromField: "lowField",
          toField: "low"
        }, {
          fromField: "volume",
          toField: "volume"
        }],
        dataProvider: this.chartData,
        categoryField: "date"
      }],
      panels: [{
        showCategoryAxis: false,
        title: "Value",
        percentHeight: 70,
        valueAxes: [{
          id: "v1"
        }
        ],
        stockGraphs: [{
          id: "g1",
          valueField: "value",
          type: "candlestick",
          lineThickness: 2,
          bullet: "round"
        }],
        stockLegend: {
          valueTextRegular: " ",
          markerType: "none"
        }
      },
      {
        title: "Volume",
        percentHeight: 30,
        stockGraphs: [{
          valueField: "volume",
          type: "column",
          cornerRadiusTop: 2,
          fillAlphas: 1
        }],
        stockLegend: {
          valueTextRegular: " ",
          markerType: "none"
        }
      }
      ],
      chartScrollbarSettings: {
        graph: "g1",
        usePeriod: "10mm",
        position: "top",
        updateOnReleaseOnly: false
      },
      chartCursorSettings: {
        valueBalloonsEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineEnabled: true
      },
      periodSelector: {
        position: "bottom",
        dateFormat: "YYYY-MM-DD HH:NN",
        inputFieldWidth: 150,
        periods: [{
          period: "hh",
          count: 1,
          label: "1 hour",
          selected: true
        }, {
          period: "hh",
          count: 2,
          label: "2 hours"
        }, {
          period: "hh",
          count: 5,
          label: "5 hour"
        }, {
          period: "hh",
          count: 12,
          label: "12 hours"
        }, {
          period: "MAX",
          label: "MAX"
        }]
        ,
        panelsSettings: {
          usePrefixes: true
        }
      }
    });
  }

  ngAfterViewInit() {
    this.chart.path = "/node_modules/amcharts3/amstock3";
    this.chart.pathToImages = "/node_modules/amcharts3/images";
  }

  ngOnDestroy(): void {
    this.AmCharts.destroyChart(this.chart);
  }

  updateChart(chartData) {
    console.log(chartData);
    const series = chartData['Time Series (1min)'];
    const transformer = (series) => series;
    this.chart.dataProvider = transformer(series);
    this.chart.validateData();
  }
}
