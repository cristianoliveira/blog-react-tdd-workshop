// Example of bad code to refactor.

function cityBirthday(content, city, yearbirthday, month, day) {
  let yearnumber = parseInt(yearbirthday);
  let birthday = new Date(yearbirthday, month, day);
  let today = new Date();
  let year = today.getFullYear();
  let age = year - birthday.getFullYear();
  content += city.toUpperCase();
  content += ' This year of ' + year + ' ';
  content += 'the city is ' + age + ' years old.';

  setTimeout(() => console.log(content), 0);

  return content;
}

// USAGE:
//
// console.log(': ', cityBirthday('foo', 'test', 2000));
exports.module = cityBirthday;

