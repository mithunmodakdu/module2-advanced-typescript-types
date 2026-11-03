// ::: typeof :::
let x = ["123"];
// console.log(typeof x)
// console.log(typeof x === "object")


// ::: Type Guard :::
const print = (value: string | number) => {
  if(typeof value === "string"){
    return value.toUpperCase();
  }else{
    return value;
  }
}


// ::: Truthiness :::
type TUser = {
  name: string;
  address?: {
    street: string;
  }
} | null;

const loggedInUser: TUser = {
  name: "Mir",
  address: {
    street: "ABC"
  }
};

const showAddress = (user: TUser) => {
  if(user && user.address){
    console.log(user.address.street);
    return;
  }

  throw new Error("User not found.")
}