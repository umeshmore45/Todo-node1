const getAllTasks = (req, res, next) => {
  console.log("response ");
  res.send("from controller");
};

const createTask = (req, res, next) => {
  console.log("response tasks ");
  // res.send("create Tasks");
};

module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
