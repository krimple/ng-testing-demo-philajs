import {
    describe,
    it,
    xit,
    tick,
    expect,
    beforeEachProviders,
    beforeEach,
    injectAsync,
    afterEach
} from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {EmployeeFormComponent} from './employee-form.component';

describe('Employee Form Component Unit Test', () => {

    it('should work', () => {
        expect(1).toBe(1);
    });
    it('should create component with the tcb',
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb
                .createAsync(EmployeeFormComponent)
                .then((fixture: ComponentFixture<EmployeeFormComponent>) => {
                    return new Promise((resolve, reject) => {
                        let formComp: EmployeeFormComponent = fixture.componentInstance;
                        let formElement: any = fixture.nativeElement;
                        formElement.children[0][0].value = 'Chiles';
                        formElement.children[0][1].value = 'Smith';
                        formElement.children[0][2].value = 'chiles@smith.com';
                        // IMPORTANT - need turn for digest to work
                        tick();
                        expect(formComp.employee).toBeDefined();
                        //fixture.detectChanges();
                        debugger;
                        expect(formComp.employee.firstName).toBe('Chiles');
                        expect(formComp.employee.lastName).toBe('Smith');
                        expect(formComp.employee.email).toBe('chiles@smith.com');
                        resolve();
                    });
                });
        }));
});
