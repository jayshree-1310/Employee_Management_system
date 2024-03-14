import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registrationform',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './registrationform.component.html',
  styleUrl: './registrationform.component.css'
})
export class RegistrationformComponent {
  educationOptions = [
    '10th pass',
    'diploma',
    'graduate',
    'post graduate',
    'PhD',
  ];


}
