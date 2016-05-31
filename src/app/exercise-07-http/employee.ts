export class Employee {
  constructor(firstName: string, lastName: string, email: string, 
              id: number = undefined) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    if (id) {
        this.id = id;
    }
  }
    
  public firstName: string;
  public lastName: string;
  public email: string;
  public id: number;
}
