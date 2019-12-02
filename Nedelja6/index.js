const login = document.querySelector('#login');

let users;
    fetch('users.json')
      .then(response => response.json())
      .then(json => users = json);

login.addEventListener('submit', (e) =>{
    let username = e.target.username.value;
    let password = e.target.password.value;
    console.log(username);
    console.log(password);

    username = username.trim('');    
    password = password.trim('');

    //ne znam kako da sacuvam da mi pise ispod status i nakon sto kliknem dugme
    let check= users.some(user => user.username == username && user.password == password);
    let status = document.createElement('p');
    status.id = 'status';
    status.style.textAlign = 'center';
    status.textContent = check ? "You have successfully signed on" :"You entered the wrong information";
    login.appendChild(status);
});
    
/*
    Da radimo sa backendom napravili mi fetch koji ima metod post (da bi prosledili parametre iz forme),
    i to bi dodali kao EventListener submit dugmetu, kao sto smo radili za ToDo listu, mala modifikacija,
    jer je tamo vracao sve taskove a ovde bit vratili true/false
*/

