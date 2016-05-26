export class CalculatorService {
    accumulator: number = 0;

    clear() {
        this.accumulator = 0;
    }

    add(value: number) {
        this.accumulator = this.accumulator + value;
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