const mdLinks = require("../src/index.js");

const fileTest = [
  { text: "Markdown", href: "https://pt.wikipedia.org/wiki/Markdown" },
  { text: "Node.js", href: "https://nodejs.org/" },
]
describe("mdLinks", () => {
  test("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
});
test("Separate description and link into object with text and href key", (done) => {
  mdLinks('./__tests__/test.md')
  .then(data => {
    expect(data).toEqual(fileTest);
    done();
  });
});
test("Testing if file format is invalid", (done) => {
  mdLinks('./__tests__/index.html')
  .catch(data => {
    expect(data).toEqual("Formato invalido");
    done();
  });
});
