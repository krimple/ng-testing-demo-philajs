import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NgTestingDemoAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgTestingDemoAppComponent);

