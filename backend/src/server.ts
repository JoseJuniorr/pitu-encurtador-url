import app from "./app";
import database from "./database";
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

database.sync();
console.log("Database running");

app.listen(app.get("port"), () => {
  console.log("Server running on port:", app.get("port"));
});
