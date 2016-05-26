import {LoggingService} from './logging.service';
describe('Logging service', () => {
    let loggingService: LoggingService;
    beforeEach(() => {
        // tricky eh?
        loggingService = new LoggingService();
        spyOn(console, 'debug');
        spyOn(console, 'trace');
    });

    it('defaults to DEBUG', () => {
        loggingService.debug(['Hi there folks!']);
        expect(console.debug).toHaveBeenCalledWith( '(DEBUG) -  Hi there folks!');
    });

    it('should not output TRACE by default', () => {
        loggingService.trace(['Hi there folks']);
        expect(console.trace).not.toHaveBeenCalled();
    });
    //...
});