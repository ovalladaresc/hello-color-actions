const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World, Saludos de Oscar Valladares MIT DevOps");
  });
});
