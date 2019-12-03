#!/usr/bin/env node
const mdLinks = require("./lib/index.js");

mdLinks(process.argv[2])
  .then((result) => (result.forEach( x => console.log(x.href, x.text)))
    .catch((error) => (console.log(error))));
