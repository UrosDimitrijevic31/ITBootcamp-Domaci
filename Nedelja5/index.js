let date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const titleMounth = document.querySelector('.budget__title--month');
titleMounth.innerHTML = monthNames[date.getMonth()];

const addDesc = document.querySelector('.add__description');
const addValue = document.querySelector('.add__value');
const addBtn = document.querySelector('.ion-ios-checkmark-outline');

const addType = document.querySelector('.add__type')

var arrayIncome = [];
var arrayExspenses = [];
var ukupnoPrihodi = 0;
var ukupnoRashodi = 0;


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
    let clearFix = document.createElement('div'); //dodati di ako bude potrebno
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

    //TREBA DA NAPRAVIM jedan if da l je - ili + i po tome da ubacim u koju listu hocu
    //I DA DODAM % AKO JE - LISTA

    const income = document.querySelector('.income');

    const expenses = document.querySelector('.expenses__list');
    let ukupno = 0;
    if (addType.value == '+') {
        btnDelete.appendChild(i);
        itemDel.appendChild(btnDelete);
        rightClFx.appendChild(itemValue);
        rightClFx.appendChild(itemDel);
        clearFix.appendChild(itemDesc);
        clearFix.appendChild(rightClFx);
        income.appendChild(clearFix);
        //doda iznos u niz, da bi kasnije moglo da se prodje kroz niz i saberu sve vrednosti
        arrayIncome.push(value1);
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
        //doda iznos u niz, da bi kasnije moglo da se prodje kroz niz i saberu sve vrednosti
        arrayExspenses.push(value1);
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
        let btnToRemove1 = e.target;
        let divToRemove = btnToRemove1.parentElement.parentElement.parentElement.parentElement;
        divToRemove.remove();
        //mora da se popraviiiiiiiiii!!!!!!!!!!!
        if(addType.value == '+'){
            ukupno -= value1;
            console.log('PRIHOOOOODI')
            console.log(value1);
            console.log(ukupno);
            budget.innerHTML = parseInt(ukupno);
        }
        if(addType.value == '-'){
            ukupno += parseInt(value1);
            console.log('rashodi ')
            console.log(value1);
            budget.innerHTML = parseInt(ukupno);
        }
        
            
    }

    addDesc.value = '';
    addValue.value = '';
}

