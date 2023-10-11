function authorisationUI() {
    const authContainer = document.getElementById("authorisation");
    if (!localStorage.nameBookholder) {
        authContainer.innerHTML = '';
        const authInput = "<input id='authUserName' type ='text' placeholder='Insert your name'></input>";
        const authButton = document.createElement('p');
        authButton.classList.add("button");
        authButton.classList.add("authButton");
        authButton.textContent = "Submit";
        authButton.addEventListener('click', logInUser);
        authContainer.insertAdjacentHTML('afterbegin', authInput);
        authContainer.appendChild(authButton);

    } else {        
        authContainer.innerHTML = '';
        const welcomeUser = `<p>Welcome, ${localStorage.nameBookholder}</p>`;
        const goodbyeUser = "<p>Not you?</p>";
        const logOutButton = document.createElement('p');
        logOutButton.classList.add("button");
        logOutButton.classList.add("authButton");
        logOutButton.textContent = "Log out";
        logOutButton.addEventListener('click', logOutUser);
        authContainer.insertAdjacentHTML('afterbegin', welcomeUser);
        authContainer.insertAdjacentHTML('beforeend', goodbyeUser);
        authContainer.appendChild(logOutButton);
    }
}

window.addEventListener('load', authorisationUI);


function logInUser() {
    const key = 'nameBookholder';
    const value = document.getElementById("authUserName").value;
    localStorage.setItem(key, value);
    document.getElementById("authorisation").innerHTML = '';
    authorisationUI();
}

function logOutUser() {

    localStorage.removeItem('nameBookholder');

    document.getElementById("authorisation").innerHTML = '';
    authorisationUI();
}


if(localStorage.nameBookholder){
    fetch("./data/patrons.json").then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then((data) => {
    console.log(data);
  })
}
