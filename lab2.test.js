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
  { year: 2000, month: 2, day: 15, expect: true },
  { year: 2000, month: 1, day: 0, expect: false },
  { year: 2022, month: 1, day: 31, expect: true },
  { year: 2022, month: 3, day: 31, expect: true },
  { year: 2022, month: 5, day: 31, expect: true },
  { year: 2022, month: 7, day: 31, expect: true },
  { year: 2022, month: 8, day: 31, expect: true },
  { year: 2022, month: 10, day: 31, expect: true },
  { year: 2022, month: 12, day: 31, expect: true },
];

describe("[DIM-UTCID01]", () => {
  it("should return 31", () => {
    expect(daysInMonth(2020, 1)).toBe(31);
  });
});

describe("[DIM-UTCID02]", () => {
  it("should return 31", () => {
    expect(daysInMonth(2020, 3)).toBe(31);
  });
});

describe("[DIM-UTCID03]", () => {
  it("should return 31", () => {
    expect(daysInMonth(2020, 5)).toBe(31);
  });
});

describe("[DIM-UTCID04]", () => {
  it("should return 31", () => {
    expect(daysInMonth(2020, 7)).toBe(31);
  });
});

describe("[CD-UTCID01]", () => {
  it("should be an invalid date", () => {
    expect(isValidDate(1234, 4, 0)).toBeFalsy();
  });
});

describe("[CD-UTCID02]", () => {
  it("should be an invalid date", () => {
    expect(isValidDate(1234, 4, 32)).toBeFalsy();
  });
});

describe("[CD-UTCID03]", () => {
  it("should be an invalid date", () => {
    expect(isValidDate(1234, 0, 15)).toBeFalsy();
  });
});

describe("[CD-UTCID04]", () => {
  it("should be an invalid date", () => {
    expect(isValidDate(1234, 13, 15)).toBeFalsy();
  });
});

describe("[CD-UTCID05]", () => {
  it("should be an invalid date", () => {
    expect(isValidDate(999, 1, 15)).toBeFalsy();
  });
});

describe("[CD-UTCID06]", () => {
  it("should be a valid date", () => {
    expect(isValidDate(3000, 1, 15)).toBeTruthy();
  });
});