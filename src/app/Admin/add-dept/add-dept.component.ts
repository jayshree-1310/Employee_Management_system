import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-dept',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-dept.component.html',
  styleUrl: './add-dept.component.css'
})
export class AddDeptComponent {
  onInputChange() {
    throw new Error('Method not implemented.');
  }
  addDepartment() {
    console.log(['/add-dept'])
    window.alert("Department Added Successfully")
  }
  department: number = 0;
}

