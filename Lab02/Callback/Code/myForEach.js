Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const array = [1, 2, 3, 4, 5];

array.myForEach((item) => {
  console.log(item);
});
