import { Component, OnChanges } from '@angular/core';
import { Calculator } from './exercise-01-simple-class/calculator';
@Component({
    moduleId: module.id,
    template: `
        Accum:  {{ calculator | json }}<br/>
        <input #value type="number">
        <button (click)="add(value)">+</button>
    `,
    selector: 'calculator'
})
export class CalculatorComponent implements OnChanges {
    private calculator: Calculator = new Calculator();

    add(value) {
      this.calculator.add(value.valueAsNumber);
    }

    ngOnChanges(changeSet: any) {
        console.log(changeSet);
    }

}