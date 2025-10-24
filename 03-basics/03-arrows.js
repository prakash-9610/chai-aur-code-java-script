const user = {
    username: "prakash",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, WELCOME TO WEBSITE`)
    }
}
// this refers to current context or content
// this works only in the function 

user.welcomeMessage();

function chai() {
    let userName = "hitesh";
    console.log(this.userName);
}
chai();

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1,num2) => num1 + num2;

// const addTwo = (num1,num2) =>( num1 + num2);

const addTwo = (num1,num2) =>({username:"prakash"});
console.log(addTwo(2, 3));


const myArray = [2, 3, 4, 5, 6, 6];
// foreach ke baare me vapas padh bhool gaya hu 
