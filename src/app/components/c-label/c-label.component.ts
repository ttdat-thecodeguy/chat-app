import { Component, Input } from '@angular/core';
import { COLOR } from '../../constraints/color';

@Component({
  selector: 'app-c-label',
  standalone: true,
  imports: [],
  templateUrl: './c-label.component.html',
  styleUrl: './c-label.component.scss'
})
export class CLabelComponent {
  @Input({required: true}) text!: string;
  @Input({required: true}) color: string = COLOR.GRAY; 
}
