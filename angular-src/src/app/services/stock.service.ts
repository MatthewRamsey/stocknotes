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
    .map(res => res.json());
  }
}
