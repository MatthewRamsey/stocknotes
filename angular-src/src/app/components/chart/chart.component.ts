import { Component, Input } from '@angular/core';
import { AmChartsService } from 'amcharts3-angular2';
import { AmChart } from 'amstock3';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @Input() symbol: String;
  private chart: AmChart;
  private dataProvider: any;

  constructor(private AmCharts: AmChartsService, private stockService: StockService) {
  }

  ngAfterViewInit() {
    console.log('about to make provider and chart');
    this.makeStockDataProvider();
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }

  makeStockDataProvider() {
    this.stockService.getStockChartData(this.symbol)
      .finally(()=>{
      console.log("FINALLY");
      console.log(this.dataProvider);
      console.log(this.chart);
      if(typeof this.chart == 'undefined') {
        console.log('undefined');
        this.chart = this.AmCharts.makeChart("chartdiv", {
        "type": "serial",
        "theme": "black",
        "marginTop": 0,
        "marginRight": 80,
        "dataSets": [{
          "color": "#b0de09",
          "fieldMappings": [{
            fromField: "open",
            toField: "openField"
          }, {
            fromField: "close",
            toField: "closeField"
          }, {
            fromField: "high",
            toField: "highField"
          }, {
            fromField: "low",
            toField: "lowField"
          }, {
            fromField: "volume",
            toField: "volume"
          }],
          "dataProvider": this.dataProvider
        }],
        "valueAxes": [{
          "axisAlpha": 0,
          "position": "left"
        }],
        "graphs": [{
          "id": "g1",
          "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
          "closeField": "close",
          "fillColors": "#7f8da9",
          "highField": "high",
          "lineColor": "#7f8da9",
          "lineAlpha": 1,
          "lowField": "low",
          "fillAlphas": 0.9,
          "negativeFillColors": "#db4c3c",
          "negativeLineColor": "#db4c3c",
          "openField": "open",
          "title": "Price:",
          "type": "candlestick",
          "valueField": "close"
        }],
        "chartScrollbar": {
          "graph": "g1",
          "gridAlpha": 0,
          "color": "#888888",
          "scrollbarHeight": 55,
          "backgroundAlpha": 0,
          "selectedBackgroundAlpha": 0.1,
          "selectedBackgroundColor": "#888888",
          "graphFillAlpha": 0,
          "selectedGraphFillAlpha": 0,
          "graphLineAlpha": 0.2,
          "graphLineColor": "#c2c2c2",
          "selectedGraphLineColor": "#888888",
          "selectedGraphLineAlpha": 1
        },
        "chartCursor": {
          "categoryBalloonDateFormat": "YYYY",
          "cursorAlpha": 0,
          "valueLineEnabled": true,
          "valueLineBalloonEnabled": true,
          "valueLineAlpha": 0.5,
          "fullWidth": true
        },
        "dataDateFormat": "YYYY-MM-DD",
        "categoryField": "date",
        "categoryAxis": {
          "labelRotation": 45,
          "minPeriod": "SS",
          "parseDates": false,
          "minorGridAlpha": 0.1,
          "minorGridEnabled": true
        }
      });
        this.AmCharts.updateChart(this.chart, () => {this.chart.dataProvider = this.dataProvider});}
    else{
        console.log('defined');
        this.AmCharts.updateChart(this.chart, () => {this.chart.dataProvider = this.dataProvider});}})
      .subscribe(data => {
      console.log('making data provider');
      var result = [];
      var count = 0;

      for (var key in data['Time Series (1min)']) {

        var date = key,
          openField = data['Time Series (1min)'][key]['1. open'],
          closeField = data['Time Series (1min)'][key]['4. close'],
          highField = data['Time Series (1min)'][key]['2. high'],
          lowField = data['Time Series (1min)'][key]['3. low'],
          volume = data['Time Series (1min)'][key]['5. volume'];

        result.push({
          "date": date,
          "open": openField,
          "close": closeField,
          "high": highField,
          "low": lowField,
          "volume": volume
        });
        count++;
      }
      this.dataProvider = result.reverse();
    });
  }

  updateNewChart() {
    console.log('updating chart');
    this.makeStockDataProvider();
  }
}
