const commands = require("./commands/index.js");
const cmd = "pwd";
const date = "date";
const ls = "ls";
const echo = "echo";
const cat = "cat";
const head = "head";
const tail = "tail";
const curl = "curl";
const sort = "sort";
const wc = "wc";
const uniq = "uniq";
const sortWrite = "sortWrite";
const uniqWrite = "uniqWrite";

process.stdout.write("prompt > ");
process.stdin.on("data", function (data) {
  var userCmd = data.toString().trim().split(" ");
  if (userCmd[0] === "") {
    process.stdout.write("\nprompt > ");
  }
  if (userCmd[0] === cmd) {
    commands[cmd]();
  }
  if (userCmd[0] === date) {
    commands[date]();
  }
  if (userCmd[0] === ls) {
    commands[ls]();
  }
  if (userCmd[0] === echo) {
    userCmd.shift();
    commands[echo](userCmd.join(" "));
  }
  if (userCmd[0] === cat) {
    commands[cat](userCmd[1]);
  }
  if (userCmd[0] === head) {
    commands[head](userCmd[1]);
  }
  if (userCmd[0] === tail) {
    commands[tail](userCmd[1]);
  }
  if (userCmd[0] === curl) {
    commands[curl](userCmd[1]);
  }
  if (userCmd[0] === sort) {
    commands[sort](userCmd[1]);
  }
  if (userCmd[0] === wc) {
    commands[wc](userCmd[1]);
  }
  if (userCmd[0] === uniq) {
    commands[uniq](userCmd[1]);
  }
  if (userCmd[0] === sortWrite) {
    commands[sortWrite](userCmd[1]);
  }
  if (userCmd[0] === uniqWrite) {
    commands[uniqWrite](userCmd[1]);
  }
});
