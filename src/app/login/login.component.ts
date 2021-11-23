import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {UserserviceService} from '../userservice.service';
import {CustomValidators} from 'ngx-custom-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  public loginform: FormGroup = Object.create(null);
  msg = '';
  constructor(private fb: FormBuilder, private router: Router, private userService: UserserviceService) { }

 /* check(uname: string, p: string) {
    const output = this.service.checkusernameandpassword(uname, p);
    if (output == true) {
      this.routes.navigate(['/starter']);
    } else {
      this.msg = 'Invalid Username or Password';
    }
  }*/

  ngOnInit(): void {
    this.loginform = this.fb.group({
      userName: [null, Validators.compose([Validators.required, CustomValidators.email])],
      // tslint:disable-next-line - Disables all
      userPassword: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    this.userService.checkLogin(this.loginform.value).subscribe((res: any) => {
        if (res) {
          localStorage.setItem('username', this.loginform.get('userName')?.value);
          this.router.navigateByUrl('/chatbot');
        }
    });
  }
}
