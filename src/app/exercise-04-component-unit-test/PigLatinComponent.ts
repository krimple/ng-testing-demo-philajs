import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, FORM_PROVIDERS, Control, ControlGroup, FormBuilder, Validators } from '@angular/common';

@Component({
   selector: 'pig-latin',
   template: `
    <form [ngFormModel]="pigLatinGroup">
      <input type="text" [ngControl]="pigLatinGroup.pigLatinInput">
    </form>
   `,
   directives: [FORM_DIRECTIVES]
})
export class PigLatinComponent implements OnInit {

    pigLatinGroup: ControlGroup;

    constructor(formBuilder: FormBuilder) {
        this.pigLatinGroup = formBuilder.group({
            pigLatinInput: ['', Validators.required]
        });
    }
    ngOnInit() {
        debugger;
        this.pigLatinGroup.controls['pigLatinInput'].valueChanges.subscribe(
            (value) => {
                console.log('new value received', value);
            }
        );
    }

}