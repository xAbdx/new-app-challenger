function changeMainColor() {
    let mainColor = document.getElementById('MainColor').value;
    document.getElementById('main').style.setProperty('--main-color', mainColor);
}

function changeSubColor() {
    let subColor = document.getElementById('subColor').value;
    document.getElementById('main').style.setProperty('--sub-main', subColor);
}

let root = document.querySelector('.reset');
root.addEventListener('click', reset);

function reset() {
    document.getElementById('main').style.removeProperty('--main-color');
    document.getElementById('main').style.removeProperty('--sub-main');
}