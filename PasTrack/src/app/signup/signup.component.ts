import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  register: FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private alert: AlertService) {

    this.register = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  get f() {
    return this.register.controls;
  }

  signup() {
    this.submitted = true;
    if (this.register.invalid) {
      return;
    }

    this.loading = true;
    const val = this.register.value;

    this.authService.register(this.register.value).subscribe(
      (res) => {
        console.log(res);
        console.log('User created');
        this.router.navigateByUrl('/home');
      },
      error => {
        this.alert.error(error);
        this.loading = false;
      }
    );

  }

  ngOnInit() {
  }

}
