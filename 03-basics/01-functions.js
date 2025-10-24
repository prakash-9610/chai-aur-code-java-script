// const { Result } = require("postcss");

function sayMyName() {
    console.log("p");
    console.log("R");
    console.log("C");
}
//sayMyName();

// function addTwoNmuber(number1, number2) {
//     console.log(number1 + number2);
// }



function addTwoNmuber(number1, number2) {
    return  number1 + number2;
    
}
const result = addTwoNmuber('a', 3);
// console.log(result);

function loginUserMessage(username="sam") {
    if (username === undefined) {
        console.log("please enter a valid username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage());


function calculateCartPrice(...num1) {
    return num1;
}
// console.log(calculateCartPrice(200, 300, 400));

// handle object in function
const user = {
    userNmae: "prakash",
    price:1243
}
function handleObjects(anyobject) {
    console.log(`username is ${anyobject.userNmae} and price is ${anyobject.price}`)
}
// handleObjects(user);
// handleObjects({
//     userNmae: "sdam",
//     price:123345
// })

const meNewArray = [200, 400, 100, 400];
function retunSecondValue(getArray) {
    return getArray[1];
}
// console.log(retunSecondValue(meNewArray));

console.log(retunSecondValue([100, 200, 300, 400]));


