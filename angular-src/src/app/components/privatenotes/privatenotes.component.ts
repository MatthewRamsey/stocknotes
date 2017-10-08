import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privatenotes',
  templateUrl: './privatenotes.component.html',
  styleUrls: ['./privatenotes.component.css']
})
export class PrivatenotesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.generateData();
  }

  generateData() {
    var data = [];
    data.push([{
      date : "09-02-2017",
      title: "iPhone 8 Notes",
      detail: "Apple has overpriced the iPhone 8"
    }]);
    data.push([{
      date: "08-16-2017",
      title: "iPhone 10 Notes",
      detail: "Apple stock will rise immensely with the super cool iPhone X"
    }]);
    data.push([{
      date: "07-20-2017",
      title: "iPhone 10 Notes",
      detail: "Apple stock will rise immensely with the super cool iPhone X"
    }]);

    console.log(data);
    return data;
  }
}
