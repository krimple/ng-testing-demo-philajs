import {CalculatorService} from './calculator.service';
import {LoggingService} from './logging.service';
describe('calculator service with dependencies', () => {
    let calculator: CalculatorService;
    let loggingService;

    beforeEach(() => {
        loggingService = new LoggingService();
        calculator = new CalculatorService(loggingService);
        spyOn(loggingService, "trace");
    });

    it('should add', () => {
        calculator.add(10);
        expect(calculator.accumulator).toBe(10);
        expect(loggingService.trace).toHaveBeenCalled();
    });

    it('should subtract', () => {
        calculator.subtract(10);
        expect(calculator.accumulator).toBe(-10);
    });

    it('should multiply', () => {
        calculator.add(10);
        calculator.multiply(10);
        expect(calculator.accumulator).toBe(100);
    });

    it('should divide', () => {
        calculator.add(10);
        calculator.divide(10);
        expect(calculator.accumulator).toBe(1);
    });

});