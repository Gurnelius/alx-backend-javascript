const CarSymbol = Symbol('Car');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[CarSymbol] = this.constructor;  // Symbol to hold constructor reference
  }

  cloneCar() {
    // Using the constructor stored in the Symbol to create a new instance
    return new this[CarSymbol]();
  }
}
