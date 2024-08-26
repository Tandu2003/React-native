Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];

  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const array = [1, 2, 3, 4, 5];

console.log(
  array.myReduce((acc, curr) => {
    return acc + curr;
  }, 0)
);
