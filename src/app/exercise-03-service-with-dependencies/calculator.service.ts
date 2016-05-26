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
    }

    add(value: number) {
        this.loggingService.trace(['Adding ', value, ' to ', this.accumulator]);
        this.accumulator = this.accumulator + value;
        this.loggingService.trace(['Result is', this.accumulator]);
    }

    subtract(value: number) {
        this.accumulator = this.accumulator - value;
    }

    multiply(value: number) {
        this.accumulator = this.accumulator * value;
    }

    divide(value: number) {
        if (value != 0) {
            this.accumulator = this.accumulator / value;
        }
    }
}