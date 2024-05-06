import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserListComponent } from './layouts/user-list/user-list.component';
import { ChatBoxComponent } from './layouts/chat-box/chat-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    UserListComponent,
    ChatBoxComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chat-app';
}
