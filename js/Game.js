// import Snake from "./Snake.js";
// import View from "./View.js";
// import GetCoordinates from "./GenerateCoordinates.js";
// export default class Game {
//     food;
//     constructor(intervalId) {
//         this.getCoordinates = new GetCoordinates()
//         this.view = new View();
//         this.intervalId = undefined;
//         this.intervalTime = 200;
//         this.direction = 'left';
//         this.snake = new Snake();
//         this.score = 0;
//     }
//     isSnakeFoodMeet() {
//         let snakeHed = this.snake[0];
//         return snakeHed.x === food.x && snakeHed.y === food.y;
//     }
//
//
//     start() {
//         console.log("started");
//
//         this.intervalId = setInterval(this.gameRun, this.intervalTime);
//         console.log(this.intervalId);
//    }
//     stop() {
//         console.log("stopped", "intervalId=" + this.intervalId)
//         this.intervalId = undefined;
//     }
//     pauseFunc() {
//
//     }
//     addScore(count){
//        this.score+=count ;
//        this.view.updateScore(this.score)
//     }
//     gameRun() {
//         if (isSnakeFoodMeet) {
//             this.addScore()
//         }
//
//         switch (this.direction) {
//             case 'right':
//                 this.snake.moveRight(!isSnakeFoodMeet());
//                 break;
//             case 'left':
//                 this.snake.moveLeft(!isSnakeFoodMeet())
//                 break;
//             case 'up':
//                 this.snake.moveUp(!isSnakeFoodMeet())
//                 break
//             case 'down':
//                 this.snake.moveDown(!isSnakeFoodMeet())
//                 break
//             default:
//                 throw Error('unknown direction')
//         }
//     }
// }
        ///////////////////////////////////////////////

        // function isSnakeFoodMeet() {
        //     let snakeHed = snake[snake.length - 1];
        //     return snakeHed.x === food.x && snakeHed.y === food.y;
        // }

        // function isSnakeBonFoodMeet() {
        //     let snakeHed = snake[snake.length - 1];
        //     return snakeHed.x === bonusFood.x && snakeHed.y === bonusFood.y
        // }




        // for (let i = 0; i < snake.length; i++) {
        //     setBgBlackClass(snake[i].x, snake[i].y, true);
        // }
        // if (!isSnakeFoodMeet()) {
        //     let end = snake.shift();
        //     setBgBlackClass(end.x, end.y, false)
        // } else {
        //     eatFood(food);
        //     generateFood();
        // }
        // if (isSnakeBonFoodMeet()) {
        //     scoreTablo(5);
        //     bonusFood = {};
        // }
        // if (snakeBody()) {
        //     gameOver();
        //     highScoreTablo();
        // }
        // throughTheWall()
        // if (isBarrierMet() || snakeBody()) {
        //     gameOver();
        //     highScoreTablo();
        // }
// if (!throughTheWall() && isBarrierMet()){
//     gameOver();
//     highScoreTablo();
// }
//     }

// }
