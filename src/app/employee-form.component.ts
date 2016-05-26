import {Component, EventEmitter, Output} from '@angular/core';
import { FORM_DIRECTIVES, NgForm } from '@angular/common';
import {Employee} from './employee';

@Component({
  selector: 'employee-form',
  template: `
    <form #employeeForm="ngForm" novalidate
      (ngSubmit)="process(employeeForm)">
      <input required
             ngControl="firstName"
             #firstName
             type="text">
      <input required
            ngControl="lastName"
            #lastName
            type="text">
      <input required
            ngControl="email"
            #email
            type="email">
      <button>Process</button>
    </form>
    <p>Indicators: {{ employeeForm.valid }}</p>
  `,
  directives: [FORM_DIRECTIVES]
})
export class EmployeeFormComponent {
  employee: Employee = new Employee("", "", "");
  @Output() onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();
  process(form: NgForm) {
    if (!form.valid) { return };
    let employee = new Employee(form.value.firstName, form.value.firstName, form.value.email);
    debugger;
    this.onSubmit.next(employee);
  }
}
