import { NotifyService, AuthService } from '@mdv-ten/core-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@mdv-ten/core-data';

@Component({
  selector: 'mdv-ten-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  userLogin = { email: 'd@d.com', password: 'pass' }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notify: NotifyService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initForm()
    localStorage.setItem('User', '')
  }

  login() {
    const test: User = this.form.value;
    if(test.email === this.userLogin.email && test.password === this.userLogin.password) {
      this.router.navigate(['/projects']);
      this.authService.setToken(test.email);
    }
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })
  }
}
