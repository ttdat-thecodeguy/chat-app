import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-item',
  standalone: true,
  imports: [],
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.scss'
})  
export class MessageItemComponent {
  @Input({required : true}) isYours!: boolean;
  @Input() text: String = "Hello";
}
