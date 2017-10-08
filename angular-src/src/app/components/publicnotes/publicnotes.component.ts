import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicnotes',
  templateUrl: './publicnotes.component.html',
  styleUrls: ['./publicnotes.component.css']
})
export class PublicnotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.generateData();
  }

  generateData() {
    var data = []
    data.push({
      "date": "09-02-2017",
      "title": "iPhone 8 Notes",
      "detail": "Apple has overpriced the iPhone 8"
    }, {
      "date": "08-16-2017",
      "title": "iPhone 10 Notes",
      "detail": "Apple stock will rise immensely with the super cool iPhone X"
    },
    {
      "date": "07-20-2017",
      "title": "iPhone 10 Notes",
      "detail": "Apple stock will rise immensely with the super cool iPhone X"
    });

    console.log(data);
    return data;
  }
}
