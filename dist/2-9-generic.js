const wrapInArray = (value) => {
    return [value];
};
// const stringArr = wrapInArray("ABC");
const stringArr = wrapInArray("abc");
console.log(stringArr);
console.log(stringArr.map(item => item.toUpperCase()));
const userRes = {
    data: {
        name: "bdhsjhkj",
        role: "ljsd"
    },
    success: true,
    statusCode: 200
};
export {};
