const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(10);
const HashPass = bcrypt.hashSync("Yousef", salt);

console.log(HashPass);
