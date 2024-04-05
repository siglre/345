function openOverlay(message) {
    document.getElementById('message').innerText = message;
    document.getElementById('overlay').style.display = 'block';
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}