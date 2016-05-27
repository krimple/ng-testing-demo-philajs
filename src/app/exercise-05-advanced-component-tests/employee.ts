export class Employee {
  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  public firstName: string;
  public lastName: string;
  public email: string;
}
