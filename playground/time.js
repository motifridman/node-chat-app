var moment = require('moment');

// var date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do YYYY HH:MM:SS'));

var createdAt =1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'))