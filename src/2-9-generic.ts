const wrapInArray = <T>(value: T) => {
  return [value];
};

// const stringArr = wrapInArray("ABC");
const stringArr = wrapInArray<string>("abc");
console.log(stringArr)
console.log(stringArr.map(item => item.toUpperCase()))

// const numberArr = wrapInArray(123);
// const numberArr = wrapInArray<number>(123);
// console.log(numberArr)


interface IUser {
  name: string;
  role: string;
}

interface IBlog {
  title: string;
  description: string;
  date: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

type TUserResponse = ApiResponse<IUser>;
type TBlogResponse = ApiResponse<IBlog>;

const userRes: TUserResponse = {
  data: {
    name: "bdhsjhkj",
    role: "ljsd"
  },
  success: true,
  statusCode: 200
}