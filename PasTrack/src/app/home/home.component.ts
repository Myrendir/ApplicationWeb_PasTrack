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
            const valueSmartphone = $('#target').offset().top;
            const valuebody = $('#body').offset().top;
            $(window).scroll(function fix_element() {
                if ($(window).scrollTop() > valueSmartphone) {
                    $('#target').css(
                        $(window).scrollTop() > valueSmartphone
                            ? {position: 'fixed', top: '0'}
                            : {position: 'absolute', top: '50vh'}
                    );
                }
                if ($(window).scrollTop() > valuebody) {
                    $('#target').css(
                        $(window).scrollTop() > valuebody
                            ? {position: 'absolute', top: '100vh'}
                            : {position: 'fixed', top: '50px'}
                    );
                }
                if ($(window).scrollTop() < valueSmartphone) {
                    $('#target').css(
                        $(window).scrollTop() < valueSmartphone
                            ? {position: 'absolute', top: '50vh'}
                            : {position: 'fixed', top: '50px'}
                    );
                }
                return fix_element;
            }());
        });
    }
}
