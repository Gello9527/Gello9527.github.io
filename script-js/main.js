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


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('please input your name~');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Open Cc -- ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Open Cc -- ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}