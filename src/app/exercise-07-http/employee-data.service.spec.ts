import {provide} from '@angular/core';
import {
    it,
    describe,
    expect,
    inject,
    async,
    afterEach,
    beforeEachProviders,
} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {
    Headers,
    Http,
    ConnectionBackend,
    BaseRequestOptions,
    Response,
    ResponseOptions,
    RequestMethod,
} from '@angular/http';

import {Employee} from './employee';
import {EmployeeDataService} from './employee-data.service';

describe('Employee Data Service', () => {
    beforeEachProviders(() => {
        return [
            EmployeeDataService,
            BaseRequestOptions,
            MockBackend,
            provide(Http, {useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }, deps: [MockBackend, BaseRequestOptions]}),
        ]
    });

    it('creates employee', async(inject([MockBackend, EmployeeDataService],
        (mockBackend: MockBackend, service: EmployeeDataService) => {
        mockBackend.connections.subscribe((connection: MockConnection) => {
            expect(connection.request.url).toBe('/api/employees');
            expect(connection.request.method).toBe(RequestMethod.Post);
            connection.mockRespond(
                new Response(<any>{
                    body: "OK",
                    status: 201,
                    statusText: 'CREATED',
                    headers: new Headers({"LocationId": "150"})
                })
            );

        });
        let promise = service.saveEmployee(new Employee('Ken', 'Rimple', 'krimple@chariotsolutions.com'))
            promise.then(
                (id) => {
                    expect(id).toBe(150);
                },
                (error) => {
                    fail('Save of employee failed with unexpected error ' + error);
                });


        mockBackend.verifyNoPendingRequests();
        mockBackend.resolveAllConnections();
    })));

    it('fetches a list of employees', async(inject([MockBackend, EmployeeDataService],
        (mockBackend: MockBackend, service: EmployeeDataService) => {
            mockBackend.connections.subscribe((connection: MockConnection) => {
                expect(connection.request.url).toBe('/api/employees');
                expect(connection.request.method).toBe(RequestMethod.Get);
                connection.mockRespond(
                    new Response(<any>{
                        body: [
                            {
                                "id": 1,
                                "firstName": "Zelda",
                                "lastName": "Rimple",
                                "email": "zelda@rimple.com"
                            },
                            {
                                "id": 2,
                                "firstName": "Derek",
                                "lastName": "Rimple",
                                "email": "derek@rimple.com"
                            },
                            {
                                "id": 3,
                                "firstName": "Teddy",
                                "lastName": "Rimple",
                                "email": "teddy@rimple.com"
                            }
                        ]
                    }));
            });
 
            service.getEmployees()
                .then(
                    (results: Array<any>) => {
                        expect(results.length).toBe(3);
                    },
                    (error) => {
                        fail('Invalid response - should not happen in this test ' + error);
                    }
                )
        })));
});