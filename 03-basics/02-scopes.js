


if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a)
// console.log(b)
// console.log(c)

// function one() {
//     const userName = "prakash";
//     function two() {
//         const website = "youtube";
//         console.log(userName);
//     }
//     // console.log(website);
//     two();
// }
// one();

if (true) {
    const username = "prakash";
    if (username === 'prakash') {
        const website = "youtube";
        console.log(username +" "+ website);
    }
    // console.log(website);
}
// console.log(username);

// intersting example

function addOne(num) {  //this function is an exmple of function declaration in this we can call function before function decalaration  
    return num + 1;
}
addOne(5);

addTwo(5);
const addTwo = function (num) { // this function is an example of function with function expression, in this we can not do function call before function declaration
    return num+2
}
addTwo(5);