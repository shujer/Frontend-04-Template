class Sorted {
  constructor(data, compare) {
    this.data = data.slice();
    this.compare = compare || ((a, b) => a - b);
  }
  take() {
    if (!this.data.length) {
      return;
    }
    let minIndex = 0;
    let min = this.data[0];
    for (let i = 1; i < this.data.length; i++) {
      if (this.compare(this.data[i], min) < 0) {
        minIndex = i;
        min = this.data[i];
      }
    }
    this.data[minIndex] = this.data[this.data.length - 1];
    this.data.pop();
    return min;
  }
  insert(item) {
    this.data.push(item);
  }
  get length() {
    return this.data.length;
  }
}
