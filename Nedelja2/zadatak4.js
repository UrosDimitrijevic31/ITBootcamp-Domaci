/* Исписати првих 1000 бројева дељивих са 5 */

var n = 1000; //prvih n brojeva deljivih sa 5
var b = 5; //sa kojim brojem je deljivo
var brojac = 0; //broji svaki broj koji je deljiv sa 5
console.log(`Prvih ${n} brojeva deljivih sa ${b}: `)

for(var a=0;brojac<n;) {
    if(a % b == 0) {
        console.log(a);
        brojac++;
    }
    a++;    
} 









