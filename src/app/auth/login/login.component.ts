import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _toast: ToastrService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.formGroup = this.buidlForm();
  }

  buidlForm() {
    return this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const { email, password } = this.formGroup.getRawValue();

    this._authService.login(email, password).subscribe((next) => {
      if (!next) {
        this._toast.error('Usuario o contraseña incorrectos.', 'Error!');
      } else {
        this._router.navigate(['pages']);
      }
    });
  }
}
