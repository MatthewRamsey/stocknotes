import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {
  @Input() symbol: String;
  private twitterData: any;

  constructor(private stockService: StockService) {
    this.stockService.getTwitterResults(this.symbol).subscribe(data => {
      this.twitterData = data;
      console.log(this.twitterData);
    });
   }

  ngOnInit() {
  }

}
