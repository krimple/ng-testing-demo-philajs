import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Employee} from './employee';
@Injectable()
export class EmployeeDataService {

    constructor(private http: Http) { }

    saveEmployee(employee: Employee) {
        return new Promise((resolve, reject) => {
          this.http.post('/api/employees', JSON.stringify(employee))
            .subscribe(
                (response: Response) => {
                    let id = response.headers.get('LocationId');
                    if (id && typeof id === 'string') {
                        resolve(Number.parseInt(id));
                    } else {
                        // or perhaps fail?
                        reject('no id');
                    }
                },
                (failure: any) => {
                    console.log(failure);
                    reject(failure);
                }
            );
        });
    }

    getEmployees () {
        return new Promise((resolve, reject) => {
          this.http.get('/api/employees')
            .subscribe(
                (response: Response) => {
                    resolve(response
                        .json()
                        .map((e) => {
                            return new Employee(
                                e['firstName'], e['lastName'], e['email'], e['id'])
                        }));
            });
        })

    }
}