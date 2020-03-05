import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let colNumber = 3; // number of table columns


    for (let i = 0; i < colNumber; i++) {
      const thWidth = $('.card_table').find('th:eq(' + i + ')').width();
      const tdWidth = $('.card_table').find('td:eq(' + i + ')').width();
      if (thWidth < tdWidth) {
        $('.card_table').find('th:eq(' + i + ')').width(tdWidth);
      } else {
        $('.card_table').find('td:eq(' + i + ')').width(thWidth);
      }
    }
  }

}
