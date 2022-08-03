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


let introDiv = document.getElementsByClassName("personalIntro")[0];
let firstInputTag = document.getElementById("firstInput");
firstInputTag.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        getNodeLen();
    }
})

function getNodeLen() {
    let getNode = document.querySelectorAll(".setIntro");
    for(let i=0; i<getNode.length; i++) {
        getNode[i].addEventListener("keyup", function(event) {
            if(event.keyCode === 13) {
                addInput();
            }
            getNode[i].removeEventListener();
        });
    }
}

function addInput() {
    let newInput = document.createElement("input");
    newInput.setAttribute("class", "setIntro");

    introDiv.appendChild(newInput);
}