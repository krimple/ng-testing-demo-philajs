import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NgTestingDemoAppComponent, environment } from './app/';
import { FORM_PROVIDERS } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgTestingDemoAppComponent, [FORM_PROVIDERS, HTTP_PROVIDERS, ROUTER_PROVIDERS])
    .catch((e) => { console.log(e); });

