// by Александр Булгаков
var login = prompt('Кто пришёл?', '');
if (login == 'Админ') {

    var password = prompt('Пароль', '');

    if (password == 'Чёрный Властелин') {
    alert('Добро пожаловать');
    } else if (password == null) {
        alert('Вход отменен');
    } else {
        alert('Пароль неверен');
    }

}
else if (login == null) {
    alert('Вход отменен');
}
else {
    alert('Я вас не знаю' );
}