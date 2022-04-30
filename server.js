const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("./dist"));
app.get('/*', (req, res) => {
    res.sendFile("index.html", { root: "dist/angular-heroku/" });
})
app.listen(process.env.PORT);