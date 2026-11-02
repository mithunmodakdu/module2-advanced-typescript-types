// export {}

// const greetings = () =>{
//   console.log("Hello Friends")
// }

// greetings();

// ::: Literal Type :::
type TStatus = "pending";
const status: TStatus = "pending";
console.log(status)

// ::: Union Type :::
type TIdentity = string | number;
const id: TIdentity = 1234566;
console.log(id)

// ::: Literal Union :::
type TRole = "user" | "admin" | "super-admin";
// const userRole: TRole = "manager";
const userRole: TRole = "admin";
console.log(userRole)

// ::: Object Union :::
type TAdmin = {id: number; role: "admin"; privileges: string[]};
type TMember = {id: number; role: "member"; plans: string[]};
type TUser = TAdmin | TMember;
// const user: TUser = {id: 123, role: "admin", privileges: ["abc", "def"]};
const user: TUser = {id: 123, role: "member", plans: ["ghi", "lmn"]};
console.log(user)

