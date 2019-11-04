let K = 2;
let N = 4;
let sum = 0; 
for(let i=0; i<N; i++) {
    if(i % 2 == 0) {
        sum += (i+1)/(K+i);
    }
    else sum -= (i+1)/(K+i);
}
console.log(`vrednost izraza ako je K = ${K} i N = ${N} je ${sum}`);

//30