const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const reversed = {};
for (let key in obj) {
  reversed[obj[key]] = key;
}

console.log(reversed);
