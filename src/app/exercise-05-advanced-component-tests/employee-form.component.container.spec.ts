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
import { DebugElement } from '@angular/core';

//TODO - this does not work - tick does not simulate passage of time,
// stolen hack from https://github.com/angular/material2/blob/master/src/components/input/input.spec.ts
// does not help either. Will update in a future post, but this is CLOSE to what you could
// do to test a component with the TestComponentBuilder
xdescribe('Employee Form Component Unit Test', () => {
    let tcb: TestComponentBuilder;
    let fixture: ComponentFixture<EmployeeFormComponent>;
    let firstNameInput: DebugElement;
    let lastNameInput: DebugElement;
    let emailInput: DebugElement;

    function dispatchInputEvent(element: DebugElement, value: string) {
        let inputElement = <HTMLInputElement>element.nativeElement;
        inputElement.value = value;
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('blur', true, true);
        inputElement.dispatchEvent(evt);
    }

    beforeEach(inject([TestComponentBuilder], (builder: TestComponentBuilder) => {
       tcb = builder;
    }));

    beforeEach(async(() => {
       tcb.createAsync(EmployeeFormComponent)
           .then((fx) => {
               fixture = fx;
               firstNameInput = fx.debugElement.queryAll(By.css('input'))[0];
               lastNameInput = fx.debugElement.queryAll(By.css('input'))[1];
               emailInput = fx.debugElement.queryAll(By.css('input'))[2];
            });
    }));



    it('should properly digest form information to model', fakeAsync(() => {
        dispatchInputEvent(firstNameInput, 'Chiles');
        dispatchInputEvent(lastNameInput, 'Smith');
        dispatchInputEvent(emailInput, 'chiles@smith.com');
        tick();
        fixture.detectChanges();
        tick();
        expect(fixture.componentInstance.employee).toBeDefined();
        expect(fixture.componentInstance.employee.firstName).toBe('Chiles');
        expect(fixture.componentInstance.employee.lastName).toBe('Smith');
        expect(fixture.componentInstance.employee.email).toBe('chiles@smith.com');
    }));
});
