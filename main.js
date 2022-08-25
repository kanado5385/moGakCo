// json으로부터 정보 불러오는 함수
function loadItems() {
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.people);
}




//모든 정보를 디스플레이 해주는 함수
function displayItems(people){
    const container = document.querySelector('.people');
    container.innerHTML = people.map(person => createHTMLString(person)).join('');
}

function createHTMLString(person) {
    return `
    <div class="person">
                <img src="${person.img}" alt="기본이미지" class="pers_img">
                <div class="pers_inf">
                    <div class="pers_name">${person.nikname}</div>
                    <div class="age">만${person.age}세</div>
                    <div class="pers_tech">
                        <div class="tech">${person.technic1}</div>
                        <div class="tech">${person.technic2}</div>
                        <div class="tech">${person.technic3}</div>
                    </div>
                </div>
            </div>
    `;
}

// 조건 선택 검색 함수

function search_cond(){
    people1 = people2;
    const gender1 = document.getElementsByName("gender");
    const age1 = document.getElementsByName("age");
    const residence1 = document.getElementsByName("residence");
    const technic1 = document.getElementsByName("technic");
    const career1 = document.getElementsByName("career");
    const Education1 = document.getElementsByName("Education");
    for(let i=0; i<gender1.length; i++) {
        if(gender1[i].checked) {
            people1 = people1.filter(person => person['gender'] === gender1[i].value);
        }    
    }
    for(let i=0; i<residence1.length; i++) {
        if(residence1[i].checked) {
            people1 = people1.filter(person => person['residence'] === residence1[i].value);
        }    
    }
    for(let i=0; i<career1.length; i++) {
        if(career1[i].checked) {
            people1 = people1.filter(person => person['career'] === career1[i].value);
        }    
    }
    for(let i=0; i<Education1.length; i++) {
        if(Education1[i].checked) {
            people1 = people1.filter(person => person['Education'] === Education1[i].value);
        }    
    }
    for(let i=0; i<technic1.length; i++) {
        if(technic1[i].checked) {
            people1 = people1.filter(person => 
                person['technic1'] === technic1[i].value || 
                person['technic2'] === technic1[i].value || 
                person['technic3'] === technic1[i].value);
        }    
    }
    for(let i=0; i<age1.length; i++) {
        if(age1[i].checked) {
            num = age1[i].value;
            num1 = Number(num);
            num1 = num1 + 10;
            people1 = people1.filter(person => person['age'] >= age1[i].value && person['age'] < num1);
        }    
    }
    console.log(people1);
    displayItems(people1);   
}

// main 동작
let num1;
let num;
let people2 = [];
let people1 = [];
loadItems()
    .then(people => {
        console.log(people);
        displayItems(people);
        people1 = people;
        people2 = people;
})
.catch(console.log);

