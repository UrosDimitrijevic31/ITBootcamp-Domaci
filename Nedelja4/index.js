const textBoxTitle = document.querySelector('#txt-title'); //upisuje se poruka
const addTaskButton = document.querySelector('#btn-add'); //dugme za submit,
//console.log(addTaskButton); prikaze ceo element iz html-a 
const taskListContainer = document.querySelector('#tasks-container'); //dodavanje taska, ceo div
const removeSelected = document.querySelector('#remv-sel'); //dugme da se obrise sve selektovano
const selectInverted = document.querySelector('#sel-invert');
const urgency = document.querySelector('#dropdown');

addTaskButton.addEventListener('click', btnAddClick); //doda se Event za submit dugme
textBoxTitle.addEventListener('keyup', txtKeyUp);     //doda se Evenet za momenat kad se upisuje poruka
removeSelected.addEventListener('click', remove); 
selectInverted.addEventListener('click', inverted);



//sta se desi kad se klikne submit dugme, funkcija se pozove u Eventu-u
function btnAddClick() {
    addItem();  
}
//kad se upisuje poruka, kod tog Event-a funkcija koja se poziva
//keyCode - svako dugme ima svoj keyCode
//sluzi da moze i na enter da se upise poruka
function txtKeyUp(e){ 
    if(e.keyCode==13){
        addItem();
    }
}
//funkcija za dodavanje taskova
function addItem(){
    let text = textBoxTitle.value; //pokupimo vrednost text polja
    text = text.trim();
    //proveravamo da li je prazan string, odnosno da li je korisnik uneo nesto
    if(text == ""){
        alert("Task title can not be empty!");
        return; 
    }
    let priority = urgency.value;


    //kreiramo div
    let itemContainer = document.createElement("div");
    itemContainer.className = 'task-item';
    if(priority == 'Low'){
        itemContainer.style.backgroundColor = '#b3d1ff';
    }
    if(priority == 'Medium'){
        itemContainer.style.backgroundColor = '#d2d22d';
    }
    if(priority == 'High'){
        itemContainer.style.backgroundColor = '#cc3399';
    }
   
    
    
    //kreiramo p
    let itemText = document.createElement('p');
    itemText.innerHTML = text;
    itemText.className = 'task-title';
    
    //kreiramo div
    let checkContainer = document.createElement('div');
    checkContainer.className = 'task-check';
    
    //kreiramo button za brisanje Taska
    let removeBtn = document.createElement('button');
    removeBtn.className = 'task-remove-btn';
    removeBtn.addEventListener('click', removeTask); //Event kad se stisne button
    removeBtn.innerHTML = 'X';

    //kreiramo input za cekiranje taska
    let chkDone = document.createElement('input');
    chkDone.type = 'checkbox'; //prepoznaje atribute iz html-a, type i value potrebni kad se pravi input
    chkDone.className = 'chk-state';
    chkDone.value = 'done';
    chkDone.addEventListener('change', handleCheckChange);

    //ubacivanje elemenata, odnosno pravljenje zeljene strukture html elemenata
    checkContainer.appendChild(removeBtn);
    checkContainer.appendChild(chkDone);
    itemContainer.appendChild(itemText);
    itemContainer.appendChild(checkContainer);
    taskListContainer.appendChild(itemContainer);

    textBoxTitle.value = ''; //potrebno da bi se nakon svakog unosa string postavio na pocetnu vrednost ''
}

function removeTask(e){
    if(!confirm('Are you sure')) { //proverimo da li smo sigurni da obrisemo stavku sa liste
        return;
    }

    let btnToRemove = e.target; //da bi znali koji element
    let divToRemove = btnToRemove.parentElement.parentElement;
    divToRemove.remove(); //remove() ugradjena metoda
}

function handleCheckChange(e){
    let chkBox = e.target; //da zna koji element, pozivom funkcije se prosledjuje input, tako zna koji je element
    let parent = chkBox.parentElement.parentElement;
    if(chkBox.checked){ //.checked - je property u html-u, da li je pritisnuto dugme
        parent.children[0].style.textDecoration = 'line-through';
    }
    else {
        parent.children[0].style.textDecoration = 'none';
    }
}

function remove(){
    const chkBox = document.querySelectorAll('.chk-state');
    chkBox.forEach(element =>{
        if(element.checked) {
            element.parentElement.parentElement.remove();
            
        }
    })
}

function inverted(){
    const chkBox = document.querySelectorAll('.chk-state');
    chkBox.forEach(element =>{
        if(element.checked) {
            element.checked = false; 
            element.parentElement.parentElement.children[0].style.textDecoration = 'none';
        }
        else {
            element.checked = true;
            element.parentElement.parentElement.children[0].style.textDecoration = 'line-through';
            
        }
    })
}




