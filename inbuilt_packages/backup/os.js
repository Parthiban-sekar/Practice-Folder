
const os = require("os")

console.log("Free Memory", os.freemem()/1024/1024/1024);
console.log("Total Memory", os.totalmem()/1024/1024/1024);
console.log ("version", os.version());
console.log ("platform", os.platform());
console.log ("Cpus", os.cpus());
console.log(
    "Arch", os.arch()
)
