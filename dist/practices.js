// ::: Constraints in TypeScript :::
function printLength(value) {
    return value.length;
}
// console.log(printLength("Mithun"))
// console.log(printLength(123))
// console.log(printLength([1, 2, 3]))
function getName(user) {
    return user.name;
}
// getProperty
function getProperty(obj, Key) {
    return obj[Key];
}
const user = {
    name: "Mithun",
    age: 36
};
// console.log(getProperty(user, "name"))
// console.log(getProperty(user, "email"))
const product = {
    name: "Laptop",
    price: 1000,
    available: true,
};
const productName = getProperty(product, "name");
const productPrice = getProperty(product, "price");
// console.log(productName, productPrice)
// ::: Enum :::
// string enum
var EOrderStatus;
(function (EOrderStatus) {
    EOrderStatus["PENDING"] = "PENDING";
    EOrderStatus["PROCESSING"] = "PROCESSING";
    EOrderStatus["SHIPPED"] = "SHIPPED";
    EOrderStatus["DELIVERED"] = "DELIVERED";
})(EOrderStatus || (EOrderStatus = {}));
const status = EOrderStatus.DELIVERED;
// console.log(status)
// numeric enum
var EDirection;
(function (EDirection) {
    EDirection[EDirection["UP"] = 0] = "UP";
    EDirection[EDirection["DOWN"] = 1] = "DOWN";
    EDirection[EDirection["LEFT"] = 2] = "LEFT";
    EDirection[EDirection["RIGHT"] = 3] = "RIGHT";
})(EDirection || (EDirection = {}));
// console.log(EDirection.UP)
// console.log(EDirection.RIGHT)
// Heterogeneous enum
var EUser;
(function (EUser) {
    EUser[EUser["id"] = 1] = "id";
    EUser["name"] = "Mithun";
})(EUser || (EUser = {}));
// console.log(EUser.id)
// console.log(EUser.name)
// ::: as const Instead of Enum :::
const user1 = {
    name: "JOHN",
    role: "ADMIN"
};
// user1.role = "SuperAdmin";
const UserRole = {
    ADMIN: "ADMIN",
    USER: "USER",
    MODERATOR: "MODERATOR",
};
export {};
