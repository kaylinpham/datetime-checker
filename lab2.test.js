const { isValidDate, daysInMonth } = require("./lab2");

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