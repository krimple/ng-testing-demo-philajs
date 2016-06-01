import {
    describe,
    it,
    beforeEach,
    afterEach,
    beforeEachProviders,
    expect,
    inject,
    async,
} from '@angular/core/testing';

import {provide} from '@angular/core';

import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';
import {CalculatorService} from './calculator.service';
import {LoggingService} from './logging.service';
import {CalculatorComponent} from './calculator.component';

describe('Calculator Component (in container)', () => {
    let tcb: TestComponentBuilder;
    let fixture: ComponentFixture<CalculatorComponent>;
    let calculatorService: CalculatorService;

    // set up our injectables
    beforeEachProviders(() => {
        // custom wiring
        let loggingService = new LoggingService();
        let calculatorService = new CalculatorService(loggingService);
        return [
            provide(CalculatorService, { useValue: calculatorService }),
            provide(LoggingService, { useValue: loggingService })
        ];
    });

    // set up our builder
    beforeEach(inject([TestComponentBuilder, CalculatorService], (builder: TestComponentBuilder, service: CalculatorService) => {
        tcb = builder;
        calculatorService = service;
    }));

    // create the component - also trigger the lifecycle methods,
    // these are not triggered by the TestComponentBuilder
    beforeEach(async(() => {
        tcb.createAsync(CalculatorComponent)
            .then((f) => {
                f.componentInstance.ngOnInit();
                fixture = f;
            });
    }));

    // clean up and unsubscribe
    afterEach(async(() => {
        fixture.componentInstance.ngOnDestroy();
    }));

    it('should add', () => {
        fixture.componentInstance.add(10);
        expect(fixture.componentInstance.accumulatorValue).toBe(10);
    });

    it('should subtract', () => {
        fixture.componentInstance.subtract(10);
        expect(fixture.componentInstance.accumulatorValue).toBe(-10);
    });

    // etc...
});
