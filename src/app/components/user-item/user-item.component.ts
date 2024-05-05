import { Component, Input } from '@angular/core';
import { UserItem } from '../../domains/user.domain';
import { CLabelComponent } from '../c-label/c-label.component';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [
    CLabelComponent
  ],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent {
  @Input() userItem!: UserItem;
}
