import Car from './10-car';

class EVCar extends Car {
  constructor(brand = '', motor = '', color = '', range = '') {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  get range() {
    return this._range;
  }

  set range(range) {
    this._range = range;
  }
}

export default EVCar;
