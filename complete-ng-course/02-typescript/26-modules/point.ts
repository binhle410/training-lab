export class Point{
    constructor(private x?: number, private y?: number) {
    }
    draw = () => {
        console.log('. drawing ... ' + this.x + ' ' + this.y);
    };
}
