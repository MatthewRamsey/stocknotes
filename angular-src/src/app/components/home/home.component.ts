import { Component, OnInit, OnDestroy } from '@angular/core';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  symbol: String;

  constructor(private stockService: StockService) {
    this.symbol = "AAPL";
  }

  ngOnInit() {
  }
}
