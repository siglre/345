function openOverlay(message) {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block'; // Показываем оверлей
    var messageContainer = document.getElementById('message');
    messageContainer.textContent = message; // Вставляем сообщение в контейнер
}

function closeOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; // Скрываем оверлей
}

document.querySelector('.button').addEventListener('click', function () {
    var username = document.getElementById('username').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;

    if (username && age && email.includes('@')) {
        var message = `Регистрация успешна:\nИмя: ${username}\nВозраст: ${age}\nE-mail: ${email}`;
        openOverlay(message);
    } else {
        alert('Пожалуйста, введите корректные данные.');
    }
});