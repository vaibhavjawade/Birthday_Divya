
let arr = ["❤️❤️ Wish You A Very Happy Birthday Divya ❤️❤️",
 "When I saw you at the door for the first time, I felt like you are the person I've been looking for.", 
 "Even though we argue a lot, and I admit most of the time it's my fault, but having you in my life is what truly matters to me.",
  "Even if we disagree, I want you to know that I love you no matter what."

]
let ele = document.getElementById("textAdd")
let i = 0
function previous() {
    i--
    if (arr[i] !== undefined) {
        let num = Math.floor(Math.random() * 9) + 1;
        document.getElementsByClassName('body')[0].style.backgroundImage = `url(./asset/${num}.jpg)`;
        ele.className = 'move-up'
        ele.innerText = arr[i]
        setTimeout(() => {
            ele.className = ''
        }, 1000);
    } else {
        i++
    }
    navigator.vibrate(1000)
}

function next() {
    i++
    if (arr[i] !== undefined) {
        let num = Math.floor(Math.random() * 9) + 1;
        document.getElementsByClassName('body')[0].style.backgroundImage = `url(./asset/${num}.jpg)`;
        ele.className = 'move-down'
        ele.innerText = arr[i]
        setTimeout(() => {
            ele.className = ''
        }, 1000);
    } else {
        i--
    }
    navigator.vibrate(1000)
}

(() => {
    // let num = Math.floor(Math.random() * 9) + 1;
    document.getElementsByClassName('body')[0].style.backgroundImage = `url(./asset/${8}.jpg)`;
    ele.innerText = arr[i]
})()