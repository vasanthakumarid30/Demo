import {Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import {Hcp} from '../../../models/User';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ngx-custom-validators';
import {UserserviceService} from '../../../userservice.service';

@Component({
  selector: 'app-hcp-dialog',
  templateUrl: './hcp-dialog.component.html',
  styleUrls: ['./hcp-dialog.component.scss'],
})
export class HcpDialogComponent implements OnInit{
  public dailogform: FormGroup = Object.create(null);
  action: string;
  // tslint:disable-next-line:variable-name
  local_data: any;

  constructor(
    public datePipe: DatePipe,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: Hcp,
    private fb: FormBuilder,
    private userService: UserserviceService
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction(): void {
    if (this.local_data.action === 'Approve'){
        this.local_data.isApproved = this.dailogform.get('isApproved')?.value;
        this.local_data.isActive = true;
    }else if (this.local_data === 'Reject'){
      this.local_data.isActive = false;
      this.local_data.isApproved = this.dailogform.get('isApproved')?.value;
    }
    this.userService.updateHcp(this.local_data).subscribe(res => {
      this.sendConfirmationEmail();
      this.dialogRef.close({ event: this.action, data: this.local_data });
    });
  }

  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }


  ngOnInit(): void {
    this.dailogform = this.fb.group({
      isApproved: new FormControl('', Validators.required),
    });
  }

  private sendConfirmationEmail(): void {
    this.userService.sendConfirmationMail(this.local_data).subscribe((res: any) => {
      console.log(res);
    });
  }
}
