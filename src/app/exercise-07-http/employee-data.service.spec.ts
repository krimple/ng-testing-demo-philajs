import {
    beforeEachProviders,
    xdescribe,
    it,
    injectAsync,
    inject,
    expect
} from '@angular/core/testing';

import {MockBackend, MockConnection} from '@angular/http/testing';

import {provide} from '@angular/core';
import {Http, HTTP_PROVIDERS, XHRBackend, BaseRequestOptions, Connection, ConnectionBackend, Headers, Response, ResponseOptions} from '@angular/http';
import {Employee} from './employee';
import {EmployeeDataService} from './employee-data.service';

xdescribe('Employee Data Service', () => {
    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            EmployeeDataService,
            BaseRequestOptions,
            MockBackend,
            //provide(XHRBackend, {useClass: MockBackend}),
            provide(Http, {useFactory: (backend, options) => {
                return new Http(backend, options);
                }, deps: [MockBackend, BaseRequestOptions]}),
        ];
    });
    it('should get blogs', inject([XHRBackend], (mockBackend:MockBackend) => {
        let headers: Headers = new Headers({
          "LocationId": "150"
        });
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        headers: headers
                    })));
            });
    }));

    it('should create an employee',
        injectAsync([Http, EmployeeDataService], (http, service) => {
            return new Promise((resolve, reject) => {
                let promise = service.saveEmployee(
                    new Employee('Ken', 'Rimple', 'ken.rimple@testing.com'));
                promise.then(
                    (key) => {
                        if (typeof key === 'number' && key === 150) resolve();
                    },
                    (error) => {
                        reject(error);
                    });
            });
        }));
});