const {deleteItem} = require("../js/helpers");
describe("delete item", () => {
  test("should returen true ", () => {
    const actual = deleteItem([1, 2, 3, 4, 5], 2);
    const expected = [3];
    expect(actual).toStrictEqual(expected);
  });
  test("should returen true ", () => {
    const actual = deleteItem([1, 2, 3, 4, 5], 3);
    const expected = [4];
    expect(actual).toStrictEqual(expected);
  });
});
