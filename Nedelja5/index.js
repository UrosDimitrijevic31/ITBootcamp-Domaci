let date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const titleMounth = document.querySelector('.budget__title--month');
titleMounth.innerHTML = monthNames[date.getMonth()];

const addDesc = document.querySelector('.add__description');
const addValue = document.querySelector('.add__value');
const addBtn = document.querySelector('.ion-ios-checkmark-outline');
const addType = document.querySelector('.add__type');
const income = document.querySelector('.income');
const expenses = document.querySelector('.expenses__list');

var arrayIncome = [];
var arrayExspenses = []; 
var ukupnoPrihodi = 0;
var ukupnoRashodi = 0;
var ukupno = 0;

addValue.addEventListener('keyup', txtKeyUp);
addBtn.addEventListener('click', btnAddClick);

function btnAddClick() {
    addItem();
}

function txtKeyUp(e) {
    if (e.keyCode == 13) {
        addItem();
    }
}

function addItem() {
    let text = addDesc.value;
    text = text.trim();
    if (text == '') return;

    let value1 = parseInt(addValue.value); 
    if (value1 == 0 || value1 < 0) return;

    //create wrapper
    let clearFix = document.createElement('div'); 
    clearFix.className = 'item clearfix';

    //create div description
    let itemDesc = document.createElement('div');
    itemDesc.className = 'item__description';
    itemDesc.innerHTML = text;

    //create div right clearfix
    let rightClFx = document.createElement('div');
    rightClFx.className = 'right clearfix';

    //create div itemValue
    let itemValue = document.createElement('div');
    itemValue.className = 'item__value';
    itemValue.innerHTML = value1;

    //crete div percentage, if add item in expenses list
    let percentage = document.createElement('div');
    percentage.className = 'item__percentage';

    // percentage.innerHTML = procenti 
    //<div class="item__percentage">21%</div> 

    //create div itemDel 
    let itemDel = document.createElement('div');
    itemDel.className = 'item__delete';

    //create btn delete
    let btnDelete = document.createElement('button');
    btnDelete.className = 'item__delete--btn';
    btnDelete.addEventListener('click', btnRem);

    //create i element
    let i = document.createElement('i');
    i.className = 'ion-ios-close-outline';
    
    if (addType.value == '+') {
        btnDelete.appendChild(i);
        itemDel.appendChild(btnDelete);
        rightClFx.appendChild(itemValue);
        rightClFx.appendChild(itemDel);
        clearFix.appendChild(itemDesc);
        clearFix.appendChild(rightClFx);
        income.appendChild(clearFix);
        ukupnoPrihodi += parseInt(value1);
    }
    else {
        btnDelete.appendChild(i);
        itemDel.appendChild(btnDelete);
        rightClFx.appendChild(itemValue);
        rightClFx.appendChild(percentage);
        rightClFx.appendChild(itemDel);
        clearFix.appendChild(itemDesc);
        clearFix.appendChild(rightClFx);
        expenses.appendChild(clearFix);
 
        ukupnoRashodi += parseInt(value1);
   }
    let budget = document.querySelector('.budget__value');
    let budgetIncome = document.querySelector('.budget__income--value');
    let budgetExpenses = document.querySelector('.budget__expenses--value');

    ukupno = ukupnoPrihodi - ukupnoRashodi;

    budget.innerHTML = ukupno;
    budgetIncome.innerHTML = ukupnoPrihodi;
    budgetExpenses.innerHTML = ukupnoRashodi;

    function btnRem(e) {
        let btnToRemove1 = e.target; //btn
        let divToRemove = btnToRemove1.parentElement.parentElement.parentElement.parentElement;
       
       if(divToRemove.parentElement.className == 'income') {
            ukupno -= value1;
            ukupnoPrihodi -= value1; 
            budgetIncome.innerHTML = ukupnoPrihodi;
            budget.innerHTML = parseInt(ukupno);
       }
       else{
            ukupno += parseInt(value1);
            ukupnoRashodi -= value1;
            budgetExpenses.innerHTML = ukupnoRashodi;
            budget.innerHTML = parseInt(ukupno);
        }    
        divToRemove.remove();      
    }
    addDesc.value = '';
    addValue.value = '';
}


