const someStatus = "pending";
const showStatus = (status) => {
    console.log("Your current application status is " + status);
};
const config = {
    port: 5000
};
const currentPort = config.port;
// const currentPort: number = config.port as number;
// constant assertion
const configuration = {
    port: 8080,
    prefix: "/api/v1"
};
export {};
// configuration.port = 5500;
