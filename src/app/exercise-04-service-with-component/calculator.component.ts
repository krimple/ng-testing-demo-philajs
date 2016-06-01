import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { LoggingService } from './logging.service';
@Component({
    moduleId: module.id,
    template: `
        Accum:  {{ accumulatorValue }}<br/>
        <input #operand type="number">
        <button (click)="add(operand.valueAsNumber)">+</button>
        <button (click)="subtract(operand.valueAsNumber)">-</button>
        <button (click)="multiply(operand.valueAsNumber)">X</button>
        <button (click)="divide(operand.valueAsNumber)">/</button>
        <button (click)="clear()">C</button>
        
    `,
    selector: 'calculator',
    providers: [CalculatorService]
})
export class CalculatorComponent implements OnChanges, OnDestroy, OnInit {
    accumulatorValue: number;
    subscription: any;
    constructor(private calculator: CalculatorService) { }

    ngOnInit() {
        console.log('setting up subscription');
        this.subscription = this.calculator.valueStream$.subscribe(
            (value) => {
                console.log('new accumulator value', value);
                this.accumulatorValue = value;
            },
            (errors) => {
                console.error(errors);
            },
            () => {
                console.log('stream complete.');
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    add(value) {
      this.calculator.add(value);
    }

    subtract(value) {
      this.calculator.subtract(value);
    }

    multiply(value) {
        this.calculator.multiply(value);
    }

    divide(value) {
        this.calculator.divide(value);
    }

    clear() {
        this.calculator.clear();
    }

    ngOnChanges(changeSet: any) {
        console.log(changeSet);
    }

}