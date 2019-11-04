/*За првих 100 бројева исписати:

FizzBuzz ако је број дељив и са 3 и са 5
Fizz ако је број дељив само са 3
Buzz ако је број дељив само са 5
Број ако није дељив ни са 3 ни са 5
(1,2,Fizz,4,Buzz,...) */

let str ='';
for(var a=0;a<=100;a++) {    
    if(a % 3 == 0) {
        str += `Fizz`;
        console.log(str);
    }
    if(a % 5 == 0) {
        str += 'Buzz';
        console.log(str);
    }  
    else {
        console.log(a);
    }
    str = '';
}
