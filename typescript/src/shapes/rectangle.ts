// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }

// function newRectangle(width: number, height: number): Rectangle {
//     return {
//         width,
//         height,

//         computeArea: function (): number {
//             return width * height
//         }
//     }
// }

// export { Rectangle, newRectangle }

// function newRectangle(width: number, height: number): Shape {
//     return {
//         // width,
//         // height,

//         computeArea: function (): number {
//             return width * height
//         }
//     }
// }

// export { newRectangle }

// interface Rectangle extends Shape {
//     width: number,
//     height: number,
// }

function newRectangle(width: number, height: number): Shape {
    return {
        // width,
        // height,

        computeArea: function (): number {
            return width * height
        }
    }
}

export { newRectangle }
