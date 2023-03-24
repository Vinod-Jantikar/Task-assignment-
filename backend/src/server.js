const app = require("./index");

app.listen("7878", async () => {
  try {
     console.log("Listening on port 7878");
  } catch (err) {
    console.log(err);
  }
});
