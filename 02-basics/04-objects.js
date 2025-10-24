// const tinderUser = new Object();

const tinderUser = {};
tinderUser.id = "123";
tinderUser.name="praksh"
// console.log(tinderUser);

const regularUser = {
    email: "prakash123",
    fullname: {
        firstName: "hitesh",
        lastName:"seervi"
    }
}
// console.log(regularUser.fullname.firstName);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = { obj1, obj2 };
// console.log(obj3);
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

const users = [
    {
        id: 1,
        email: "prakash-02"
    },
    {
        id: 1,
        email: "prakash-02"
    },
    {
        id: 1,
        email: "prakash-02"
    }
]

users[1].id;
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course = {
    courseName: "js in hinid",
    price: "1222",
    courseInstructor:"prakash"
}

// baar baar pura pura name kon likhega uske liye, access karne ke liye
//course.courseInstructor
const { courseInstructor } = course;
console.log(courseInstructor);


const { courseInstructor : instructor } = course;
console.log(instructor);






