import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterForm: FormGroup ;

  
  constructor(private fb: FormBuilder , private authService : AuthService , private toastr : ToastrService ) {
    this.RegisterForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    if (this.RegisterForm.valid) {
      const { username, password } = this.RegisterForm.value;
      
    } else {
      console.log('Please enter a valid credentials');
    }
  }

  get fullname() {
    return this.RegisterForm.get('fullname');
  }

  get email() {
    return this.RegisterForm.get('email');
  }

  get username() {
    return this.RegisterForm.get('username');
  }

  get password() {
    return this.RegisterForm.get('password');
  }
}
