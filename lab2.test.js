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
