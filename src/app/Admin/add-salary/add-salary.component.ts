import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-salary',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-salary.component.html',
  styleUrl: './add-salary.component.css'
})
export class AddSalaryComponent {
  addSalary() {
    console.log(['/add-salary'])
    window.alert("Salary Added Successfully")
  }

  salary: number = 0;
  allowance: number = 0;
  total: number = 0;

  calculateTotal() {
    this.total = this.salary + this.allowance;
  }

  ngOnInit() {
    // Call calculateTotal initially to set the total value
    this.calculateTotal();
  }

  onInputChange() {
    // This method will be called whenever salary or allowance changes (keyup event)
    this.calculateTotal();
  }
}
