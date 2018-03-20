import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() symbol: String;
  private newsData: any;

  constructor(private stockService: StockService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.updateNews();
  }

  updateNews() {
    //console.log('getting news');
    //this.stockService.getStockNews(this.symbol).then(resp => this.newsData = resp);
    //console.log('newsData');
    //console.log(this.newsData);
  }
}
