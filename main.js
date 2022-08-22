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
    const gender1 = document.getElementsByName("gender");
    const age = document.getElementsByName("age");
    const residence = document.getElementsByName("residence");
    const technic = document.getElementsByName("technic");
    const career = document.getElementsByName("career");
    const Education = document.getElementsByName("Education");
    for(let i=0; i<gender1.length; i++) {
        if(gender1[i].checked) {
            const filtered = people1.filter(person => person['gender'] === gender1[i].value);
            displayItems(filtered);
        }
        
    }
    
    //displayItems(filtered);
}

// main 동작
let people1 = [];
loadItems()
    .then(people => {
        console.log(people);
        displayItems(people);
        test = people;
})
.catch(console.log);

