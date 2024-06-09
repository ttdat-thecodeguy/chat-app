import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from '../../layouts/user-list/user-list.component'
import { ChatBoxComponent } from '../../layouts/chat-box/chat-box.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    InputTextModule,
    CommonModule, 
    RouterOutlet,
    UserListComponent,
    ChatBoxComponent,
    DialogModule,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  title = 'chat-app';
  visible: boolean = false;
  showDialog() {
      this.visible = true;
  }
}
