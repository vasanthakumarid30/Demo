import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import {UserserviceService} from '../userservice.service';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public regForm: FormGroup = Object.create(null);
  constructor(private fb: FormBuilder, private router: Router, private userService: UserserviceService) {}

  ngOnInit(): void {
    this.regForm = this.fb.group({
      userName: [null, Validators.compose([Validators.required, CustomValidators.email])],
      // tslint:disable-next-line - Disables all
      userPassword: password,
      // tslint:disable-next-line - Disables all
      confirmPassword: confirmPassword,
      isUserActive: new FormControl(''),
      recordStatus: new FormControl('')
    });
  }

  onSubmit(): void {
    this.regForm.get('isUserActive')?.setValue(true);
    this.regForm.get('recordStatus')?.setValue(1);
    this.userService.registerUser(this.regForm.value).subscribe(res => {
           this.router.navigate(['/login']);
        });
  }
}
