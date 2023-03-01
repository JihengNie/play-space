// Write a function that converts user entered date formatted as M / D / YYYY to a format required by an API(YYYYMMDD).The parameter "userDate" and the return value are strings.

// For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  const sepratedArray = userDate.split('/');
  let finalDate = '';
  finalDate += sepratedArray[2];
  finalDate += sepratedArray[0].length < 2 ? '0' + sepratedArray[0] : sepratedArray[0];
  finalDate += sepratedArray[1].length < 2 ? '0' + sepratedArray[1] : sepratedArray[1];
  return finalDate;
}

console.log(formatDate('12/31/2014'));
console.log(formatDate('1/32/2014'));
