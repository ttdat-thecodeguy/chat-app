import { Component, OnInit } from '@angular/core';
import { MessageItemComponent } from '../../components/message-item/message-item.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';
import { MessageItem } from '../../domains/message.domain';
@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [
    CommonModule,
    MessageItemComponent,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss'
})
export class ChatBoxComponent implements OnInit {
  stopChat() {
    this.isChatting = false
  }
  chatDebounce = new Subject<void>();
  currentUser = "abc";
  activeUser = "abc";
  message = "";
  last_conversation_updated_at = "2024-03-31T02:04:09";
  isChatting = false;
  public chat_logs : MessageItem[] = [];
  constructor() {
    this.chatDebounce.pipe( debounceTime(500) ).subscribe( _ => this.chatting() )
  }

  chatting() {
    console.log("chat at : " + new Date().toLocaleTimeString());
    console.log("chatting...");
    this.isChatting = true;

    setTimeout(() => {
      this.isChatting = false;
    }, 1000);
  }

  sendChat(user: string) {
    if (this.message === "") return;
    let lastUpdated = new Date(this.last_conversation_updated_at);
    let now = new Date();
    let diffMinute = (now.getTime() - lastUpdated.getTime()) / (1000 * 60);
    if (diffMinute <= 5) {
      this.combine_chat[this.combine_chat.length - 1].message = [...this.combine_chat[this.combine_chat.length - 1].message, this.message]
    }
    else {
      this.combine_chat.push({
        user,
        message: [this.message]
      });
    }
    this.message = "";
    this.last_conversation_updated_at = new Date().toISOString();
  } 
  
  chat() {
    this.chatDebounce.next()
  }
  public combine_chat : any = [];

  ngOnInit(): void {
    for (let i = 0; i < this.chat_logs.length; i++) {
      let currMessage = [this.chat_logs[i].message];
      let currUser = this.chat_logs[i].user;
      let cObjectUser = {
        user: currUser,
        message: currMessage,
        updateAt: this.chat_logs[i].updated_at
      };
      for (let j = i + 1; j < this.chat_logs.length; j++) {
        if (this.chat_logs[j].user === currUser) {
          currMessage.push(this.chat_logs[j].message);
          i = j;
        }
        else break;
      }
      this.combine_chat.push(cObjectUser);
    }
    this.last_conversation_updated_at = this.combine_chat[this.combine_chat.length - 1].updated_at;
  }
}