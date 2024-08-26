Array.prototype.myMap = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }

  return newArray;
};

var array = [1, 2, 3, 4, 5];

console.log(
  array.myMap((arr) => {
    return arr * 2;
  })
);
