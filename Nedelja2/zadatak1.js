/*За два броја (а и б) исписати њихов: Збир,разлику,производ,количник,остатак при дељењу,степен (а^b) */
var a = 10;
var b = 5;

var zbir = a + b;
var razlika = a - b;
var proizvod = a * b;
var kolicnik = a / b;
var ostatak = a % b;
var stepen = Math.pow(a, b);

console.log(`ZA BROJEVE ${a} i ${b}: 
--zbir je: ${zbir}
--razilika je: ${razlika}
--proizvod je: ${proizvod}
--kolicnik je: ${kolicnik},
--ostatak pri deljenju je: ${ostatak}
--stepen a^b je: ${stepen}`);