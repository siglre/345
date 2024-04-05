// Получаем ссылки на изображения
const vkImage = document.getElementById('vk');
const instagramImage = document.getElementById('instagram');
const telegramImage = document.getElementById('telegram');

// Сохраняем ссылки на изображения другого цвета
const vkPinkImage = './img/icons/vk_pink.svg';
const instagramPinkImage = './img/icons/instagram_pink.svg';
const telegramPinkImage = './img/icons/telegram_pink.svg';

// Обработчики событий для наведения мыши
vkImage.addEventListener('mouseover', function() {
    vkImage.src = vkPinkImage;
});

vkImage.addEventListener('mouseout', function() {
    vkImage.src = './img/icons/vk.svg';
});

instagramImage.addEventListener('mouseover', function() {
    instagramImage.src = instagramPinkImage;
});

instagramImage.addEventListener('mouseout', function() {
    instagramImage.src = './img/icons/instagram.svg';
});

telegramImage.addEventListener('mouseover', function() {
    telegramImage.src = telegramPinkImage;
});

telegramImage.addEventListener('mouseout', function() {
    telegramImage.src = './img/icons/telegram.svg';
});