const os = require("os");
const { log } = require("console");
const express = require("express");
const app = express();
const ip = os.networkInterfaces()["Wi-Fi"][0].address;
const port = 4550;

const { MainRoute } = require("./houtes/mainHoute");

app.use(express.static("./app"));
app.use(express.json());

app.get("/home", MainRoute);

app.listen(port, ip, () => {
    log(`Active on address: ${ip}:${port}`);
});
