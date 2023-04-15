/*$('.sliderFirst').slick({
    dots: true,
    infinite: true,
    speed: 600,
    fade: true,
    cssEase: 'linear'
});

$('#accordion').accordion();*/

$(document ).ready(function() {
        new WOW({
            animateClass: "animate__animated",
        }).init();

    $('.sliderFirst').slick({
        dots: true,
        infinite: true,
        speed: 600,
        fade: true,
        cssEase: 'linear'
    });

    $('#accordion').accordion();

    $('.test-popup-link').magnificPopup({
        type: 'image'
        // other options
    });


    //Валидация для формы:
    let btnOrder = $('#btn-order');
    let firstName = $('#firstName');
    let lastName = $('#lastName');
    let numberPhone = $('#numberPhone');
    let country = $('#country');
    let index = $('#index');
    let address = $('#address');



    //- в поле индекс можно вводить только цифры
    index.keypress(function (t) {
            this.value = this.value.replace(/[^0-9]/g, '');
    });




    // Заполнить все поля формы:
    btnOrder.click(function () {
        if (!firstName.val()) {
            alert('Заполните поле Имя');
            return;
        };

        if (!lastName.val()) {
            alert('Заполните поле Фамилия');
            return;
        };

        if (!numberPhone.val()) {
            alert('Заполните поле Телефон');
            return;
        };

        if (!country.val()) {
            alert('Заполните поле Страна');
            return;
        };

        if (!index.val()) {
            alert('Заполните поле Индекс');
            return;
        };

        //- индекс должен содержать 6 символов
        if (index.val().length !== 6) {
            alert('Поле индекс должно содержать 6 символов');
            return
        };

        if (!address.val()) {
            alert('Заполните поле Адрес');
            return;
        }

        $('.makeAnOrder h2').text('Спасибо за заказ. Мы свяжемся с вами в ближайшее время!');
        $('.active').remove();
    });





});