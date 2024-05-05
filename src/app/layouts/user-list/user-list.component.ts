import { Component } from '@angular/core';
import { UserItemComponent } from '../../components/user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    UserItemComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
}
