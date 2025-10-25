const myNums = [1, 2, 3];
// const initialValue = 0;
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval;
// }, 3);


const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
//console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "js cource",
        price:277
    }
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);