import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './registrationform.component.html',
  styleUrl: './registrationform.component.css',
})
export class RegistrationformComponent {
  roleOptions = [
    'HR',
    'Fullstack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Cloud',
  ];
}
