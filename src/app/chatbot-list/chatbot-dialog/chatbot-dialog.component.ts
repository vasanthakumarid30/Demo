import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbot-dialog',
  templateUrl: './chatbot-dialog.component.html',
  styleUrls: ['./chatbot-dialog.component.scss']
})
export class ChatbotDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<any>,private router: Router) { }

  ngOnInit(): void {
  }
  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }
  chatbotDashbord(){
   
    this.router.navigateByUrl('/chatbot-dashboard');
    this.closeDialog()
  }
}

