import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { RegisterData } from '../../model/user';
import { DialogServiceWrapper } from 'src/app/shared/services/dialog/dialog.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterForm: FormGroup ;

  
  constructor(private fb: FormBuilder ,
      private authService : AuthService ,
      private toastr : ToastrService ,
      private dialogServiceWrapper: DialogServiceWrapper) {
    this.RegisterForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      userType: ['customer', Validators.required]
    });
  }

  onSubmit() {
    if (this.RegisterForm.valid) {
      const registerData: RegisterData = this.RegisterForm.value;
      this.authService.register(registerData).subscribe(
        (response) => {
          if (response.UserID)
            {
              this.toastr.success(response.message);
              localStorage.setItem('userId', response.userID);
              this.dialogServiceWrapper.closeDialog();
            } else {
              this.toastr.error(response.message);
            }
            },
            (error: HttpErrorResponse) => {
              console.log(error.message);
              this.toastr.error('An error occurred. Please try again.', 'Registration Failed');
            }
          );
        } else {
          this.toastr.error('Please fill out the form correctly.', 'Registration Failed');
        }
      }

  get fullName() {
    return this.RegisterForm.get('fullName');
  }

  get email() {
    return this.RegisterForm.get('email');
  }

  get userName() {
    return this.RegisterForm.get('userName');
  }

  get password() {
    return this.RegisterForm.get('password');
  }

  openLoginDialog() {
    this.dialogServiceWrapper.closeDialog();
    this.dialogServiceWrapper.openLoginDialog();
  }
}
