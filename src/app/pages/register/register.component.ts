import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { Tag } from '../../domains/tag.domain';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    MultiSelectModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  tags: Tag[] = [
    {
      id: 1,
      name: 'Angular'
    },
    {
      id: 2,
      name: 'React'
    },
    {
      id: 3,
      name: 'Vue'
    },
    {
      id: 4,
      name: 'Angular'
    }
  ];
  constructor() {

  }
}
