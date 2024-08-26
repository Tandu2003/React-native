Array.prototype.myFilter = function (callback) {
  const newArray = [];

  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      newArray.push(this[index]);
    }
  }

  return newArray;
};

var array = [1, 2, 3, 4, 5, 6, 7];

console.log(
  array.myFilter((arr) => {
    return arr % 2 == 0;
  })
);
