#!/usr/bin/env node
const mdLinks = require("./lib/index.js");

mdLinks(process.argv[2])
  .then((result) => result.forEach( x => console.log(x.href.substring(0, 50), x.text.substring(0, 50))))
  .catch((error) => console.log(error));
