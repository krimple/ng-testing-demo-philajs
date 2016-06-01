import { Component } from '@angular/core';
import { Employee } from './exercise-05-advanced-component-tests/employee';
import { EmployeeFormComponent } from './exercise-05-advanced-component-tests/employee-form.component';
import { CalculatorComponent } from './exercise-04-service-with-component/calculator.component';
import { ArtEaselComponent } from './exercise-05-advanced-component-tests/art-easel.component';
import { PigLatinPipe } from './exercise-06-pipes/pig-latin.pipe';
import { LoggingService } from './exercise-04-service-with-component/logging.service';
import { CalculatorService } from './exercise-04-service-with-component/calculator.service';

@Component({
  moduleId: module.id,
  selector: 'ng-testing-demo-app',
  template: `
        <div class="panel panel-default">
            <div class="panel-heading">Calculator Demo</div> 
            <div class="panel-body">
                <calculator></calculator>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">Pig Latin Pipe Demo</div> 
            <div class="panel-body">
                <input [(ngModel)]="phrase"> {{ phrase | piglatin }}
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">Calculator Demo</div> 
            <div class="panel-body">
              {{ employee | json }}
              <h2>Edit an employee</h2>
              <employee-form (onSubmit)="setEmployee($event)"></employee-form> 
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">Draw on Canvas</div> 
            <div class="panel-body">
              <art-easel width="800" height="600"></art-easel>
            </div>
        </div>
  `,
  styleUrls: ['ng-testing-demo.component.css'],
  pipes: [PigLatinPipe],
  providers: [LoggingService, CalculatorService],
  directives: [ArtEaselComponent, CalculatorComponent, EmployeeFormComponent]
})
export class NgTestingDemoAppComponent {
  private employee: Employee;
  title = 'ng-testing-demo works!';

  setEmployee(employee: Employee) {
    this.employee = employee;
  }
}
