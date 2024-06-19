import { Component } from '@angular/core';
import { UserItemComponent } from '../../components/user-item/user-item.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    UserItemComponent,
    DialogModule,
    InputTextModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  constructor(private userService : UserService) {}
}
