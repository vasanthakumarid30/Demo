import { Routes } from "@angular/router";
import { ChatbotComponent } from './chatbot/chatbot.component';
export const ChatBotDashboardRoutes:Routes=[
    {
        path: '',
        component: ChatbotComponent,
        data: {
          title: 'Chatbot',
          urls: [{ title: 'Chatbot', url: '/chatbot' }, { title: 'Chatbot' }],
        },
    }
]
