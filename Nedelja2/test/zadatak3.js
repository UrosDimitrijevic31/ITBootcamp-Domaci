let n = 15;
let str = '';
var u = -1;
for(let i=1; i <= n; i++) {     
    if(i == 1 ) {
        str += ' '.repeat(n-i) + '*' +' '.repeat(n-i);
        console.log(str);
    }
    else { 
        str = '';
        str += ' '.repeat(n-i)+ '*' + ' '.repeat(u+=2)+'*'; //1 3 5 7 9 uvek veci za 2
        console.log(str); 
    }
}
//drugi deo ------------------------

for(let i=0; i < n-1; i++) {  
    str = '';    
    if(i == 0) {
       str += " ".repeat(i+1)+ '*' +" ".repeat(u-=2)+'*';
       console.log(str); 
    }
    else if(u === 1) {
        str = '';
        str += ' '.repeat(n-1)+'*'; 
        console.log(str); 
    }
    else {
        str = '';
        str += ' '.repeat(i+1)+'*' + ' '.repeat(u-=2)+'*'; // u = 3, 1 -- za 2 manji 
        console.log(str); 
    } 
    
}//30