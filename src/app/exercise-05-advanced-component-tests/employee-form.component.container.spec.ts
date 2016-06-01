import {
    beforeEach,
    xdescribe,
    describe,
    it,
    tick,
    flushMicrotasks,
    expect,
    fakeAsync,
    clearPendingTimers,
    async,
    inject} from '@angular/core/testing';
import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';
import {EmployeeFormComponent} from './employee-form.component';
import { dispatchEvent } from '@angular/platform-browser/testing';
import { By } from '@angular/platform-browser/src/dom/debug/by';
import { DebugElement, EventEmitter } from '@angular/core';
import { Employee } from './employee';
//TODO - this does not work - tick does not simulate passage of time,
// stolen hack from https://github.com/angular/material2/blob/master/src/components/input/input.spec.ts
// does not help either. Will update in a future post, but this is CLOSE to what you could
// do to test a component with the TestComponentBuilder
xdescribe('Employee Form Component Unit Test', () => {
    let tcb: TestComponentBuilder;
    let fixture: ComponentFixture<EmployeeFormComponent>;
    let form: DebugElement;
    let firstNameInput: DebugElement;
    let lastNameInput: DebugElement;
    let emailInput: DebugElement;
    let submitFormButton: HTMLButtonElement;
    let employeeEvent: EventEmitter<Employee>;
    let deliveredEmployee: Employee = null;

    function dispatchInputEvent(element: DebugElement, value: string) {
        let inputElement = <HTMLInputElement>element.nativeElement;
        inputElement.value = value;
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('input', true, true);
        inputElement.dispatchEvent(evt);
    }

    beforeEach(inject([TestComponentBuilder], (builder: TestComponentBuilder) => {
       tcb = builder;
    }));

    beforeEach(async(() => {
       tcb.createAsync(EmployeeFormComponent)
           .then((fx: ComponentFixture<EmployeeFormComponent>) => {
               fixture = fx;
               form = fx.debugElement.query(By.css('form'));
               firstNameInput = fx.debugElement.queryAll(By.css('input'))[0];
               lastNameInput = fx.debugElement.queryAll(By.css('input'))[1];
               emailInput = fx.debugElement.queryAll(By.css('input'))[2];
               employeeEvent = fx.componentInstance.onSubmit;
               submitFormButton = fx.debugElement.query(By.css('button')).nativeElement;
               employeeEvent.subscribe(
                   (employee) => {
                       console.log('***** EMPLOYEE DELIVERED', employee);
                       deliveredEmployee = employee;
                   }
               );
            });
    }));



    it('should properly digest form information to model', fakeAsync(() => {
        dispatchInputEvent(firstNameInput, 'Chiles');
        dispatchInputEvent(lastNameInput, 'Smith');
        dispatchInputEvent(emailInput, 'chiles@smith.com');
        tick();
        fixture.detectChanges();
        tick();
        fixture.componentInstance.process();
        tick();
        fixture.detectChanges();
        tick();
        submitFormButton.click();
        tick();
        expect(deliveredEmployee).toBeDefined();
        expect(deliveredEmployee.firstName).toBe('Chiles');
        expect(deliveredEmployee.lastName).toBe('Smith');
        expect(deliveredEmployee.email).toBe('chiles@smith.com');
    }));
});
