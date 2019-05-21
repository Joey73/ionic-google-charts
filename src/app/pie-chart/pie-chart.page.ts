import { Component, OnInit } from '@angular/core';
import { PieChartDataArray } from '../../assets/data/pieChartData';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.page.html',
  styleUrls: ['./pie-chart.page.scss'],
})
export class PieChartPage implements OnInit {
  type = 'PieChart';

  title: string;
  dynamicResize: boolean;
  data = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    is3D: true
  };

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.drawChart();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter()');
  }

  onResize(event: Event) {
    console.log('onResize(...)');
    this.drawChart();
  }

  drawChart() {
    console.log('drawChart()');

    this.title = 'Google Pie Chart with Ionic 4';
    this.type = 'PieChart';
    this.dynamicResize = true;
    this.data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]
    ];
    this.columnNames = ['Browser', 'Percentage'];
    this.options = {
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      is3D: true
    };
  }

}
