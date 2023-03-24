const express = require("express");
const markdown = require("./routes/markdown");

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/markdown",markdown);
app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
  console.log(`Listning on the Port ${PORT}`);
});
