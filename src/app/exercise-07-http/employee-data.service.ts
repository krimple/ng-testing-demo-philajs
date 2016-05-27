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
                    let id = response.headers['locationId'];
                    if (id) {
                        resolve(id);
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
}