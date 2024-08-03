const express = require("express");
const app = express();
const cors = require("cors");
require("./conn/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json());
app.use(cors());
const path = require("path");


app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});


app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(30002, () => {
    console.log("SERVER STARTED");
});
