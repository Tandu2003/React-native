Array.prototype.myReduceRight = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[this.length - 1];

  for (let i = this.length - 1; i >= 0; i--) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const array = [1, 2, 3, 4, 5];

console.log(
  array.myReduceRight((acc, curr) => {
    return acc + curr;
  }, 0)
);
