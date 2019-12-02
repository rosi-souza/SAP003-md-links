#!/usr/bin/env node
const mdLinks = require("./lib/index.js")

mdLinks(process.argv[2])
	.then((result) => (console.log(result))
  .catch((error) => (console.log(error))))
