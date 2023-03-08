const {deleteRecord} = require("../js/helpers");
describe("delete item", () => {
  test("should returen true ", () => {
    const actual = deleteRecord([1, 2, 3, 4, 5], 2);
    const expected = [1, 2, 4, 5];
    expect(actual).toStrictEqual(expected);
  });
  test("should returen true ", () => {
    const actual = deleteRecord([1, 2, 3, 4, 5], 3);
    const expected = [1, 2, 3, 5];
    expect(actual).toStrictEqual(expected);
  });
});