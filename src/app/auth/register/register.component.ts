import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  loading: boolean;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _toast: ToastrService  
  ) {}

  ngOnInit() {
    this.formGroup = this.buildForm();
  }

  buildForm(): FormGroup {
    return this._fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  register() {
    const user = this.formGroup.getRawValue();
    this.loading = true;
    this._authService
      .register(user.password, user.email, user.userName)
      .subscribe({
        next: (res) => {
          console.log(res);
          this._toast.success('Usuario creado correctamente');
          this.loading = false;
        },
        error: (err) => {
          this._toast.error('Error al crear usuario');
          this.loading = false;
          console.log(err);
          
        },
      });
  }
}
