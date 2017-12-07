import { Component, OnInit, ViewChild, 
    ElementRef, Input, AfterViewInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, AfterViewInit {

  @ViewChild('pieChart') pieChartElement: ElementRef;

  @Input() title: string;
  @Input() is3d: boolean;
  @Input() pieHole: number;
  @Input() data: any[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //console.log(google);
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(() => {
      var pieChartData = google.visualization.arrayToDataTable(this.data);

      var options = {
        title: this.title,
        is3D: this.is3d,
        piehole: this.pieHole
      };

      var chart = new google.visualization.PieChart(this.pieChartElement.nativeElement);
      chart.draw(pieChartData, options);
    });
  }

}
