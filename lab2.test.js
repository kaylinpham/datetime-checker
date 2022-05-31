const { isValidDate, daysInMonth } = require("./lab2");


//DayInMonth
describe('[DIM-UTCID05]', () => { 
  it('Should return 31', () => {
    expect(daysInMonth(2020, 8)).toBe(31)
  });
});

describe('[DIM-UTCID06]', () => { 
  it('Should return 31', () => {
    expect(daysInMonth(2020, 10)).toBe(31)
  });
});

describe('[DIM-UTCID07]', () => { 
  it('Should return 31', () => {
    expect(daysInMonth(2020, 12)).toBe(31)
  });
});

describe('[DIM-UTCID08]', () => { 
  it('Should return 30', () => {
    expect(daysInMonth(2020, 4)).toBe(30)
  });
});

///CheckDate
describe('[CD-UTCID13]', () => { 
  it('Should return true', () => {
    expect(isValidDate(2400, 2, 31)).toBe(false)
  });
});

describe('[CD-UTCID14]', () => { 
  it('Should return false', () => {
    expect(isValidDate(2400, 2, 30)).toBe(false)
  });
});

describe('[CD-UTCID15]', () => { 
  it('Should return true', () => {
    expect(isValidDate(2400, 2, 29)).toBe(true)
  });
});

describe('[CD-UTCID16]', () => { 
  it('Should return false', () => {
    expect(isValidDate(2500, 2, 29)).toBe(false)
  });
});

describe('[CD-UTCID17]', () => { 
  it('Should return true', () => {
    expect(isValidDate(2500, 2, 28)).toBe(true)
  });
});

describe('[CD-UTCID18]', () => { 
  it('Should return true', () => {
    expect(isValidDate(2516, 2, 29)).toBe(true)
  });
});

describe('[CD-UTCID19]', () => { 
  it('Should return true', () => {
    expect(isValidDate(2516, 2, 28)).toBe(true)
  });
});

describe('[CD-UTCID20]', () => { 
  it('Should return false', () => {
    expect(isValidDate(2999, 2, 29)).toBe(false)
  });
});

describe('[CD-UTCID21]', () => { 
  it('Should return true', () => {
    expect(isValidDate(2999, 2, 28)).toBe(true)
  });
});
