import _ from 'lodash';

console.log('Hello Lodash');

var randomNum = _.random(1,10);
console.log(randomNum);
const gehs = [{name: 'Jenny', age: 21}, {name: 'Blessing', age: 28},{name: 'Kaka', age: 25}, {name: 'Bukky', age: 35}];
// console.log(gehs);

const nameGehs = _.map(gehs, (geh)=>geh.name);
console.log(nameGehs);
const twentiesGehs = _.filter(gehs, (geh) => geh.age > 27);
const thirtiesGehs = _.reject(gehs, (geh) => geh.age > 30);
const sortGehs = _.sortBy(gehs, (geh) => geh.age);
const selectGeh = _.find(gehs, (geh) => geh.name === 'Bukky');

console.log(twentiesGehs);
console.log(thirtiesGehs);
console.log(sortGehs);
console.log(selectGeh);