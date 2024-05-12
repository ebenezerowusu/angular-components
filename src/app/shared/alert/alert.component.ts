import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() type!: 'success' | 'warning' | 'error';
  @Input() message!: string;
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';

  getAlertClasses() {
    return {
      'alert': true,
      [`alert-${this.type}`]: true,
      [`position-${this.position}`]: true
    };
  }
}
