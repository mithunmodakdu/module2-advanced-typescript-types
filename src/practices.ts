// ::: Constraints in TypeScript :::
function printLength<T extends {length: number}>(value: T): number{
  return value.length;
}
// console.log(printLength("Mithun"))
// console.log(printLength(123))
// console.log(printLength([1, 2, 3]))

function getName<T extends { name: string}>(user: T):string{
  return user.name;
}

// console.log(getName({name: "Mithun", age: 36}))
// console.log(getName({age: 36}))



// ::: Keyof Constraint with Generics :::

// TUserKeys
interface IUser {
  name: string;
  age: number;
  email: string;
}

type TUserKeys = keyof IUser;


// getProperty
function getProperty<T, K extends keyof T>(obj: T, Key: K ): T[K]{
  return obj[Key]
}

const user = {
  name: "Mithun",
  age: 36
}

// console.log(getProperty(user, "name"))
// console.log(getProperty(user, "email"))

const product = {
  name: "Laptop",
  price: 1000,
  available: true,
};

const productName = getProperty(product, "name");
const productPrice= getProperty(product, "price");
// console.log(productName, productPrice)


// ::: Enum :::

// string enum
enum EOrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
}

const status = EOrderStatus.DELIVERED;
// console.log(status)

// numeric enum
enum EDirection {
  UP,
  DOWN,
  LEFT,
  RIGHT
}
// console.log(EDirection.UP)
// console.log(EDirection.RIGHT)

// Heterogeneous enum
enum EUser {
  id = 1,
  name = "Mithun"
}
// console.log(EUser.id)
// console.log(EUser.name)



// ::: as const Instead of Enum :::
const user1 = {
  name: "JOHN",
  role: "ADMIN"
} as const;

// user1.role = "SuperAdmin";

const UserRole = {
  ADMIN  : "ADMIN",
  USER  : "USER",
  MODERATOR  : "MODERATOR",
} as const;

type TUserRole = typeof UserRole[keyof typeof UserRole];


// ::: Conditional Types :::
type TIsString<T> = T extends string? true : false;

type result1 = TIsString<string>;
type result2 = TIsString<number>;

type TCheckNumber<T> = T extends number? "Number" : "Not Number";
type A = TCheckNumber<number>;
type B = TCheckNumber<string>;


// ::: Mapped Types :::
interface IUser {
  name: string;
  age: number;
  email: string;
}

type TUser = {
  [K in keyof IUser]?: IUser[K]
}

// ::: Mapped Types :::
type TOptionalUser = Partial<IUser>;
type TRequiredUser = Required<IUser>;

type TUserName = Pick<IUser, "name">;
type TOmitUserName = Omit<IUser, "name">;

type TRecordRoles = Record<"admin" | "user", string>;
type TReadonlyUser = Readonly<IUser>;