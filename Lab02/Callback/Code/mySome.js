Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 5, 7, 9];

console.log(arr1.mySome((arr) => arr % 2 === 0));
console.log(arr2.mySome((arr) => arr % 2 === 0));
