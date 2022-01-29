let obj = {
  name: "masai",
  password: "admin@123",
  hostname: "masaischool",
  client: "chrome",
};
let { name, password } = obj;
console.log("Destructure 1:", name, password);

let obj2 = { name: "masai", address: { pincode: 560095 } };

let { pincode: pin } = obj2.address;
console.log("Destructure 2:", pin);

let [first, second, ...arr] = [100, 200, 500, 600];

console.log("Destructure 3:", first, second, arr);

let arr1 = [100, [50, 60, 70]];
let [arr2, [arr3]] = arr1;
console.log("Destructure 4:", arr3);

let obj3 = [
  1,
  {
    arr: [1, 2, 3],
  },
];
let [
  num,
  {
    arr: [f1, ...newArr],
  },
] = obj3;
console.log("Destructure 5:", newArr);
