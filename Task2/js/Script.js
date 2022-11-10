var object;
if (localStorage.cars != null) {
    object = JSON.parse(localStorage.cars);
} else {
    object = [{
            id: "1",
            img: './img/mercedes-benz-1470136__340.jpg',
            name: 'Marcedes',
            price: '100$ per day',
            available: 'available'
        },
        {

            id: "2",
            img: './img/cosySec.png',
            name: 'BMW',
            price: '80$ per day',
            available: 'available'
        },
        {

            id: "3",
            img: './img/bmw.jpg',
            name: 'BMW',
            price: '150$ per day',
            available: 'available'
        },
    ];
}
var content = document.getElementById('content');
for (var i = 0; i < object.length; i++) {
    content.innerHTML += `
    <div class="car" id="${i+1}">
    <img src="${object[i].img}" alt="">
    <div class="carDesc">
    <p class="carName"><span>Name: </span> ${object[i].name}</p>
    <p class="price"><span>Price: </span>${object[i].price}</p>
    </div>
    <button class="${object[i].available}" id="${i+1}" onclick="ChangeState(${i+1})">Available</button>
    </div>
    `;
}


var path = window.location.pathname;

function ChangeState(index) {
    console.log(index);
    var index = object[index - 1];
    console.log(index);
    if (index.available == 'available') {
        index.available = 'unavailable';
        document.getElementById(index.id).style.opacity = 0.2;
        document.getElementById(index.id).lastElementChild.innerHTML = "unavailable";
        localStorage.setItem('cars', JSON.stringify(object));
    } else {
        if (path.includes('admin')) {
            index.available = 'available';
            document.getElementById(index.id).style.opacity = 1;
            document.getElementById(index.id).lastElementChild.innerHTML = "available";
            localStorage.setItem('cars', JSON.stringify(object));
        }

    }
    showItemsWState();

}

function showItemsWState() {
    for (var i = 0; i < object.length; i++) {
        if (object[i].available == 'available') {
            document.getElementById(i + 1).style.opacity = 1;
            document.getElementById(i + 1).lastElementChild.innerHTML = "available";
        } else {
            document.getElementById(i + 1).style.opacity = 0.2;
            document.getElementById(i + 1).lastElementChild.innerHTML = "unavailable";
        }
    }

}
showItemsWState();