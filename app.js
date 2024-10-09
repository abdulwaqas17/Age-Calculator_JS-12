var DOB = prompt('Enter your Date of Birth (MM,DD,YY)');

var age = new Date().getTime() - new Date(DOB).getTime();
// console.log(age);
var ageYears = Math.floor(age / (1000 * 60 * 60 * 24 * 365)); 
var ageDays = Math.floor((age / (1000 * 60 * 60 * 24) ) - (ageYears * 365)); 
// console.log(ageYears + ' years');
// console.log(ageDays + ' days');
alert('Your Age is : \n' + ageYears + ' years ' + ageDays + ' days');