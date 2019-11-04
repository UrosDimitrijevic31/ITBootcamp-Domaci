/* Napisati program koji racuna prosek brojeva deljivih sa 7 u intervalu od M do N uključujući M i N */

let M = 1;
let N = 21
let sum = 0;
let broj = 0; //koliko ih ima
for(let i = M; i <= N; i++){
    if(i % 7 == 0) {
        sum+=i;
        broj++;
    }
}
let prosek = sum/broj;
console.log(`suma brojeva deljivih sa 7 je ${sum}, njihov broj je ${broj}, pa je prosek: ${prosek}`)
//20