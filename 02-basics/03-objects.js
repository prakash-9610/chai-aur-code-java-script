// 1 singleton
//2 object literals
// both are the  type of decalration of objects

const mySum = Symbol("key1");
const jsUser = {
    name: "prakash",
    age: "14",
    [mySum]:"mykey1",
    location:"jodhpur",
    email: "prakash123",
    isLogggedIn: false,
    lastLoginDays:["monday","tuesday"]
}
// console.log(jsUser.email);
// console.log(jsUser["age"]);
// console.log(jsUser[mySum]);

jsUser.email = "prAKAS2";

jsUser.email = "ramram13";
// console.log(jsUser);

jsUser.greeting = function () {
    console.log(`hello ji kese ho sare ${this.name}`);
}
console.log(jsUser.greeting);


