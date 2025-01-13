const router = require("./Routes/userRoutes");
const app = require("../../Config/server");
require("dotenv").config();

app.use("/user", router);

const USER_PORT = process.env.USER_PORT;

const Port = USER_PORT;

app.listen(Port, () => {
  console.log(`server connected successfuly on ${Port}`);
});
