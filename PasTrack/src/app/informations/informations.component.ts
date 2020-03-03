import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  constructor() { }

  public radarChartLabels = ['Nombre de pas', 'Distance parcourus', 'Calories perdues', 'Moyenne par jour'];
  public radarChartData = [
    {data: [180, 130, 180, 110], label: '2019'},
    {data: [150, 150, 200, 90], label: '2020'}
  ];
  public radarChartType = 'radar';
  ngOnInit() {
  }

}
