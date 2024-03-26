const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

const userRoutes = require("./routes");
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
