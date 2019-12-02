const mdLinks = (path) => {
  return new Promise ((resolve, reject) => {
    const fs = require("fs");
    fs.readFile(path, "utf8", function (err, data) {
      const getData = data;
      const regText = /(\[[^\ ].*)(http[s]?:\/\/[^\)]*)/g;
      const matchData = getData.match(regText);
      const mapData = matchData.map(x => { 
        const clearingData = x.split("](");
        const text = clearingData[0].replace(/\[/, "");
        const href = clearingData[1];
        return { text, href };
      });
      return resolve(mapData);
    });
    const ext = path.split(".").pop();
    if (ext != "md") {
      return reject("Formato invalido");
    }
  });
};

module.exports = mdLinks;
