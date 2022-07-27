let nameInput = document.getElementById("enterProfileName");
nameInput.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        addName();
    }
})

function addName() {
    let namePar = nameInput.value;
    document.getElementById('enteredName').innerText = namePar;
    nameInput.style.display = "none";
}

let emailInput = document.getElementById("enterEmail");
emailInput.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        addEmail();
    }
})

function addEmail() {
    let emailPar = emailInput.value;
    document.getElementById('enteredEmail').innerText = emailPar;
    emailInput.style.display = "none";
}

let gitInput = document.getElementById("enterGit");
gitInput.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        addGit();
    }
})

function addGit() {
    let gitPar = gitInput.value;
    document.getElementById('enteredGit').innerText = gitPar;
    gitInput.style.display = "none";
}

let getIntroInput = document.getElementsByClassName("enterIntro");
getIntroInput.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        addIntro();
    }
})

function addIntro() {
    let introCnt = 1;
    let newIntroSpan = document.createElement('span');
    newIntroSpan.setAttribute("class", "introSpan");
    newIntroSpan.setAttribute("id", "enterIntro" + introCnt);
    introCnt += 1;

    let newIntroText = document.getElementById("enterIntro" + introCnt);
    let introTextToAdd = newIntroText.value;
    newIntroSpan.innerText = introTextToAdd;
    introTextToAdd.style.display = "none";
}