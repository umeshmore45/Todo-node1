const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { getAllTasks, createTask } = require("./controllers/taskController");
const taskRouter = require("./routes/todoRoutes");
const app = express();

app.use("/todoList", taskRouter);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/`);
});
