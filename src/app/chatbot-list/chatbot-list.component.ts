import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChatbotDialogComponent } from './chatbot-dialog/chatbot-dialog.component';

@Component({
  selector: 'app-chatbot-list',
  templateUrl: './chatbot-list.component.html',
  styleUrls: ['./chatbot-list.component.scss']
})
export class ChatbotListComponent implements OnInit {
  chatbotinfo:any=[];
  constructor(private router: Router,public dialog: MatDialog) {}
 
  ngOnInit(): void {
    this.chatbotinfo=[{
      "image":"assets/images/users/1.jpg",
      "title":"Deniz",
      "subtitle":"Product Owner",
      "info":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes
      very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "image":"assets/images/users/2.jpg",
      "title":"Liliyana",
      "subtitle":"Manager",
      "info":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes
      very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "image":"assets/images/users/3.jpg",
      "title":"Rita",
      "subtitle":"ScrumMaster",
      "info":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes
      very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "image":"assets/images/users/4.jpg",
      "title":"Edmilson",
      "subtitle":"Specilist",
      "info":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes
      very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
  ]
  }
  chatbotDashbord(){
    this.router.navigateByUrl('/chatbot-dashboard');
  }
  addchatbot(){
    const dialogRef = this.dialog.open(ChatbotDialogComponent, {
     // data: element,
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      //this.getUnApprovedHcpList();
    });
  }
 
}

