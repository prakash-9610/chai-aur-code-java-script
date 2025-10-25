// // for of 
// const arr = [1, 2, 3, 4, 5]
// for (const num of arr){
//     console.log(num);
// }

const greetings = "hello world";
for (const i of greetings) {
    // console.log(i);
}

// maps
const map = new Map()
map.set('In', "India");
map.set('USA', "united state of america");
map.set('Fr', "France");
console.log(map);
map.set("In", "indonesia");
console.log(map)
// mapsa always knows for its unique values
for (const [key,value] of map)  {
    console.log(key, ':->',value);
}
const myObject = {
    'game1': "cricket",
    'game2':"badminton"
}
for (const [key,value] of myObject)  {
    console.log(key, ':->',value);
}