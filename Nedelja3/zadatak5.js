/*На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за 
наручивање одмах

Дугмићи за наручивање повећавају бројач
Дугмићи за наручивање одмах ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, 
[ danasnji datum i vreme ]) Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање 
одмах избацује одговарајућу поруку за грешку */

const orderBtnClassName = '.btn-order'; 
const orderButtons = document.querySelectorAll(orderBtnClassName);
const orderButtons2 = document.querySelectorAll('.btn-order-now');
let pizzaCount = 0;
const pizzaCounterBadge = document.querySelector('#counter');

orderButtons.forEach(button => {
    button.addEventListener('click', function () {
        selectPizza(button);
    });
});

function selectPizza(element) {
    pizzaCount++;
    pizzaCounterBadge.innerHTML = pizzaCount;
}
//------------Datum i vreme-----------
let dateTimeNow = new Date();
//TIME-------------------------------------------------------------------------------
let hours = dateTimeNow.getHours(); 
let minutes = dateTimeNow.getMinutes();
let seconds = dateTimeNow.getSeconds();
let timeStampString = `${hours}:${minutes}:${seconds}`;

//DATE-------------------------------------------------------------------------------
let dateDay = dateTimeNow.getDate(); 
let month = dateTimeNow.getMonth()+1; 
let year = dateTimeNow.getFullYear();
let dateStampString = `${dateDay}-${month}-${year}`; 


orderButtons2.forEach(button => {
    button.addEventListener('click', function(){
        if(pizzaCount == 0){
            alert('Niste narucili nijednu picu');
        }
        else{
            if(pizzaCount == 1)
            alert(`narucili ste [${pizzaCount}] picu: [${dateDay}-${month}-${year} -${hours}:${minutes}:${seconds}]`)
            if(pizzaCount == 2  || pizzaCount == 3 || pizzaCount == 4){
                alert(`narucili ste [${pizzaCount}] pice: [${dateDay}-${month}-${year} -${hours}:${minutes}:${seconds}]`)
            }
            else{
                alert(`narucili ste [${pizzaCount}] pica: [${dateDay}-${month}-${year} -${hours}:${minutes}:${seconds}]`)
            }
        }
        pizzaCount = 0;
        pizzaCounterBadge.innerHTML = pizzaCount;
    })
});

