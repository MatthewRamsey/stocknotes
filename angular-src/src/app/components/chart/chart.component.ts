import { Component, OnInit, OnDestroy, Input, EventEmitter } from '@angular/core';
import { AmChartsService } from 'amcharts3-angular2';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.AmCharts.destroyChart(this.chart);
  }
  @Input() symbol: String;
  chartData: any;
  private chart: any;

  constructor(private stockService: StockService,
    private AmCharts: AmChartsService) { }

  ngOnInit() {
    console.log(this.symbol);
    this.chartData = this.stockService.getStockChartData(this.symbol).subscribe(stockdata => {
      console.log(stockdata);
      this.chartData = stockdata;
      console.log(this.chartData.TimeSeries);
    });

    this.chart = this.AmCharts.makeChart("chartdiv", {
      type: "stock",
      theme: "black",
      responsive: {
        "enabled": true
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
          fromField: "volume",
          toField: "volume"
        }],
        dataProvider: this.chartData.TimeSeries,
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
          type: "smoothedLine",
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
      },
      panelsSettings: {
        usePrefixes: true
      }
    });
    this.chart.path = "/node_modules/amcharts3/amstock3";
  }

  updateChart(symbol) {
    this.AmCharts.updateChart(this.chart, () => {
      this.chartData = this.stockService.getStockChartData(this.symbol).subscribe(stockdata => {
        this.chartData = stockdata
      });
      console.log('new data');
      console.log(this.chartData);
      this.chart.dataProvider = this.chartData.TimeSeries;
    })
  }
}
