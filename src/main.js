let body = document.getElementsByTagName('body')[0];
let main = document.getElementsByTagName('main')[0];
let alternate = true;
function alternateBool (body) {
    if (alternate) {
        alternate = !alternate;
        main.style.color = '#DCE4F2';
        return body.style.backgroundImage = 'url("./src/img/linux_black.jpg")';
    } else {
        alternate = !alternate;
        main.style.color = 'black';
        return body.style.backgroundImage = 'url("./src/img/linux.jpg")';
    }
}
document.getElementById('team').addEventListener('click', () => {
    alternateBool (body);
})