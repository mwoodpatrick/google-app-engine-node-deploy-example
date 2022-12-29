const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
var count = 0;

app.get("/", async (req, res) => {
  count++;
  res.json({ status: `OK: ${count} updated 2` });
  console.log(`response ${count} updated`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port} updated`);
});
