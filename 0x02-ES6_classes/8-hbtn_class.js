class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](class_) {
    if (class_ === 'number') {
      return this._size;
    }
    return this._location;
  }
}

export default HolbertonClass;
