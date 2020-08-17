// Basic type
let isDone: boolean = false;
let decimal: number = 6;
let color: string = 'blue';
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let x: [string, number];
x = ["hello", 55];
let notSure: any = 5;
notSure = "meybe a string instead";
notSure = false;

function warnUser(): void {
  console.log('This is my warning message')
}

let u: undefined = undefined
let n: null = null;

function error(message: string): never { // ไม่มีการ return ที่แท้จริงออกจาก function
  throw new Error(message);
}

// Literal types
let trafficLight: 'Red' | 'Grean' | 'Yellow';
trafficLight = "Grean";

// Enum
enum Color {
  RED,
  GREEN,
  BLUE
}

let c: Color = Color.GREEN

// Type Assertion
let someValue: any = 'This is a string';
let strLength: number = (<string>someValue).length;
console.log(strLength); // 16

// Interface
interface Rectangle {
  width: number,
  height: number
}

function getArea(rec: Rectangle): number {
  return rec.width * rec.height;
}

console.log(getArea({width: 3, height: 4})); // 12

interface Point2D {
  x: number,
  y: number
}

interface Point3D {
  x: number,
  y: number,
  z: number
}

function find2DDistance(point1: Point2D, point2: Point2D): number {
  return Math.sqrt(
    Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
  );
}
const point12D: Point2D = {x: 2, y: 4};
const point22D: Point2D = {x: 4, y: 8};
const point13D: Point3D = {x: 2, y: 4, z: 6};
const point23D: Point3D = {x: 4, y: 6, z: 10};
console.log(find2DDistance(point12D, point22D)); // 4.47  สามารถใส่ 3D เข้าไปก็ได้
console.log(find2DDistance(point13D, point23D)); // 2.82
