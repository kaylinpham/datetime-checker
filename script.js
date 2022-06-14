function checkValidDate() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  if (
    !check(day, "Day", 1, 31) ||
    !check(month, "Month", 1, 12) ||
    !check(year, "Year", 1000, 3000)
  ) {
    return;
  }

  showMessage(
    `${day}/${month}/${year} is${
      isValidDate(Number(day), Number(month), Number(year)) ? "" : " NOT"
    } correct date time!`,
    isValidDate(Number(day), Number(month), Number(year)) ? "green" : "red"
  );
}

function isValidDate(day, month, year) {
  const month31 = [3, 5, 7, 8, 10, 12];
  const month30 = [4, 6, 9, 11];
  let maxDate;

  if (month31.includes(month)) {
    maxDate = 31;
  } else if (month30.includes(month)) {
    maxDate = 30;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    maxDate = 29;
  } else {
    maxDate = 28;
  }

  return day <= maxDate;
}

function check(str, field, min, max) {
  if (!str) {
    showMessage(`Please fill in ${field}!`, "yellow");
    return false;
  } else if (!parseInt(str) || parseInt(str) != Number(str)) {
    showMessage(`Input data for ${field} is incorrect format!`, "red");
    return false;
  } else if (parseInt(str) < min || parseInt(str) > max) {
    showMessage(`Input data for ${field} is out of range!`, "red");
    return false;
  }

  return true;
}

function showMessage(msg, color) {
  document.getElementById("message").innerHTML = msg;
  document.getElementById("message").classList.add(color);
  setTimeout(() => {
    document.getElementById("message").classList.remove(color);
  }, 1500);
}
