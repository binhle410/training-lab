let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red = '#FF0000', Green = 'Green', Blue = 3};

let backgroundColor = Color.Red;

console.log('bgColor '+backgroundColor, 'Color.Green '+Color.Green);