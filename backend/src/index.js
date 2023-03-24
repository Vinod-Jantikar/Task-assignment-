const express = require("express");
const fs = require("fs");
const cors = require('cors')



const app = express();
app.use(cors())

app.get("/users", async (req, res) => {
  try {
    fs.readFile("./src/config/db.json", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const result = JSON.parse(data);
        return res.status(200).send(result.Users);
      }
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    fs.readFile("./src/config/db.json", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const result = JSON.parse(data);
        return res.status(200).send(result.Tasks);
      }
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = app;
