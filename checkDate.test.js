const { isValidDate } = require("./lab3");

describe("[CD-UTCID00]", () => {
    it("should be an invalid date", () => {
        expect(isValidDate(1234, 4, 0)).toBe(false);
    });
});

describe("[CD-UTCID01]", () => {
    it("should be an invalid date", () => {
        expect(isValidDate(1234, 4, 32)).toBe(false);
    });
});

describe("[CD-UTCID02]", () => {
    it("should be an invalid date", () => {
        expect(isValidDate(1234, 0, 15)).toBe(false);
    });
});

describe("[CD-UTCID03]", () => {
    it("should be an invalid date", () => {
        expect(isValidDate(1234, 13, 15)).toBe(false);
    });
});

describe("[CD-UTCID04]", () => {
    it("should be an invalid date", () => {
        expect(isValidDate(999, 1, 15)).toBe(false);
    });
});

describe("[CD-UTCID05]", () => {
    it("should be a valid date", () => {
        expect(isValidDate(3000, 1, 15)).toBe(true);
    });
});

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
