import {
    describe,
    it,
    tick,
    expect,
    fakeAsync,
    inject,
} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {EmployeeFormComponent} from './employee-form.component';

describe('Employee Form Component Unit Test', () => {
    it('should properly digest form information to model',
        inject([TestComponentBuilder], fakeAsync((tcb) => {
            tcb.createAsync(EmployeeFormComponent)
                .then((fixture) => {
                    let formComp: EmployeeFormComponent = fixture.componentInstance;
                    let formElement: any = fixture.nativeElement;
                    formElement.children[0][0].value = 'Chiles';
                    formElement.children[0][1].value = 'Smith';
                    formElement.children[0][2].value = 'chiles@smith.com';
                    // IMPORTANT - need turn for digest to work
                    tick();
                    expect(formComp.employee).toBeDefined();
                    fixture.componentRef.changeDetectorRef.markForCheck();
                    expect(formComp.employee.firstName).toBe('Chiles');
                    expect(formComp.employee.lastName).toBe('Smith');
                    expect(formComp.employee.email).toBe('chiles@smith.com');
                });
        })));
});
