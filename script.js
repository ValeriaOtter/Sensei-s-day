const startBtn = document.getElementById('startBtn');
const gameDiv = document.getElementById('game');
const kefirImg = document.getElementById('kefir');
const chaserImg = document.getElementById('chaser');
const text = document.getElementById('textOne');
const linkBtn = document.getElementById('linkBtn');
const heading = document.querySelector('h1'); 
const backgroundMusic = document.getElementById('backgroundMusic'); 
const timerMessage = document.getElementById('timerMessage'); 
const timerDiv = document.getElementById('timer');
const overlay = document.getElementById('overlay'); 

  


startBtn.addEventListener('click', startGame);


function startGame() {
    gameDiv.style.display = 'block';
    startBtn.style.display = 'none';
    heading.style.display = 'none'; 
    timerMessage.style.display = 'block'; 
    document.getElementById('cornerImage3').style.display = 'none';
    document.getElementById('cornerImage4').style.display = 'none';
    backgroundMusic.play(); 

    // Установим начальную позицию мальчика на курсор
    document.addEventListener('mousemove', positionChaser);  


    let timeLeft = 15; 
    timerDiv.textContent = `Осталось времени: ${timeLeft} секунд`;

    const countdown = setInterval(() => {
        timeLeft--;
        timerDiv.textContent = `Осталось времени: ${timeLeft} секунд`;
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            endGame();
        }
    }, 1000); 
    
}

function positionChaser(event) {
    // Перемещаем мальчика на позицию курсора
    chaserImg.style.left = (event.pageX - (chaserImg.width / 2)) + 'px';
    chaserImg.style.top = (event.pageY - (chaserImg.height / 2)) + 'px';

    moveKefir(event.pageX, event.pageY);
}

function moveKefir(targetX, targetY) {
    const kefirRect = kefirImg.getBoundingClientRect();
    const kefirX = targetX - 450; 
    const kefirY = targetY;

    // Центрируем кефир на новой позиции
    kefirImg.style.left = kefirX + 'px';
    kefirImg.style.top = kefirY + 'px';
}

// Завершение игры через 15 секунд
function endGame() {
    document.removeEventListener('mousemove', positionChaser);
    gameDiv.style.display = 'none';
    linkBtn.style.display = 'block';
    text.style.display = 'block';
    timerMessage.style.display = 'none'; 
    overlay.style.display = 'block'; 
}

// Переход на сайт при нажатии на кнопку
linkBtn.addEventListener('click', () => {
    window.location.href = 'https://leetcode.com/'; 
})