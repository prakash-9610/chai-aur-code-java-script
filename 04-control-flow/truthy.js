const userEmail = "prakashai";
// if (userEmail) {
//     console.log("got user eamil");
// }
// else {
//     console.log("dont have user email");
// }

// falsy values
// false,0,-0,BigInt 0n, "", null, undefined,NaN

// truthy values
// "0", 'false', " ", [],{},function() {},

if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

//nullish coalescing operator (??) : null defined
// let val1;
// // val1 = 5 ?? 10;
// // val1 = null ?? 10;

// // val1 = undefined ?? 15;

// val1 = null ?? 10 ?? 15;

// console.log(val1);



// ternary operator
// condition ? true:false;
const iceTeaPrice = 70;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");