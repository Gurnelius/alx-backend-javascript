export default class Student {
    constructor(firstName, lastName, age) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._age = age;
    }
  
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    get age() {
      return this._age;
    }
  }
  