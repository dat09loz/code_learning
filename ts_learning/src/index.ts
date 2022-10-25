//commands
/*
- tsc: compile following the config file
- tsc --watch: compile and looks for changes of all files

*/




//Basic types (you can set types first before initialising)
let id : Number
let company : String
let isPublished : Boolean
let x : any
let arr: number[]
let arrAny: any[]


id = 5
company = "this company"
isPublished = true
x = 5
x = true
arr = [1,2,3,4,5]
arrAny = [1,2,3,'string', true, false]

//tuple
let person: [number, string, boolean]
person = [1, 'string', true]

//tuple array
let people: [number, number][]
people = [[2,3], [4,5]]

//union
let pid: string | number
pid = 22
pid = "string uwu"

//enum
enum Direction1 {
  up,
  down,
  left,
  right
}
console.log(Direction1.right)

//objects
type User = {//declare object properties and types
  id: number,
  name: string
}

const user: User = {// create a new user with type User
  id: 1,
  name: 'who is john'
}

//type assertion
let cid: any = 1
//cid is of type any, but we want the customerId to be of type number
//let customerId = <number>cid
let customerId = cid as number

//function
function addNum(x:number, y:number): number {
  return x+y
}

const add = (x:number, y:number):number => {
  return x+y
}

const log = (mesg: string | number): void => {
  console.log(mesg)
}

log(56)

//interfaces (only for objects)
interface UserInterface {
  readonly id: Number, //read-only property (cannot be overwritten)
  name: string, 
  age?: number //optional properties
}

const user1: UserInterface = {
    id: 3,
    name: "name",
}

type Point = number | String

const p1: Point = 1

//function interface
interface MathFunc {
  (x: number, y: number): number
}

const addAndAdd: MathFunc = (x: number, y: number): number => x + y
const subAndSub: MathFunc = (x: number, y: number): number => x - y

//classes: can have private, protected, public access modifier
interface PersonInterface {
  readonly id: Number, //read-only property (cannot be overwritten)
  name: string, 
  age?: number //optional properties
  register(): string
}

class Person implements PersonInterface {
  readonly id: number
  name: string
  age: number
  
  constructor(id: number, name: string, age: number) {
      this.id = id
      this.name = name
      this.age = age
  }

  register() {//method
    return `${this.name} is now registered`
  }
}

//sub-classes
class Employee extends Person {
  position: string

  constructor(id:number, name: string, age: number, position: string) {
    super(id, name, age) //from the parent class 
    this.position = position
  }
}

const person1 = new Person(2, 'da name', 39)
console.log(person1.register())

const emp = new Employee(3, 'employee', 54, 'this pos')

//generics
const getArray = <T>(item:T[]): T[] => {//generic T: placeholder for type
  return new Array().concat(item)
}

let numArr = getArray<number>([1,2,3,4]) //assign type
let strArr = getArray<string>(['a', 'b', 'c'])


