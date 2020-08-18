// Basic type ********************************
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

// Literal types ********************************
let trafficLight: 'Red' | 'Grean' | 'Yellow';
trafficLight = "Grean";

// Enum ********************************
enum Color {
  RED,
  GREEN,
  BLUE
}

let c: Color = Color.GREEN

// Type Assertion ********************************
let someValue: any = 'This is a string';
let strLength: number = (<string>someValue).length;
console.log(strLength); // 16

// Interface ********************************
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

// Optional properties ********************************
interface State {
  showPopup?: boolean,
  showNotification?: boolean,
  showMessage?: boolean
}

const UI = {
  state: <State>{
    showPopup: false,
    showNotification: false,
    showMessage: false
  },
  setState(state: State) {
    Object.assign(this.state, state);
  },
  printState() {
    console.log(this.state);
  }
}
UI.setState({showMessage: true});
UI.printState(); //{ showPopup: false, showNotification: false, showMessage: true }

// Type fressness ********************************
function display(person: { name: string }) {
  console.log(person.name);
}

const somchai = {name: 'Somchai'};
const somsri = {name: 'Somsri', age: 28};
display(somchai); // Somchai
display(somsri);  // Somsri

display({name: 'Somchai type fressness'});
//display({name: 'Somsri type fressness', age: 28}) ไม่สามารถใส่ age เข้าไปได้ ต้องประกาศเป็นตัวแปร object ก่อนถึงจะสามารถส่งไปได้

// Intersection type ********************************
interface Shape {
  getArea(): number;
}

interface Logger {
  log(): void;
}

class Circle implements Shape, Logger {
  constructor(private radius: number) {
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  log(): void {
    console.log('Circle!');
  }
}

const circleClass: Shape & Logger = new Circle(10);
console.log(circleClass.getArea()); // 314.159

// Union type ********************************
interface Shape2 {
  name: string,

  getArea(): number
}

interface Logger2 {
  name: string,

  log(): void
}

class Circle2 implements Shape2, Logger2 {

  constructor(private radius: number) {
  }

  name: string = 'Circle2';

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  log(): void {
    console.log(this.name);
  }
}

const circle2Class: Shape2 | Logger2 = new Circle2(10);
console.log(circle2Class.name); // Circle2
//circle2Class.getArea(); ไม่สามารถเรียก getArea() ได้เพราะว่า getArea มีใน Shape2 แต่ไม่มีใน Logger2 ต้องมีทั้งสอง interface ถึงจะเรียกใช้งาน function ได้

// Type guards ********************************
function slugify(text: string | string[]): string {
  let result: string;
  if (typeof text === 'string') {
    result = text;
  } else {
    result = text.join(' ');
  }
  return result.toLowerCase().replace(/ /g, '-');
}

console.log(slugify('Freedom Seven'));  // freedom-seven
console.log(slugify(['Hello', 'World'])); // hello-world

// Discriminated unions ********************************
interface Square {
  kind: 'square',
  size: number
}

interface Rectangle2 {
  kind: 'rectangle',
  width: number,
  height: number
}

type Shape3 = Square | Rectangle2;

function area(shape: Shape3): number {
  return shape.kind === 'square' ?
    Math.pow(shape.size, 2) : shape.width * shape.height
}

const areaSquare: Shape3 = {
  kind: 'square',
  size: 20
};
console.log(area(areaSquare)) // 400
const areaRegtangle2: Shape3 = {
  kind: 'rectangle',
  width: 2,
  height: 4
};
console.log(area(areaRegtangle2)); // 8

// Index signatures ********************************
interface Point {
  [key: string]: number
}

const point1: Point = {x: 2, y: 5};
const point2: Point = {x: 2, y: 5, z: 8};


// Parameter properties ********************************
class ParameterProperties {
  // public
  // private
  // readonly
  readonly readonlyCanChangeInConstructorOnly: string;

  constructor(readonly name: string, readonlyCanChangeInConstructorOnly: string) {
    this.readonlyCanChangeInConstructorOnly = readonlyCanChangeInConstructorOnly;
  }
}

// Accessors ********************************
class Student {
  private _firstName: string;
  private _lastName: string;

  constructor(fullname: string) {
    this.fullname = fullname;
  }

  set fullname(fullname: string) {
    [this._firstName, this._lastName] = fullname.split(' ');
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
const freedomStudent = new Student('Freedom Seven')
console.log(freedomStudent.firstName); // Freedom
console.log(freedomStudent.lastName); // Seven


// Inheritance ********************************
class Human {
  constructor(private name: string) {
  }

  printName() {
    console.log(this.name);
  }
}
class Woman extends Human {
  pregnant() {
    console.log('Pregnant')
  }
}
const somsriWoman = new Woman('Somsri');
somsriWoman.printName(); // Somsri
somsriWoman.pregnant(); // Pregnant

