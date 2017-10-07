import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/Map';

@Injectable()
export class StockService {
  symbol: String;

  constructor(private http: Http) { }

  getStockChartData(symbol){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='
    + symbol + '&interval=1min&apikey=LLJJF4CASZ2LFSJC', {headers: headers})
    .map(res => {
       let data = res.json();
       console.log(data);
       transformData(data['Time Series (1min)']);
    });
  }

  getStockNews(symbol){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin','*')
    return this.http.get("http://finance.yahoo.com/rss/headline?s=" + symbol, {headers: headers}).map(res => res.json());
  }

  getTwitterResults(symbol) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin','*')
    headers.append('Authentication','Basic ramsey.matthew@live.com:Uga1718.')
    return this.http.get("https://api.twitter.com/1.1/search/tweets.json?q=%40" + symbol, {headers: headers}).map(res => res.json());
  }
}

function transformData(timeSeriesData) {
  let newData;
  for (let i = 0; timeSeriesData.count; i++) {
    for(let j = 0; timeSeriesData[i].count; j++) {

    }
  }
}