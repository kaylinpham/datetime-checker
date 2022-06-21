const { daysInMonth } = require("./lab3");

describe("DIM-UTCID01", () => {
  it("should return 31", () => {
    expect(daysInMonth(2020, 1)).toBe(31);
  });
});

describe("DIM-UTCID02", () => {
  it("should return 31", () => {
    expect(daysInMonth(2020, 3)).toBe(31);
  });
});

describe("DIM-UTCID03", () => {
  it("should return 31", () => {
    expect(daysInMonth(2020, 5)).toBe(31);
  });
});

describe("DIM-UTCID04", () => {
  it("should return 31", () => {
    expect(daysInMonth(2020, 7)).toBe(31);
  });
});

describe("DIM-UTCID05", () => {
  it("Should return 31", () => {
    expect(daysInMonth(2020, 8)).toBe(31);
  });
});

describe("DIM-UTCID06", () => {
  it("Should return 31", () => {
    expect(daysInMonth(2020, 10)).toBe(31);
  });
});

describe("DIM-UTCID07", () => {
  it("Should return 31", () => {
    expect(daysInMonth(2020, 12)).toBe(31);
  });
});

describe("DIM-UTCID08", () => {
  it("Should return 30", () => {
    expect(daysInMonth(2020, 4)).toBe(30);
  });
});

describe("DIM-UTCID09", () => {
  it("should be return 30", () => {
    expect(daysInMonth(2021, 6)).toBe(30);
  });
});

describe("DIM-UTCID10", () => {
  it("should be return 30", () => {
    expect(daysInMonth(2021, 9)).toBe(30);
  });
});

describe("DIM-UTCID11", () => {
  it("should be return 30", () => {
    expect(daysInMonth(2021, 11)).toBe(30);
  });
});

describe("DIM-UTCID12", () => {
  it("should be return 29", () => {
    expect(daysInMonth(2400, 2)).toBe(29);
  });
});

describe("DIM-UTCID13", () => {
  test("Should return: 28", () => {
    expect(daysInMonth(2500, 2)).toBe(28);
  });
});

describe("DIM-UTCID14", () => {
  test("Should return: 29", () => {
    expect(daysInMonth(2510, 2)).toBe(28);
  });
});

describe("DIM-UTCID15", () => {
  test("Should return: 28", () => {
    expect(daysInMonth(2999, 2)).toBe(28);
  });
});

describe("DIM-UTCID16", () => {
  test("Should return: 0", () => {
    expect(daysInMonth(2020, 0)).toBe(0);
  });
});

describe("DIM-UTCID17", () => {
  test("Should return: 0", () => {
    expect(daysInMonth(2021, 213)).toBe(0);
  });
});
