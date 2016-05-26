import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NgTestingDemoAppComponent, environment } from './app/';
import { FORM_PROVIDERS } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgTestingDemoAppComponent, [FORM_PROVIDERS])
    .catch((error) =>  { console.log(error)});

