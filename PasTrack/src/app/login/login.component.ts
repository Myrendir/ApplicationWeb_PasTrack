import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private alert: AlertService) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  login() {
    this.submitted = true;

    const val = this.form.value;

    if (val.email && val.password) {
      this.loading = true;
      this.authService.login(this.form.value)
        .subscribe(
          (res) => {
            console.log(res);
            console.log('User is logged in');
            this.router.navigateByUrl('/getall');
          },
          error => {
            this.alert.error(error);
            this.loading = false;
          }
        );
    }
  }

  ngOnInit() {
  }

}
