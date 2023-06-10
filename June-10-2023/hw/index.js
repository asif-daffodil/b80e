
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return year + " is a leapyear";
      } else {
        return year + " is not a leapyear";
      }
    } else {
      return year + " is a leapyear";
    }
  } else {
    return year + " is not a leapyear";
  }
}
console.log(isLeapYear(2023));
console.log(isLeapYear(1904));   