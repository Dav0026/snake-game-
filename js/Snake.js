// export default class Snake {
//     constructor() {
//         this.snake = [
//             {
//                 x: 5,
//                 y: 3
//             },
//         ]
//     }
//     moveRight(removeEnd=true){
//         this.snake.push({x: this.snake[this.snake.length - 1].x + 1, y: this.snake[this.snake.length - 1].y});
//
//         if(removeEnd) {
//            this.removeLastElement();
//        }
//     }
//     moveLeft(removeEnd=true){
//         this.snake.push({x: this.snake[this.snake.length - 1].x - 1, y: this.snake[this.snake.length - 1].y});
//
//         if(removeEnd) {
//            this.removeLastElement();
//        }
//     }
//     moveUp(removeEnd=true){
//         this.snake.push({x: this.snake[this.snake.length - 1].x, y: this.snake[this.snake.length - 1].y - 1});
//
//         if(removeEnd) {
//            this.removeLastElement();
//        }
//     }
//     moveDown(removeEnd=true){
//         this.snake.push({x: this.snake[this.snake.length - 1].x, y: this.snake[this.snake.length - 1].y + 1});
//
//         if(removeEnd) {
//            this.removeLastElement();
//        }
//     }
//
//     removeLastElement(){
//         this.snake.shift()
//     }
//
// }