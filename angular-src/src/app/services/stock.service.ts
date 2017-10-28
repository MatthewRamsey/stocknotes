import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/Map';
import 'rxjs/add/operator/Finally';
import { GoogleNewsClient } from 'google-news-rss';

@Injectable()
export class StockService {

  constructor(private http: Http) { }

  getStockChartData(symbol) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='
      + symbol + '&interval=1min&apikey=LLJJF4CASZ2LFSJC', { headers: headers })
      .map(res => res.json());
  }

  getStockNews(symbol) {
    // let data = this.http.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com/news?q=" + symbol + "&output=rss")
    // .map(res => {res.json(); console.log(res.json());});
    // console.log('service data');
    // console.log(data);
    // return data;

    // return this.googleNewsClient
    // .search(symbol)
    // .then(resp => console.log(resp));
    return null;
  }

  getTwitterResults(symbol) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*')
    headers.append('Authentication', 'Basic ramsey.matthew@live.com:Uga1718.')
    //return this.http.get("https://api.twitter.com/1.1/search/tweets.json?q=%40" + symbol, {headers: headers}).map(res => res.json());
  }
}
