var fs = require("fs");
const path = require("path");
const request = require("request");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

module.exports = {
  pwd: () => {
    let output = process.cwd().toString();
    done(output);
  },
  date: () => {
    let output = Date().toString();
    done(output);
  },
  ls: () => {
    fs.readdir(".", (err, files) => {
      if (err) throw err;
      let output = "";
      files.forEach((file) => {
        output += file.toString() + "\n";
      });
      done(output);
    });
  },
  echo: (input) => {
    done(input);
  },
  cat: (input) => {
    fs.readFile(path.join(__dirname, "../") + input, "utf8", (err, data) => {
      if (err) throw err;
      done(data);
    });
  },
  head: (input) => {
    fs.readFile(path.join(__dirname, "../") + input, "utf8", (err, data) => {
      if (err) throw err;
      const linesAmount = 5;
      let output = data
        .split(/\r?\n/)
        .filter((line) => {
          return line !== "";
        })
        .slice(0, linesAmount)
        .join("\n");
      done(output);
    });
  },
  tail: (input) => {
    fs.readFile(path.join(__dirname, "../") + input, "utf8", (err, data) => {
      if (err) throw err;
      const linesAmount = 5;
      let output = data
        .split(/\r?\n/)
        .filter((line) => line !== "")
        .slice(0, data.length - linesAmount)
        .join("\n");
      done(output);
    });
  },
  curl: (input) => {
    request(input, (err, data, body) => {
      if (err) throw err;
      done(body);
    });
  },
  sort: (input) => {
    fs.readFile(path.join(__dirname, "../") + input, "utf8", (err, data) => {
      if (err) throw err;
      let arr = data.split(/\r?\n/);
      let output = arr
        .sort((a, b) => {
          return a.localeCompare(b);
        })
        .join("\n");
      done(output);
    });
  },
  wc: (input) => {
    fs.readFile(path.join(__dirname, "../") + input, "utf8", (err, data) => {
      if (err) throw err;
      let arr = data.split(/\r?\n/);
      let output = arr.length.toString();
      done(output);
    });
  },
  uniq: (input) => {
    fs.readFile(path.join(__dirname, "../") + input, "utf8", (err, data) => {
      if (err) throw err;
      let output = data
        .split(/\r?\n/)
        .filter((line, index, arr) => {
          if (line !== arr[index - 1]) {
            return line;
          }
        })
        .join("\n");
      done(output);
    });
  },
  sortWrite: (input) => {
    fs.readFile(path.join(__dirname, "../") + input, "utf8", (err, data) => {
      if (err) throw err;
      let arr = data.split(/\r?\n/);
      let newFileData = arr
        .sort((a, b) => {
          return a.localeCompare(b);
        })
        .join("\n");
      fs.writeFile(input, newFileData, (err) => {
        if (err) throw err;
        done("File sorted");
      });
    });
  },
  uniqWrite: (input) => {
    fs.readFile(path.join(__dirname, "../") + input, "utf8", (err, data) => {
      if (err) throw err;
      let newFileData = data
        .split(/\r?\n/)
        .filter((line, index, arr) => {
          if (line !== arr[index - 1]) {
            return line;
          }
        })
        .join("\n");
      fs.writeFile(input, newFileData, (err) => {
        if (err) throw err;
        done("Repeated lines deleted");
      });
    });
  },
};
