import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.authService.getInfo()
    .subscribe((res: any) => {
      //this.toastr.success(res.message);
      //localStorage.setItem('token', res.token)
      this.formG.setValue({ username: res.data.username, name: res.data.name, email: res.data.email, password: res.data.password});
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
