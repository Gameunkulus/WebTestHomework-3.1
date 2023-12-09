const sorting = require("../../app");

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ]
   
    const result = sorting.sortByName(input)

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]
   
    expect(result).toEqual(expected);
  });

  test("Throws exception if called without parent", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError)
  });

  test("Books names should be stay in ascending order", () => {
    const input = [
      "Властелин Колец",
      "Гарри Поттер",
      "Волшебник изумрудного города",
    ]
   
    const result = sorting.sortByName(input)

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]
   
    expect(result).toEqual(expected);
  });

  
});
