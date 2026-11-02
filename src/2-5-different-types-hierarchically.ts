
// ::: top types: any, unknown :::
let x : any = "Hello world";
x = 123;
console.log(x.length)

// when we apply method on variable of unknown type, it give error
let something: unknown = "Hello world";
// console.log(something.length)


// ::: core types: string, number :::
let num: number = 12365;
let something2: unknown;
something2 = num;

// let something2: void;
// something2 = num;

// let something2: null;
// something2 = num;

type TStatus = "pending" | "success";
let someStatus: string;
let status: TStatus = "pending";
someStatus = status;


// ::: nullish type: null :::
interface IUser {
  name: string;
}

type TLoggedInUser = IUser | null;

const currentUser: TLoggedInUser = null;


// ::: unit type: void :::
const greet = (): void => {
  console.log("Hello world")
}
greet();

something2 = greet;

// const greetings: string = greet;


// ::: sub type of unit type: undefined :::
const anotherGreet = (): undefined => {
  console.log("Hello world")
  return undefined;
}

// const greetings = anotherGreet();
const greetings: void = anotherGreet();
console.log(greetings)


// ::: Bottom type: never :::
// let neverHappening: never;
// let neverHappening: never = "sssmmmvv"

const getError = (msg: string): never => {
  throw new Error(msg);
}

let y : null = getError("eeeeeeeeeeeeee");