//immediately invoked function expressions (iife)
(function chai() {
    // named iifi
    console.log(`BD CONNECTED`);
})();

//why we use iife ->global scope ke polution ko hatane ke liye, polution means global scope ke variables ko hatane ke liye
((name) => {
    //without named iifi
    console.log(`db connected two ${name}`)
})('hitesh');
