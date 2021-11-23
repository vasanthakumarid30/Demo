import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MatCardModule } from '@angular/material/card';
import { ChatBotDashboardRoutes } from './chatbot-dashboard.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forChild(ChatBotDashboardRoutes),
  ]
})
export class ChatbotDashboardModule { }
