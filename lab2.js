function isLeapYear(year) {
<<<<<<< HEAD
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
=======
  return (year % 4 === 0 && year % 100 != 0) || year % 400 === 0;
>>>>>>> 8285a88f8071511f7d4725f3758a0fd57816e425
}

function daysInMonth(year, month) {
  if (month <= 0 || month > 12) {
    return 0;
  }

  const month31 = [1, 3, 5, 7, 8, 10, 12];
  const month30 = [4, 6, 9, 11];
  let maxDate;

  if (month31.includes(month)) {
    maxDate = 31;
  } else if (month30.includes(month)) {
    maxDate = 30;
  } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    maxDate = 29;
  } else {
    maxDate = 28;
  }
  return maxDate;
}

function isValidDate(year, month, day) {
  if (year < 1000 || year > 3000) {
    return false;
  }
  
  if (month <= 0 || month > 12 || day <= 0) {
    return false;
  }
  return Boolean(day <= daysInMonth(year, month));
}

module.exports = { isValidDate, daysInMonth };