import { Injectable } from '@angular/core';
import {LoggingService, LoggingLevel} from './logging.service';

@Injectable()
export class CalculatorService {

    constructor(private loggingService: LoggingService) {
        loggingService.setLevel(LoggingLevel.TRACE);
    }
    accumulator: number = 0;

    clear() {
        this.accumulator = 0;
        this.loggingService.trace(['Cleared accumulator']);
    }

    add(value: number) {
        this.loggingService.trace(['Adding ', value, ' to ', this.accumulator]);
        this.accumulator = this.accumulator + value;
        this.loggingService.trace(['Result is', this.accumulator]);
    }

    subtract(value: number) {
        this.loggingService.trace(['Subracting', value, ' from ', this.accumulator]);
        this.accumulator = this.accumulator - value;
        this.loggingService.trace(['Result is', this.accumulator]);
    }

    multiply(value: number) {
        this.loggingService.trace(['Multiplying', value, ' to ', this.accumulator]);
        this.accumulator = this.accumulator * value;
        this.loggingService.trace(['Result is', this.accumulator]);
    }

    divide(value: number) {
        this.loggingService.trace(['Dividing', value, ' into ', this.accumulator]);
        if (value != 0) {
            this.accumulator = this.accumulator / value;
        }
        this.loggingService.trace(['Result is', this.accumulator]);
    }
}