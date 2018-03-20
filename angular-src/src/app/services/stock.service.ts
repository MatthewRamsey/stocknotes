import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/Map';
import 'rxjs/add/operator/Finally';
// import * as GoogleNewsRss from 'google-news-rss';

@Injectable()
export class StockService {
  
  constructor(private http: Http) {}
  // constructor(private http: Http, private GoogleNewsRss: GoogleNewsRss) {}

  getStockChartData(symbol) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='
      + symbol + '&interval=1min&apikey=LLJJF4CASZ2LFSJC', { headers: headers })
      .map(res => res.json());
  }

  getStockNews(symbol) {
    // const googleNews = new GoogleNewsRss();
    // return googleNews
    // .search(symbol);
  }

  getTwitterResults(symbol) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Authentication', 'Basic ramsey.matthew@live.com:Uga1718.');
    //return this.http.get("https://api.twitter.com/1.1/search/tweets.json?q=%40" + symbol, {headers: headers}).map(res => res.json());
  }
}
