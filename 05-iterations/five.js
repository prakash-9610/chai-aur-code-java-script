const coding = ["javascript", "c++", "ruby", "swift"]
// coding.forEach(function (val) {
//     console.log(val);
// })
// coding.forEach(greet)

coding.forEach((item,index,arr) => {
    //console.log(item, index, arr);
})

const myCoding = [{
    languageNmae: "javascript",
   languagefinename:"js" 
},
    {
        languageNmae: "rubby",
       languagefinename: "rb"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageNmae,item.languagefinename)
})