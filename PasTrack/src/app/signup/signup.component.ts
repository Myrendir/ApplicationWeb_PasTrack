import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  register: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {

    this.register = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  signup() {
    const val = this.register.value;

    this.authService.register(this.register.value).subscribe(
      (res) => {
        console.log(res);
        console.log('User created');
        this.router.navigateByUrl('/home');
      }
    );

  }

  ngOnInit() {
  }

}
