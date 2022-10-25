"use strict";
let id;
let company;
let isPublished;
let x;
let arr;
let arrAny;
id = 5;
company = "this company";
isPublished = true;
x = 5;
x = true;
arr = [1, 2, 3, 4, 5];
arrAny = [1, 2, 3, 'string', true, false];
let person;
person = [1, 'string', true];
let people;
people = [[2, 3], [4, 5]];
let pid;
pid = 22;
pid = "string uwu";
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.right);
const user = {
    id: 1,
    name: 'who is john'
};
let cid = 1;
let customerId = cid;
function addNum(x, y) {
    return x + y;
}
const add = (x, y) => {
    return x + y;
};
const log = (mesg) => {
    console.log(mesg);
};
log(56);
const user1 = {
    id: 3,
    name: "name",
};
const p1 = 1;
const addAndAdd = (x, y) => x + y;
const subAndSub = (x, y) => x - y;
class Person {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Employee extends Person {
    position;
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
const person1 = new Person(2, 'da name', 39);
console.log(person1.register());
const emp = new Employee(3, 'employee', 54, 'this pos');
const getArray = (item) => {
    return new Array().concat(item);
};
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(['a', 'b', 'c']);
