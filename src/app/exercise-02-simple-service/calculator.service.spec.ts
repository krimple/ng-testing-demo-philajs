import {CalculatorService} from './calculator.service';
describe('calculator service', () => {
    let calculator: CalculatorService;

    beforeEach(() => {
        calculator = new CalculatorService();
    });

    it('should add', () => {
        calculator.add(10);
        expect(calculator.accumulator).toBe(10);
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