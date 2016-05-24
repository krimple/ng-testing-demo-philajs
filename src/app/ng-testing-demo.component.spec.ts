import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgTestingDemoAppComponent } from '../app/ng-testing-demo.component';

beforeEachProviders(() => [NgTestingDemoAppComponent]);

describe('App: NgTestingDemo', () => {
  it('should create the app',
      inject([NgTestingDemoAppComponent], (app: NgTestingDemoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-testing-demo works!\'',
      inject([NgTestingDemoAppComponent], (app: NgTestingDemoAppComponent) => {
    expect(app.title).toEqual('ng-testing-demo works!');
  }));
});
