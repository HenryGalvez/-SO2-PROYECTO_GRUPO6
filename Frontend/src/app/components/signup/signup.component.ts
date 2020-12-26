import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formG = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null,
      Validators.required
    ),
    name: new FormControl(null,
      Validators.required
    ),
    username: new FormControl(null,
      Validators.required
    )
  })

  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.router.navigate(['/tasks'])
    }
  }

  signUp() {
    this.authService.signUp(this.formG.value)
    .subscribe((res: any) => {
      //console.log(res)
      this.toastr.success(res.message);
      localStorage.setItem('token', res.token)
      this.router.navigate(['/tasks'])
    }, err => {
      console.log(err);
      this.toastr.error(err.error.message);
    })
  }

  get email() {
    return this.formG.get('email');
  }
  get password() {
    return this.formG.get('password');
  }
  get name() {
    return this.formG.get('name');
  }
  get username() {
    return this.formG.get('username');
  }
}
