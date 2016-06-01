import {Component, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import { FORM_DIRECTIVES, NgForm } from '@angular/common';
import {Employee} from './employee';

@Component({
  selector: 'employee-form',
  template: `
    <form novalidate #employeeForm="ngForm"
             (ngSubmit)="process(employee)">
      <input required #firstName
             [ngControl]="firstName"
             [(ngModel)]="employee.firstName"  
             type="text">
      <input required #lastName
            [ngControl]="lastName"
            [(ngModel)]="employee.lastName"
            type="text">
      <input required #email
            [ngControl]="email"
            [(ngModel)]="employee.email"
            type="email">
      <button [disabled]="!employeeForm.valid">Process</button>
    </form>
    <p>Indicators: {{ employeeForm.value | json }}</p>
  `,
  directives: [FORM_DIRECTIVES, NgForm]
})
export class EmployeeFormComponent {
  employee: Employee = new Employee("", "", "");
  @Output() onSubmit = new EventEmitter<Employee>();
  process() {
    debugger;
    this.onSubmit.emit(this.employee);
  }
}
