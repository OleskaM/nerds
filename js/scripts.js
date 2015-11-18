var link = document.querySelector('.contact-us');
var popup = document.querySelector('.modal-content');
var close = popup.querySelector('.modal-content-close');
var close2 = popup.querySelector('.cancel');
var login = popup.querySelector('#user-name');
var email = popup.querySelector('#user-email');
var message = popup.querySelector('#user-message');
var form = popup.querySelector('form');
var storage = localStorage.getItem('login');

link.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('modal-content-show');

    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

close.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('modal-content-show');
    popup.classList.remove('modal-error');
});

close2.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('modal-content-show');
    popup.classList.remove('modal-error');
});


form.addEventListener('submit', function(event) {
    if (!login.value || !email.value || !message.value) {
        event.preventDefault();
        popup.classList.remove('modal-error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('modal-error');
    } else {
        localStorage.setItem('login', login.value);
    }
});

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains('modal-content-show')) {
            popup.classList.remove('modal-content-show');
            popup.classList.remove('modal-error');
        }
    }
});


ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [59.939245,30.319933],
            zoom: 17
        }),
        myPlacemark = new ymaps.Placemark([59.938725, 30.323132],
            {
                hintContent: 'Nёrds'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/baloon.png',
                iconImageSize: [231, 190],
                iconImageOffset: [-49, -195]
            });

    myMap.geoObjects.add(myPlacemark);
});

