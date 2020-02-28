import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  constructor() { }

  public doughnutChartLabels = ['Distance (km)', 'Calories perdu (kcal)', 'Nombre de pas', 'Battement (min)'];
  public doughnutChartData = [45, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  ngOnInit() {
  }

}
