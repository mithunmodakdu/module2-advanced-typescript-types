// ::: top types: any, unknown :::
let x = "Hello world";
x = 123;
// console.log(x.length)
// when we apply method on variable of unknown type, it give error
let something = "Hello world";
// console.log(something.length)
// ::: core types: string, number :::
let num = 12365;
let something2;
something2 = num;
let someStatus;
let status = "pending";
someStatus = status;
const currentUser = null;
// ::: unit type: void :::
const greet = () => {
    console.log("Hello world");
};
// greet();
something2 = greet;
// const greetings: string = greet;
// ::: sub type of unit type: undefined :::
const anotherGreet = () => {
    console.log("Hello world");
    return undefined;
};
// const greetings = anotherGreet();
// const greetings: void = anotherGreet();
// console.log(greetings)
// ::: Bottom type: never :::
// let neverHappening: never;
// let neverHappening: never = "sssmmmvv"
const getError = (msg) => {
    throw new Error(msg);
};
export {};
// let y : null = getError("eeeeeeeeeeeeee");
