import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-interface',
    templateUrl: './interface.component.html',
    styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {

    constructor() {
    }

    public barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType = 'bar';
    public barChartLegend = true;
    public barChartData = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];

    public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
    public radarChartData = [
        {data: [120, 130, 180, 70], label: '2017'},
        {data: [90, 150, 200, 45], label: '2018'}
    ];
    public radarChartType = 'radar';

    public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
    public pieChartData = [120, 150, 180, 90];
    public pieChartType = 'pie';

    ngOnInit() {
    }

}
