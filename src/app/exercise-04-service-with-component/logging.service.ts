import {Injectable} from '@angular/core';

@Injectable()
export class LoggingService {
    private logLevel: LoggingLevel = LoggingLevel.DEBUG;
    
    setLevel(level: LoggingLevel) {
        this.logLevel = level;
    }
    
    info(messages: any[]) {
        let outputMessage = "(INFO) - ";
        messages.forEach(
            (msg) => { outputMessage += ' ' + msg } 
        );
        console.info(outputMessage);
    }
    warn(messages: any[]) {
        if (this.logLevel === LoggingLevel.INFO) return;
        
        let outputMessage = "(WARN) - ";
        messages.forEach(
            (msg) => { outputMessage += ' ' + msg } 
        );
        console.warn(outputMessage);
    }
    
    debug(messages: any[]) {
        if (this.logLevel === LoggingLevel.WARN || 
            this.logLevel === LoggingLevel.INFO) return;
        
        let outputMessage = "(DEBUG) - ";
        messages.forEach(
            (msg) => { outputMessage += ' ' + msg } 
        );
        console.debug(outputMessage);
    }
     
    trace(messages: any[]) {
        if (this.logLevel === LoggingLevel.DEBUG ||
            this.logLevel === LoggingLevel.WARN || 
            this.logLevel === LoggingLevel.INFO) return;
        
        let outputMessage = "(TRACE) - ";
        messages.forEach(
            (msg) => { outputMessage += ' ' + msg } 
        );
        console.trace(outputMessage);
    }
}

export enum LoggingLevel {
    INFO,
    WARN,
    DEBUG,
    TRACE
}
