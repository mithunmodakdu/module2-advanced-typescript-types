// ::: some caveats of Type Guard :::
// const paintAll = (x: string | string[] | null) =>{
//   if (x && typeof x === "object"){
//     for(let str of x){
//       console.log(str)
//     }
//   }else if(typeof x === "string"){
//     console.log(x);
//   }else{
//     console.log("")
//   }
// }
// paintAll("bbbbbbbbbb")
// paintAll(["bbbbbbbbbb", "cccc", "ddd"])
// paintAll(null)
// ::: Equality :::
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
// compare(10, 10)
const paintAll = (x) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                console.log(str);
            }
            return;
        }
        console.log(x);
        return;
    }
    console.log("");
};
const move = (animal) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
// ::: instanceof :::
const date = new Date();
const err = new Error("Something went wrong");
// console.log(date instanceof Date);
// console.log(err instanceof Error);
// console.log(date instanceof Error);
// console.log(err instanceof Date);
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
const getArea = (shape) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
};
export {};
