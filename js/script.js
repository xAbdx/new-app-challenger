function changeMainColor() {
    let mainColor = document.getElementById('MainColor').value;
    // alert('aasds');
    document.getElementById('main').style.background = mainColor;
}

function changeSubColor() {
    let subColor = document.getElementById('subColor').value;
    document.getElementById('main').style.backgroundColor = subColor;
}
