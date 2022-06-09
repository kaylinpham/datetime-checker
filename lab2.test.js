const { isValidDate, daysInMonth } = require("./lab2");

//DayInMonth
describe("[DIM-UTCID05]", () => {
  it("Should return 31", () => {
    expect(daysInMonth(2020, 8)).toBe(31);
  });
});

describe("[DIM-UTCID06]", () => {
  it("Should return 31", () => {
    expect(daysInMonth(2020, 10)).toBe(31);
  });
});

describe("[DIM-UTCID07]", () => {
  it("Should return 31", () => {
    expect(daysInMonth(2020, 12)).toBe(31);
  });
});

describe("[DIM-UTCID08]", () => {
  it("Should return 30", () => {
    expect(daysInMonth(2020, 4)).toBe(30);
  });
});

///CheckDate
describe("[CD-UTCID13]", () => {
  it("Should return true", () => {
    expect(isValidDate(2400, 2, 31)).toBe(false);
  });
});

describe("[CD-UTCID14]", () => {
  it("Should return false", () => {
    expect(isValidDate(2400, 2, 30)).toBe(false);
  });
});

describe("[CD-UTCID15]", () => {
  it("Should return true", () => {
    expect(isValidDate(2400, 2, 29)).toBe(true);
  });
});

describe("[CD-UTCID16]", () => {
  it("Should return false", () => {
    expect(isValidDate(2500, 2, 29)).toBe(false);
  });
});

describe("[CD-UTCID17]", () => {
  it("Should return true", () => {
    expect(isValidDate(2500, 2, 28)).toBe(true);
  });
});

describe("[CD-UTCID18]", () => {
  it("Should return true", () => {
    expect(isValidDate(2516, 2, 29)).toBe(true);
  });
});

describe("[CD-UTCID19]", () => {
  it("Should return true", () => {
    expect(isValidDate(2516, 2, 28)).toBe(true);
  });
});

describe("[CD-UTCID20]", () => {
  it("Should return false", () => {
    expect(isValidDate(2999, 2, 29)).toBe(false);
  });
});

describe("[CD-UTCID21]", () => {
  it("Should return true", () => {
    expect(isValidDate(2999, 2, 28)).toBe(true);
  });
});

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

//
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

//---------------------

describe("CD-UTCID06", () => {
  it("should be return true", () => {
    expect(isValidDate(1234, 1, 31)).toBe(true);
  });
});
describe("CD-UTCID07", () => {
  it("should be return true", () => {
    expect(isValidDate(1234, 3, 31)).toBe(true);
  });
});
describe("CD-UTCID08", () => {
  it("should be return true", () => {
    expect(isValidDate(1234, 5, 31)).toBe(true);
  });
});
describe("CD-UTCID09", () => {
  it("should be return true", () => {
    expect(isValidDate(1234, 7, 31)).toBe(true);
  });
});
describe("CD-UTCID10", () => {
  it("should be return true", () => {
    expect(isValidDate(1234, 8, 31)).toBe(true);
  });
});
describe("CD-UTCID11", () => {
  it("should be return true", () => {
    expect(isValidDate(1234, 10, 31)).toBe(true);
  });
});
describe("CD-UTCID12", () => {
  it("should be return true", () => {
    expect(isValidDate(1234, 12, 31)).toBe(true);
  });
});

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
