//change the picture
let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '/images/baozimao.jpg'){
        myImage.setAttribute('src','/images/zhuzhu.jpg');
    }else{
        myImage.setAttribute('src','/images/baozimao.jpg');
    }
}


//获取用户名并表示欢迎！
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的用户名~');
    localStorage.setItem('name',myName);
    myHeading.textContent = '[openthecicle] , ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '[openthecicle] , ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}