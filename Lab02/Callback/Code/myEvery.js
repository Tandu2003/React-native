Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 6, 8, 10];

console.log(
  arr1.myEvery((arr) => {
    return arr % 2 === 0;
  })
);

console.log(
  arr2.myEvery((arr) => {
    return arr % 2 === 0;
  })
);
