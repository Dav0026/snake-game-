// import Game from "./Game.js";
// import View from "./View.js";
// import GetCoordinates from "./GenerateCoordinates.js";
// let game = new Game();
import Direction from "./Direction.js";
import SnakeTest from "./SnakeTest.js";



class Score {
    #score;

    constructor(score) {
        this.#score = score;
    }

    setScore(score) {
        this.#score = score;
    }

    getScore() {
        return this.#score;
    }
}

class Snake {
    static foodClassName = 'bg-food';
}


let foodCount = 0;
let intervalId;
let intervalTime = 200;
let food = [{}];
let barriers = generateBorderBarriers(35, 11);
let bonusFood = {};
/**init snake
 * @type {[{x: number, y: number},{x: number, y: number}]}
 */


let snake = [
    {
        x: 11,
        y: 3,
    },
    {
        x: 12,
        y: 3,
    },
    {
        x: 13,
        y: 3,
    }
];

/**game start button
 *
 */
document.querySelector('.game-button').onclick = function () {
    gameStartFunc();
}

/**
 * init game start
 */
function gameStartFunc() {
    // game.start();
    // console.log(5555);
    intervalId = setInterval(gameRun, intervalTime);
}


/**
 * init gamePause
 */
function pauseFunc() {
    if (intervalId) {
        clearInterval(intervalId)
        intervalId = undefined
    }
}

document.addEventListener('keyup', function (event) {
    if (event.code === 'Space') {
        event.preventDefault();
        if (intervalId) {
            pauseFunc();
        } else {
            gameStartFunc();
        }
    }
});


document.querySelector('.block-two').onclick = function () {
    gameStartFunc2();
}

function gameStartFunc2() {
    intervalTime = 150;
    pauseFunc();
    gameStartFunc();

}


/**initialize game Matrix
 */

function init() {
    let divMain = document.getElementById('main');
    for (let y = 0; y <= 11; y++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let x = 0; x <= 35; x++) {
            let newDiv = document.createElement("div");
            let id = getId(x, y);
            newDiv.classList.add('matrix');
            newDiv.setAttribute('id', id)
            row.append(newDiv);
        }
        divMain.append(row)
    }
}


/**init matrix barriers
 * @type {[{x: number, y: number},{x: number, y: number}]}
 */
function generateBorderBarriers(xLenght, yLenght) {
    let barriers = []
    for (let j = 0; j <= yLenght; j++) {
        barriers.push({x: xLenght, y: j})
        barriers.push({x: 0, y: j})
    }
    for (let i = 0; i <= xLenght; i++) {
        barriers.push({x: i, y: 0})
        barriers.push({x: i, y: yLenght})
    }
    return barriers;

}

function initBarrier() {
    for (let barrier of barriers) {
        document.getElementById(barrier.x + '-' + barrier.y).classList.add('the-Wall')

    }
}

function getId(x, y) {
    return x + '-' + y;
}

/**
 * init snake run direction
 */
let direction = 'right';

document.addEventListener('keydown', function (event) {
    if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.code)) {

        event.preventDefault();

        if (event.code === 'ArrowUp' && direction !== 'down') {
            direction = 'up';
        } else if (event.code === 'ArrowDown' && direction !== 'up') {
            direction = 'down';
        } else if (event.code === 'ArrowRight' && direction !== 'left') {
            direction = 'right';
        } else if (event.code === 'ArrowLeft' && direction !== 'right') {
            direction = 'left';
        }
    }
});

/**
 * init snake
 * @param x
 * @param y
 * @param bgBlack
 */

function setBgBlackClass(x, y, bgBlack = true) {
    let div = document.getElementById(getId(x, y));
    if (bgBlack) {
        div.classList.add('bg-black');
    } else {
        div.classList.remove('bg-black');
    }
}


function throughTheWall() {
    if (isBarrierMet()) {
        let snakeHead = snake[snake.length - 1]
        if (snakeHead.x === 0) {
            snakeHead.x = 34;
        } else if (snakeHead.x === 35) {
            snakeHead.x = 1;
        } else if (snakeHead.y === 0) {
            snakeHead.y = 10;
        } else if (snakeHead.y === 11) {
            snakeHead.y = 1
        }
    }
}

/**
 * init snake run
 */
function gameRun() {

    if (direction === "right") {
        snake.push({x: snake[snake.length - 1].x + 1, y: snake[snake.length - 1].y});
    } else if (direction === 'down') {
        snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y + 1});
    } else if (direction === 'up') {
        snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y - 1});
    } else if (direction === 'left') {
        snake.push({x: snake[snake.length - 1].x - 1, y: snake[snake.length - 1].y});
    }
    for (let i = 0; i < snake.length; i++) {
        setBgBlackClass(snake[i].x, snake[i].y, true);
    }
    if (!isSnakeFoodMeet()) {
        let end = snake.shift();
        setBgBlackClass(end.x, end.y, false)
    } else {
        eatFood(food);
        generateFood();
    }
    if (isSnakeBonFoodMeet()) {
        scoreTablo(5);
        bonusFood = {};
    }
    if (snakeBody()) {
        gameOver();
        highScoreTablo();
    }
    throughTheWall()
    if (isBarrierMet() || snakeBody()) {
        gameOver();
        highScoreTablo();
    }
if (!throughTheWall() && isBarrierMet()){
    gameOver();
    highScoreTablo();
 }
 }

/**
 * score tablo
 */
let scoreElement = document.getElementById('score');
scoreElement.style.border = '1px solid black';
scoreElement.innerHTML = '0';
let score = new Score(0);

function scoreTablo(value = 1) {
    let scoreValue = score.getScore() + value;

    score.setScore(scoreValue);
    scoreElement.innerHTML = scoreValue;
    if (foodCount % 10 === 0) {
        setTimeout(generateBonusFood, 100);
        setTimeout(removeBonFood, 9000);
        console.log('bonus food generated', 'next level')
        intervalTime = intervalTime - 10;
        pauseFunc();
        gameStartFunc();

    }
    if (intervalTime === 80) {
        intervalTime = 80;

        console.log('snake speed=80')
        pauseFunc()
        gameStartFunc()
    }
}


/**
 * high score tablo
 */
let highScore = document.getElementById('high-score');
highScore.style.border = '1px solid black';

function highScoreTablo() {
    let scoreValue = score.getScore();
    let highScore = localStorage.getItem('high-score');

    if (!highScore || !(Number(highScore) >= 0)) {
        highScore = 0
        localStorage.setItem('high-score', String(highScore));
    }
    if (scoreValue > highScore) {
        localStorage.setItem('high-score', scoreValue)
    }
    document.getElementById('high-score').innerHTML = highScore;
}


/**
 * init snake body
 */
function snakeBody() {
    let snakeHead = snake[snake.length - 1];
    for (let i = 0; i < snake.length - 1; i++) {
        if (snakeHead.x === snake[i].x && snakeHead.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

/** barrierMeet
 * @return {boolean}
 */

function isBarrierMet() {
    const snakeHead = snake[snake.length - 1]; //{x,y }
    for (let barrier of barriers) {
        if (snakeHead.x === barrier.x && snakeHead.y === barrier.y) {
            return true;
        }
    }
    return false;
}

/**
 * init snake grow
 */
function isSnakeFoodMeet() {
    let snakeHed = snake[snake.length - 1];
    return snakeHed.x === food.x && snakeHed.y === food.y;
}

function isSnakeBonFoodMeet() {
    let snakeHed = snake[snake.length - 1];
    return snakeHed.x === bonusFood.x && snakeHed.y === bonusFood.y
}

function eatFood(foodCoordinates) {
    scoreTablo();
    removeClassFromInterface(foodCoordinates.x, foodCoordinates.y, Snake.foodClassName);
    food = {};
}

/**
 * generate food
 * @param min
 * @param max
 * @return {number}
 */
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



function generateRandomCoordinates() {
    let newCoordinates;
    while (!newCoordinates) {
        let y = getRandomArbitrary(1, 10);
        let x = getRandomArbitrary(1, 34);
        let badCoordinates = false;
        for (let i = 0; i < snake.length - 1; i++) {
            if (snake[i].x === x && snake[i].y === y) {
                badCoordinates = true;
                break;
            }
        }
        if (!badCoordinates) {
            newCoordinates = {
                x: x,
                y: y,
            }
        }
    }

    return newCoordinates;
}

function generateFood() {
    foodCount++
    let newFood = generateRandomCoordinates();
    food.x = newFood.x;
    food.y = newFood.y;
    addClassToInterface(food.x, food.y, 'bg-food');
}


function generateBonusFood() {
    let newBonFood = generateRandomCoordinates()
    bonusFood.x = newBonFood.x;
    bonusFood.y = newBonFood.y;
    addClassToInterface(bonusFood.x, bonusFood.y, 'bg-black')
}

function removeBonFood() {
    if (bonusFood && bonusFood.x && bonusFood.y) {
        removeClassFromInterface(bonusFood.x, bonusFood.y, 'bg-black')
        bonusFood = {};
    }
}

function removeClassFromInterface(x, y, className) {
    let foodElem = document.getElementById(getId(x, y));
    foodElem.classList.remove(className);
}

function addClassToInterface(x, y, className) {
    let foodElem = document.getElementById(getId(x, y));
    foodElem.classList.add(className);
}

/**is
 * game over
 */
function gameOver() {
    // game.stop();
    pauseFunc();
    alert('GAME OVER');
    location.reload();
}


init();
initBarrier();
generateFood();
highScoreTablo();