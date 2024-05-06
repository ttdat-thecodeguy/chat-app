import { Component } from '@angular/core';
import { UserItemComponent } from '../../components/user-item/user-item.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    UserItemComponent,
    DialogModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
