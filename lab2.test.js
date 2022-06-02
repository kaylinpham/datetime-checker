const { isValidDate, daysInMonth } = require("./lab2");

const daysInMonthTestCase = [
  { year: 2020, month: 1, expect: 31 },
  { year: 2020, month: 3, expect: 31 },
  { year: 2020, month: 5, expect: 31 },
  { year: 2020, month: 7, expect: 31 },
  { year: 2020, month: 8, expect: 31 },
  { year: 2020, month: 10, expect: 31 },
  { year: 2020, month: 12, expect: 31 },
  { year: 2020, month: 4, expect: 30 },
  { year: 2020, month: 6, expect: 30 },
  { year: 2020, month: 9, expect: 30 },
  { year: 2020, month: 11, expect: 30 },
  { year: 2020, month: 2, expect: 29 },
  { year: 2021, month: 2, expect: 28 },
  { year: 2021, month: 0, expect: 0 },
  { year: 2021, month: 13, expect: 0 },
  { year: 2021, month: -1, expect: 0 },
];

const checkDateTestCase = [
  { year: 2000, month: 1, day: 0, expect: false },
  { year: 2000, month: 1, day: 32, expect: false },
  { year: 2000, month: 2, day: 15, expect: false },
  { year: 2000, month: 2, day: 15, expect: false },
  { year: 2000, month: 2, day: 15, expect: false },
  { year: 2000, month: 2, day: 15, expect: false },
  { year: 2000, month: 1, day: 0, expect: false },
  { year: 2022, month: 1, day: 31, expect: true },
  { year: 2022, month: 3, day: 31, expect: true },
  { year: 2022, month: 5, day: 31, expect: true },
  { year: 2022, month: 7, day: 31, expect: true },
  { year: 2022, month: 8, day: 31, expect: true },
  { year: 2022, month: 10, day: 31, expect: true },
  { year: 2022, month: 12, day: 31, expect: true },
];

// daysInMonthTestCase.forEach((e) => {
//   test(`Month: ${e.month} Year: ${e.year}`, () => {
//     expect(daysInMonth(e.year, e.month)).toBe(e.expect);
//   });
// });

// checkDateTestCase.forEach((e) => {
//   test(`Month: ${e.month} Year: ${e.year} Day: ${e.day}`, () => {
//     expect(isValidDate(e.year, e.month, e.day)).toBe(e.expect);
//   });
// });

describe("DIM-[UTCID13]", () => {
  test("Should return: 28", () => {
    expect(daysInMonth(2500, 2)).toBe(28);
  });
});

describe("DIM-[UTCID14]", () => {
  test("Should return: 29", () => {
    expect(daysInMonth(2510, 2)).toBe(28);
  });
});

describe("DIM-[UTCID15]", () => {
  test("Should return: 28", () => {
    expect(daysInMonth(2999, 2)).toBe(28);
  });
});

describe("DIM-[UTCID16]", () => {
  test("Should return: 0", () => {
    expect(daysInMonth(2020, 0)).toBe(0);
  });
});

describe("DIM-[UTCID17]", () => {
  test("Should return: 0", () => {
    expect(daysInMonth(2021, 213)).toBe(0);
  });
});

describe("CD-[UTCID22]", () => {
  test("Should return: False", () => {
    expect(isValidDate(1234, 4, 31)).toBe(false);
  });
});

describe("CD-[UTCID23]", () => {
  test("Should return: True", () => {
    expect(isValidDate(1234, 4, 30)).toBe(true);
  });
});

describe("CD-[UTCID24]", () => {
  test("Should return: False", () => {
    expect(isValidDate(1234, 6, 31)).toBe(false);
  });
});

describe("CD-[UTCID25]", () => {
  test("Should return: True", () => {
    expect(isValidDate(1234, 6, 30)).toBe(true);
  });
});

describe("CD-[UTCID26]", () => {
  test("Should return: False", () => {
    expect(isValidDate(1234, 9, 31)).toBe(false);
  });
});

describe("CD-[UTCID27]", () => {
  test("Should return: True", () => {
    expect(isValidDate(1234, 9, 30)).toBe(true);
  });
});

describe("CD-[UTCID28]", () => {
  test("Should return: False", () => {
    expect(isValidDate(1234, 11, 31)).toBe(false);
  });
});

describe("CD-[UTCID29]", () => {
  test("Should return: True", () => {
    expect(isValidDate(1234, 11, 30)).toBe(true);
  });
});
