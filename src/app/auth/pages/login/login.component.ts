import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginFormGroup: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginFormGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginFormGroup.valid) {
      this.router.navigate(['/author']);
    }
  }

  modoInvitado() {
    this.router.navigate(['/author']);
  }
}
