class RangeIterator {
  constructor(start = 0, end = Infinity, step = 1) {
    this.start = start;
    this.end = end;
    this.step = step;
  }

  next = () => {
    this.current = this.start;
    this.start = this.start + this.step;
    if (this.current < this.end) {
      return { value: this.current, done: false };
    }
    return { done: true };
  };

  [Symbol.iterator]() {
    return {
      next: this.next,
    };
  }
}

var rangeItr = new RangeIterator(1, 10, 1);
for (let val of rangeItr) {
  console.log(val);
}

export default RangeIterator;
