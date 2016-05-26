import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeFormComponent } from './employee-form.component';
import { PigLatinComponent } from './exercise-04-component-unit-test/PigLatinComponent';
import { CalculatorComponent } from './calculator.component';

@Component({
  moduleId: module.id,
  selector: 'ng-testing-demo-app',
  template: `
     <calculator></calculator>
  <h2>Bound Employee</h2>
  {{ employee | json }}

    <h2>Edit an employee</h2>
    <employee-form (onSubmit)="setEmployee($event)"></employee-form>
    
    <pig-latin></pig-latin>
  `,
  styleUrls: ['ng-testing-demo.component.css'],
  directives: [CalculatorComponent, EmployeeFormComponent, PigLatinComponent]
})
export class NgTestingDemoAppComponent {
  private employee: Employee;
  title = 'ng-testing-demo works!';

  setEmployee(employee: Employee) {
    this.employee = employee;
  }
}
