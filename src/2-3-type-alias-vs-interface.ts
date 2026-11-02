//? ::: type alias vs interface :::
// * Interface is generally connected to objects. It provides benefits of extend
// * Type Alias is more connected to literals, unions, tuples, primitives

type TId = number;
//! interface IId = number;

type TRole = "admin" | "user";
//! interface IRole "admin" | "user";

interface IUser {
  id: TId;
  name: string;
  role: TRole;
}

const user: IUser = {
  id: 123,
  name: "Mithun",
  role: "admin"
}


// ::: in case of interfaces we can use extends :::
interface IAnimal {
  species: string;
}

interface ICat extends IAnimal{
  breed: string;
}

const cat: ICat = {
  breed: "Persian",
  species: "Felix Catus"
}


// ::: in case of type alias we can use intersection(&) :::
type TVehicle = {
  brand: string;
}

type TCar = TVehicle & {
  model: string
}

const car : TCar = {
  brand: "Toyota",
  model: "110100"
}


// ::: if we redeclare interfaces with same name, they will be merged. We can not re :::
interface IEmployee {
  id: number;
}

interface IEmployee {
  name: string;
}

const employee: IEmployee = {
  id: 123,
  name: "Rakib"
}


// ::: we can not redeclare type alias with same name :::

// type TEmployee = {
//   id: number;
// }

type TEmployee = {
  name: string;
}




