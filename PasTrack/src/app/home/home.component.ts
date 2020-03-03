import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
        $(function($) {
            $(window).scroll(function fix_element() {
                if ($(window).scrollTop() > 260) {
                    $('#target').css(
                        $(window).scrollTop() > 260
                            ? {position: 'fixed', top: '50px'}
                            : {position: 'absolute', top: '50vh'}
                    );
                }
                if ($(window).scrollTop() > 580) {
                    $('#target').css(
                        $(window).scrollTop() > 630
                            ? {position: 'absolute', top: '107vh'}
                            : {position: 'fixed', top: '50px'}
                    );
                }
                if ($(window).scrollTop() < 260) {
                    $('#target').css(
                        $(window).scrollTop() < 260
                            ? {position: 'absolute', top: '50vh'}
                            : {position: 'fixed', top: '50px'}
                    );
                }
                return fix_element;
            }());
        });
    }
}
