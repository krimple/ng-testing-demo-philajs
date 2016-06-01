import { Injectable } from '@angular/core';
import {LoggingService, LoggingLevel} from './logging.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CalculatorService {
    valueStream$: Subject<number> = new Subject<number>();
    private _accumulator: number = 0;
    constructor(private loggingService: LoggingService) {
        this._accumulator = 0;
        this.valueStream$.next(0);
        loggingService.setLevel(LoggingLevel.TRACE);
        loggingService.warn(['Created Calculator Service']);
    }

    clear() {
        this._accumulator = 0;
        this.loggingService.trace(['Cleared accumulator']);
    }

    add(value: number) {
        this.loggingService.trace(['Adding ', value, ' to ', this._accumulator]);
        this._accumulator = this._accumulator + value;
        this.valueStream$.next(this._accumulator);
        this.loggingService.trace(['Result is', this._accumulator]);
    }

    subtract(value: number) {
        this.loggingService.trace(['Subracting', value, ' from ', this._accumulator]);
        this._accumulator = this._accumulator - value;
        this.valueStream$.next(this._accumulator);
        this.loggingService.trace(['Result is', this._accumulator]);
    }

    multiply(value: number) {
        this.loggingService.trace(['Multiplying', value, ' to ', this._accumulator]);
        this._accumulator = this._accumulator * value;
        this.valueStream$.next(this._accumulator);
        this.loggingService.trace(['Result is', this._accumulator]);
    }

    divide(value: number) {
        if (value != 0) {
            this.loggingService.trace(['Dividing', value, ' into ', this._accumulator]);
            this._accumulator = this._accumulator / value;
            this.valueStream$.next(this._accumulator);
            this.loggingService.trace(['Result is', this._accumulator]);
        }
    }
}