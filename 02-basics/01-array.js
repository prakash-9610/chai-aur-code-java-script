

//array 
const myArr = [0, 1, 2, 3, 4];
const myHeros = ["radha", "ram"];
const myArr2 = new Array(1, 2, 3, 4, 5, 6);
console.log(myArr[4]);


// Array Methods
// myArr.push(6);
// console.log((myArr));
// myArr.unshift(5);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof(newArr));

//slice , splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("c ", myArr);
console.log(myn2);

// note difference between slice and splice
// 1. slice me original array me change nhi hota hai
// 2. but splice me original array me change hota hai
// 3. splice me last index bhi include hoti hai
 


