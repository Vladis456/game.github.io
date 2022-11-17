let isClick = true;
const price = document.querySelectorAll(".price")
const button = document.querySelector(".gameStart")
const endButton = document.querySelector(".gameEnd")
const count = document.querySelector(".count")
let num = 0
let time = document.querySelector(".time")
let timer;

let gameTime = 60;

const getRandomElement = () => {
    const item = price[Math.floor(Math.random()*price.length)];
    return item;
};

button.addEventListener("click", ()=> {
    countdown() 
});



const countdown = () => {
    
    time.innerHTML = "ОСТАЛОСЬ ВРЕМЕНИ: " + gameTime;
    gameTime--;
    let i = getRandomElement();
    i.classList.add("anim");
    setTimeout(() => i.classList.remove("anim"), Math.floor(Math.random() * 1500));
    if (gameTime < 0) {
        
        gameTime = 60;
        clearTimeout(timer)
        alert("gg")
    }
    else {
        timer = setTimeout(countdown, 1000)
    }
}
const resetClick = () => {
    setTimeout(() => {
        isClick = true
        console.log(isClick)
    }, 500)
}

price.forEach(item => {
    item.addEventListener("click", ()=> {
        if (isClick) {
            count.innerHTML = "ОЧКИ: " + num
            item.classList.remove("anim")
            num++;
            console.log(num)
            isClick = false;
            console.log(isClick)
            resetClick()
        }
    })
});

endButton.addEventListener("click", ()=> {
    gameTime = 60;
    clearTimeout(timer)
    alert("gg")
})









