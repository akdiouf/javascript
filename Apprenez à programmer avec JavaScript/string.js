const noms = 'Amani Bisima';
const age = 30;

//concaténation
console.log('Mon nom est ' + noms + ' et j\'ai ' + age + ' ans');

const msg = 'Mon nom est ${noms} et j\'ai ${age} ans';
console.log(msg);
console.log(msg.length);
console.log(msg.includes('nom'));
console.log(msg.startsWith('Mon'));
console.log(msg.endsWith('ans'));

const text = '      Bonjour le monde    ';
console.log(text);
console.log(text.replace(/^\s+|\s+$/gm, ''));

const langage = 'JavaScript';
let text2 = '';

for (let x of langage) text2 += x + "-";
console.log(text2);