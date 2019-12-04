# Markdown Links

## 1. Intro

Markdown é uma biblioteca que utiliza Node.js para ler e analisar arquivos no formato Markdown retornando a descrição e o link do arquivo.

## 1. Instalação

```sh
$ npm install -g rosi-souza/SAP003-md-links

```

## Uso

### Terminal

```sh
$ md-links ./caminho/arquivo.md
```
### Require

```js
const mdLinks = require("md-links");
```
### Padrão aceito

```sh
[Markdown](https://pt.wikipedia.org/wiki/Markdown)
```
```js
//return https://pt.wikipedia.org/wiki/Markdown Markdown
```
### Valor de retorno
* `href`: URL encontrada.
* `text`: Texto dentro do markdown.
