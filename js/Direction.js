
export default class Direction {
    constructor(direction) {
        this.direction = 'right';

        document.addEventListener('keydown',  (event)=> {
            if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.code)) {
                event.preventDefault();
                if (event.code === 'ArrowUp' && direction !== 'down') {
                   this.direction = 'up';
                } else if (event.code === 'ArrowDown' && direction !== 'up') {
                    this.direction = 'down';
                } else if (event.code === 'ArrowRight' && direction !== 'left') {
                    this.direction = 'right';
                } else if (event.code === 'ArrowLeft' && direction !== 'right') {
                    this.direction = 'left';
                }
            }
        })

    }
}


    // document.addEventListener('keydown', function (event) {
    //     if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.code)) {
    //
    //         event.preventDefault();
    //
    //         if (event.code === 'ArrowUp' && direction !== 'down') {
    //             direction = 'up';
    //         } else if (event.code === 'ArrowDown' && direction !== 'up') {
    //             direction = 'down';
    //         } else if (event.code === 'ArrowRight' && direction !== 'left') {
    //             direction = 'right';
    //         } else if (event.code === 'ArrowLeft' && direction !== 'right') {
    //             direction = 'left';
    //         }
    //     }
    // })




// document.addEventListener('keydown', function (event) {
//     if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.code)) {
//
//         event.preventDefault();
//
//         if (event.code === 'ArrowUp' && direction !== 'down') {
//             direction = 'up';
//         } else if (event.code === 'ArrowDown' && direction !== 'up') {
//             direction = 'down';
//         } else if (event.code === 'ArrowRight' && direction !== 'left') {
//             direction = 'right';
//         } else if (event.code === 'ArrowLeft' && direction !== 'right') {
//             direction = 'left';
//         }
//     }
// });
