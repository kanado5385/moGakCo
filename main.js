
function loadItems() {
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.people);
}

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

loadItems()
    .then(people => {
        console.log(people);
        displayItems(people);
})
.catch(console.log);
