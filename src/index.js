// const mdLink = () => {
//   console.log('./teste')
// }
// mdLink();



// const mdLinks = require("../teste/README.md");

// mdLinks("./README.md")
// .then(links => {
//   links
//   // => [{ href, text }]
// })
// .catch(console.error);

// mdLinks();

// module.exports = mdLinks;
// converter array em objeto https://stackoverflow.com/questions/4215737/convert-array-to-object
//LINK http[s]?:\/\/([^\)\ ]*)
// descrição teste \[([^ \ [0-9])
//DESCRIÇÃO 
//link / descrição (\[[^\ ].*)(http[s]?:\/\/[^\)].*)
//(\[[^\ ].*)(http[s]?:\/\/.*)
//(\[[^\ ].*)(http[s]?:\/\/.*)
//const regSimbolos = /(\(|\[|\]|\))/g

// const fs = require('fs');

// fs.readFile('./teste/README.md', 'utf8', function (err, data) {
//   const dados = data;
//   const regText = /(\[[^\ ].*)(http[s]?:\/\/[^\)]*)/g
  
//   const matchDados = dados.match(regText)
//   const dadosString = matchDados.toString()
//   const dadosSemSimbolos = dadosString.replace(/(\(|\[|\]|\))/g, " ")
//   const dadosEmSplit = dadosSemSimbolos.split('')
//   // const a = JSON.stringify(dadosSemSimbolos)
//   console.log(dadosString)

//   // console.log(dadosEmSplit[0])
//   if (err) throw err;
// });

// function mdLinks(path) {
//   return new Promise ((resolve, reject) => {
    
//     const fs = require('fs');
//     fs.readFile(path, 'utf8', function (err, data) {
//       const getData = data;
//       const regText = /(\[[^\ ].*)(http[s]?:\/\/[^\)]*)/g
//       const matchData = getData.match(regText)
//       const mapData = matchData.map(x => { 
//         const clearingData = x.split("](")
//         const text = clearingData[0].replace(/\[/, '')
//         const href = clearingData[1]
//       return { text, href }
//       })
//       if (err) {
//         return reject(err)
//       } 
//       return resolve(mapData)
//     })
//   })
// }

// module.exports = mdLinks

// function getExt(filename) {
//   var ext = filename.split('.').pop();
//   if(ext == filename) return "";
//   return ext;
// }


const mdLinks = (path) => {
  return new Promise ((resolve, reject) => {
    const ext = path.split('.').pop();
    // console.log(ext);
    if(ext != 'md') {
      return reject("Formato invalido")
    }
    const fs = require('fs');
    fs.readFile(path, 'utf8', function (err, data) {
      const getData = data;
      const regText = /(\[[^\ ].*)(http[s]?:\/\/[^\)]*)/g
      const matchData = getData.match(regText)
      const mapData = matchData.map(x => { 
        const clearingData = x.split("](")
        const text = clearingData[0].replace(/\[/, '')
        const href = clearingData[1]
      return { text, href }
      })
      return resolve(mapData)
    })
  })
}

module.exports = mdLinks
