const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
var count = 0;

app.get("/", async (req, res) => {
  count++;
  res.json({ status: `OK: ${count} updated` });
  console.log(`response ${count}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
