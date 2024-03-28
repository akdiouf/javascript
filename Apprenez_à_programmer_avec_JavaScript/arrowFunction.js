//ES5
var addition = function(x, y){
    return x + y;
}
console.log(addition(2, 3));


//ES6
const additions = (x, y) => x + y;

console.log(additions(2, 3));


const addition1 = (x, y) => {
    console.log('Voici l\'addition de deux nombres');
    return x + y 
}
console.log (addition(2, 3));

const ditBonjour = nom => console.log(`Bonjour ${nom}`);

ditBonjour('Louis')

const entreesPremiereSemaine = 1000
const entreesDeuxiemeSemaine = 2000
const totalEntrees = entreesPremiereSemaine + entreesDeuxiemeSemaine

console.log(totalEntrees)

