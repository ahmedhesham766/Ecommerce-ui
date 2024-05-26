import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { DialogServiceWrapper } from 'src/app/shared/services/dialog/dialog.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup ;
  
  constructor(private fb: FormBuilder ,
    private authService : AuthService ,
    private toastr : ToastrService,
    private dialogServiceWrapper: DialogServiceWrapper) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username,password).subscribe(
        (response) => {
          if (response.userID) {
            this.toastr.success(response.message);
            localStorage.setItem('userId', response.userID); // Save userId in local storage
            this.dialogServiceWrapper.closeDialog(); // Close the dialog
          } else {
            this.toastr.error(response.message);
          }
        },
        (error : HttpErrorResponse) =>{
          console.log(error.message);
          this.toastr.error('An error occurred. Please try again.', 'Login Failed');
        }
      )
    } else {
      this.toastr.error('Please fill out the form correctly.', 'Login Failed');
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  openRegisterDialog() {
    this.dialogServiceWrapper.closeDialog();
    this.dialogServiceWrapper.openRegisterDialog();
  }

}
