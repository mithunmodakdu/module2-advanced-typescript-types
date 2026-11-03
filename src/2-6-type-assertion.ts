// ::: type assertion :::
type TStatus = "pending" | "approved" | "rejected";
const someStatus: string = "pending";

const showStatus = (status: TStatus) => {
  console.log("Your current application status is " + status);
};

// showStatus(someStatus as TStatus);

// non-null assertion
interface IConfig {
  port?: number;
}

const config: IConfig = {
  port: 5000
}

const currentPort: number = config.port!;
// const currentPort: number = config.port as number;


// constant assertion
const configuration = {
  port: 8080,
  prefix: "/api/v1"
} as const;

// configuration.port = 5500;