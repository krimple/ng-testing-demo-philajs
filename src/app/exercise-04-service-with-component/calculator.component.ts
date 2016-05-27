import { Component, OnChanges } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { LoggingService } from './logging.service';
@Component({
    moduleId: module.id,
    template: `
        Accum:  {{ calculator | json }}<br/>
        <input #value type="number">
        <button (click)="add(value)">+</button>
        <button (click)="subtract(value)">-</button>
        <button (click)="multiply(value)">X</button>
        <button (click)="divide(value)">/</button>
        <button (click)="clear()">C</button>
        
    `,
    selector: 'calculator',
    providers: [CalculatorService, LoggingService]
})
export class CalculatorComponent implements OnChanges {

    constructor(private calculator: CalculatorService) { }
    add(value) {
      this.calculator.add(value.valueAsNumber);
    }

    subtract(value) {
      this.calculator.subtract(value.valueAsNumber);
    }

    multiply(value) {
        this.calculator.multiply(value.valueAsNumber);
    }

    divide(value) {
        this.calculator.divide(value.valueAsNumber);
    }

    clear() {
        this.calculator.clear();
    }

    ngOnChanges(changeSet: any) {
        console.log(changeSet);
    }

}