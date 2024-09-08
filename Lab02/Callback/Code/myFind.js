Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

const array = [1, 2, 3, 4, 5];

console.log(array.myFind((element) => element > 3));
console.log(array.myFind((element) => element > 6));
