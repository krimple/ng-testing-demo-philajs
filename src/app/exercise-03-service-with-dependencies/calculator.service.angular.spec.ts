import {
    describe,
    it,
    beforeEachProviders,
    inject,
    expect
} from '@angular/core/testing';

import { provide } from '@angular/core';

import {CalculatorService} from './calculator.service';
import {LoggingService, LoggingLevel} from './logging.service';

describe('Angular 2 Calculator Service Midway Test', () => {

    describe('Using both services', () => {

            beforeEachProviders(() => {
                return [
                    CalculatorService,
                    LoggingService
                ];
            });

            it('should add', inject([CalculatorService], (calculator) => {
                calculator.add(30);
                expect(calculator.accumulator).toBe(30);
            }));
    });

    describe('Using Both Services with SpyOn for Collaborator', () => {

            beforeEachProviders(() => {
                return [
                    CalculatorService,
                    LoggingService
                ];
            });

            it('should add', inject([CalculatorService, LoggingService],
                (calculator, loggingService) => {
                loggingService.setLevel(LoggingLevel.TRACE);
                window['spyOn'](loggingService, 'trace');
                calculator.add(30);
                expect(calculator.accumulator).toBe(30);
                expect(loggingService.trace).toHaveBeenCalled();
            }));
    });

    describe('Using a Service with an injector mock', () => {

        let traceCalled = false;
        beforeEachProviders(() => {
            return [
                CalculatorService,
                provide(LoggingService, {
                    useValue: {
                        trace: () => {
                            traceCalled = true;
                        },
                        setLevel: () => { }
                    }
                })
            ];
        });

        it('should add', inject([CalculatorService], (calculator) => {
                calculator.add(30);
                expect(calculator.accumulator).toBe(30);
                expect(traceCalled).toBe(true);
        }));
    });
});