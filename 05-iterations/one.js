// for
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }
// console.log()

for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop value:${i}`);
    for (let j = 0; j <= 10; j++){
        //console.log(`innerloop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + '=' + i * j);
    }
}

// let myArray = ["flash", "batman", "superman"];
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break nd continue
for(let i = 0; i < 20; i++) {
    if (i == 5) {
        console.log("detced 5");
        break;
    }
    else {
        continue;
    }
}  
