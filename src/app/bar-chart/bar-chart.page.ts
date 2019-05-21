import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.page.html',
  styleUrls: ['./bar-chart.page.scss'],
})
export class BarChartPage implements OnInit {
  title = 'Google Bar Chart with Ionic 4';

  type = 'BarChart';
  dynamicResize = true;
  data = [
    ['2012', 900],
    ['2013', 1000],
    ['2014', 1170],
    ['2015', 1250],
    ['2016', 1530]
  ];
  columnNames = ['Year', 'Asia'];
  options = { };
  width = 550;
  height = 400;

  constructor() { }

  ngOnInit() {
  }

}
