import {CalculatorComponent} from './calculator.component';
import {CalculatorService} from './calculator.service';
import {LoggingService} from './logging.service';

describe('Calculator Component with Service...', () => {
    let loggingService: LoggingService;
    let calculatorService: CalculatorService;
    let calculatorComponent: CalculatorComponent;
    let result: number;

    beforeEach(() => {
        loggingService = new LoggingService();
        calculatorService = new CalculatorService(loggingService);
        calculatorComponent = new CalculatorComponent(calculatorService);
    });

    it('should add', () => {
       spyOn(calculatorService, 'add').and.callThrough();
       spyOn(calculatorService.valueStream$, 'next').and.callFake((value) => { result = value});
       calculatorComponent.add(100);
       // we aren't really in a unit test when we do things
       // like dig into the collaborator, but the data we're
       // binding to the component in the live instance is the
       // accumulator from the service...  Just showing what
       // is possible...  Better to run a component integration test
       // -- see calculator.component.container.spec.ts for that.
       expect(result).toBe(100);
       expect(calculatorService.add).toHaveBeenCalled();
       expect(calculatorService.valueStream$.next).toHaveBeenCalledWith(100);
    });
    // etc...
});