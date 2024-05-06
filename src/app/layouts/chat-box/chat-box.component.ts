import { Component, OnInit } from '@angular/core';
import { MessageItemComponent } from '../../components/message-item/message-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [
    CommonModule,
    MessageItemComponent
  ],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss'
})
export class ChatBoxComponent implements OnInit{
 
  currentUser = "abc";
  activeUser = "abc";
  public chat_logs : any = [
    {
      user: "abc",
      message: "Hello There"
    },
    {
      user: "abc",
      message: "Why are you not answer me"
    },
    {
      user: "def",
      message: "How are you?"
    },
    {
      user: "def",
      message: "hey"
    },
    {
      user: "def",
      message: "hey there"
    },
    {
      user: "def",
      message: "Hellooooo"
    },
    {
      user: "abc",
      message: "Fine, Thanks"
    },
    {
      user: "abc",
      message: "Fine, Thanks"
    },
    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    },    {
      user: "abc",
      message: "Fine, Thanks"
    }, 

  ]

  public combine_chat : any = [];

  ngOnInit(): void {

    for (let i = 0; i < this.chat_logs.length; i++) {
      let c_message = [this.chat_logs[i].message];
      
      let c_user = this.chat_logs[i].user;

      let c_o_user = {
        user: c_user,
        message: c_message
      };
      for (let j = i + 1; j < this.chat_logs.length; j++) {
        if (this.chat_logs[j].user === c_user) {
          c_message.push(this.chat_logs[j].message);
          i = j;
        }
        else 
          break;
      }
      this.combine_chat.push(c_o_user);
    }
  }

}
