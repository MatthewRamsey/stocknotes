import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/Map';

@Injectable()
export class StockService {

  constructor(private http: Http) { }

  getStockChartData(userSymbol){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='
    + userSymbol + '&interval=1min&apikey=LLJJF4CASZ2LFSJC', {headers: headers})
    .map(res => res.json());
  }

  getStockNews(symbol){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin','*')
    //return this.http.get("http://finance.yahoo.com/rss/headline?s=" + symbol, {headers: headers}).map(res => res.json());
  }

  getTwitterResults(symbol) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin','*')
    headers.append('Authentication','Basic ramsey.matthew@live.com:Uga1718.')
    //return this.http.get("https://api.twitter.com/1.1/search/tweets.json?q=%40" + symbol, {headers: headers}).map(res => res.json());
  }
}