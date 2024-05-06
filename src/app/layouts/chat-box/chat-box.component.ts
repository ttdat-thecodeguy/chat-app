import { Component } from '@angular/core';
import { MessageItemComponent } from '../../components/message-item/message-item.component';

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [
    MessageItemComponent
  ],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss'
})
export class ChatBoxComponent {

}
