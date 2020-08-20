// Basic type ********************************
let isDone: boolean = false;
console.log(isDone); // false
let decimal: number = 6;
console.log(decimal); // 6
let color: string = 'blue';
console.log(color); // blue
let list: number[] = [1, 2, 3];
console.log(list); // [1, 2, 3]
let list2: Array<number> = [1, 2, 3];
console.log(list2); // [1, 2, 3]
let x: [string, number];
x = ['hello', 55];
console.log(x); //[ 'hello', 55 ]
let notSure: any;
notSure = false;
console.log(notSure); // false

function warnUser(): void {
  console.log('This is my warning message void');
}

warnUser(); // This is my warning message void

let u: undefined = undefined;
console.log(u); // undefined
let n: null = null;
console.log(n); // null

/*function error(message: string): never { // ไม่มีการ return ที่แท้จริงออกจาก function
  throw new Error(message);
}*/

// Literal types ********************************
let trafficLight: 'Red' | 'Grean' | 'Yellow';
trafficLight = 'Grean';

// Enum ********************************
enum Color {
  RED,
  GREEN,
  BLUE,
}

let r: Color = Color.RED;
let g: Color = Color.GREEN;
let b: Color = Color.BLUE;
console.log(r); // 0
console.log(g); // 1
console.log(b); // 2

// Type Assertion ********************************
let someValue: any = 'This is a string';
let strLength: number = (<string>someValue).length;
console.log(strLength); // 16

// Interface ********************************
interface Rectangle {
  width: number;
  height: number;
}

function getArea(rec: Rectangle): number {
  return rec.width * rec.height;
}

console.log(getArea({width: 3, height: 4})); // 12

interface Point2D {
  x: number;
  y: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
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
  showPopup?: boolean;
  showNotification?: boolean;
  showMessage?: boolean;
}

const UI = {
  state: <State>{
    showPopup: false,
    showNotification: false,
    showMessage: false,
  },
  setState(state: State) {
    (<any>Object).assign(this.state, state);
  },
  printState() {
    console.log(this.state);
  },
};
UI.setState({showMessage: true});
UI.printState(); //{ showPopup: false, showNotification: false, showMessage: true }

// Type fressness ********************************
function display(person: { name: string }) {
  console.log(person.name);
}

const somchai = {name: 'Somchai'};
const somsri = {name: 'Somsri', age: 28};
display(somchai); // Somchai
display(somsri); // Somsri

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
  name: string;

  getArea(): number;
}

interface Logger2 {
  name: string;

  log(): void;
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

console.log(slugify('Freedom Seven')); // freedom-seven
console.log(slugify(['Hello', 'World'])); // hello-world

// Discriminated unions ********************************
interface Square {
  kind: 'square';
  size: number;
}

interface Rectangle2 {
  kind: 'rectangle';
  width: number;
  height: number;
}

type Shape3 = Square | Rectangle2;

function area(shape: Shape3): number {
  return shape.kind === 'square'
    ? Math.pow(shape.size, 2)
    : shape.width * shape.height;
}

const areaSquare: Shape3 = {
  kind: 'square',
  size: 20,
};
console.log(area(areaSquare)); // 400
const areaRectangle2: Shape3 = {
  kind: 'rectangle',
  width: 2,
  height: 4,
};
console.log(area(areaRectangle2)); // 8

// Index signatures ********************************
interface Point {
  [key: string]: number;
}

const point1: Point = {x: 2, y: 5};
const point2: Point = {x: 2, y: 5, z: 8};
console.log(point1); // { x: 2, y: 5 }
console.log(point2); // {x: 2, y: 5, z: 8}

// Parameter properties ********************************
class ParameterProperties {
  // public
  // protected
  // private
  // readonly
  readonly readonlyCanChangeInConstructorOnly: string;

  constructor(
    readonly name: string,
    readonlyCanChangeInConstructorOnly: string
  ) {
    this.readonlyCanChangeInConstructorOnly = readonlyCanChangeInConstructorOnly;
    console.log(name);
  }
}

const p = new ParameterProperties(
  'ParameterProperties',
  'Readonly ParameterProperties'
);
console.log(p); // ParameterProperties
// ParameterProperties {
//   name: 'ParameterProperties',
//   readonlyCanChangeInConstructorOnly: 'Readonly ParameterProperties'
// }

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

const freedomStudent = new Student('Freedom Seven');
console.log(freedomStudent.firstName); // Freedom
console.log(freedomStudent.lastName); // Seven
console.log(freedomStudent.fullname); // Freedom Seven

// Inheritance ********************************
class Human {
  constructor(protected name: string) {
  }

  printName() {
    console.log(this.name);
  }
}

class Woman extends Human {
  pregnant() {
    console.log(`${this.name} is pregnant`);
  }
}

const somsriWoman = new Woman('Somsri');
somsriWoman.printName(); // Somsri
somsriWoman.pregnant(); // Pregnant

// Static properties ********************************
class StaticCircle {
  static PI = Math.PI;

  constructor(private radius: number) {
  }

  get area(): number {
    return StaticCircle.PI * Math.pow(this.radius, 2);
  }
}

const c1 = new StaticCircle(5);
const c2 = new StaticCircle(10);
console.log(c1.area); // 78.53
console.log(c2.area); // 314.15

// Abstract classes ********************************
abstract class AbstractShape {
  constructor(protected width: number, protected height: number) {
  }

  public abstract getArea(): number;
}

class Rectangle4 extends AbstractShape {
  getArea(): number {
    return this.width * this.height;
  }
}

class Triangle extends AbstractShape {
  getArea(): number {
    return (this.width * this.height) / 2;
  }
}

const abstractRectangle = new Rectangle4(2, 4);
const abstractTriangle = new Triangle(2, 4);
console.log(abstractRectangle.getArea()); // 8
console.log(abstractTriangle.getArea()); // 4

// Generic type ********************************
class Stack<T> {
  private data: T[] = [];

  push = (item: T): number => this.data.push(item);
  prop = (): T => this.data.pop();

  print(): void {
    console.log(this.data);
  }
}

// -------------------
const stack: Stack<string> = new Stack<string>();
stack.push('a');
stack.push('b');
stack.push('c');
stack.prop();
stack.print(); // [ 'a', 'b' ]

function reverse<T>(items: T[], result: T[] = []): T[] {
  const [firstItem, ...restItems] = items;
  console.log(`firstItem = ${firstItem}`);
  console.log(`restItems = ${restItems}`);
  console.log(`result = ${result}`);
  return items.length <= 0
    ? result
    : reverse(restItems, [firstItem, ...result]);
}

console.log(reverse([1, 2, 3, 4])); // [ 4, 3, 2, 1 ]

// -------------------
class Utility {
  static reverse<T>(items: T[], result: T[] = []): T[] {
    const [firstItem, ...restItems] = items;
    return items.length <= 0
      ? result
      : Utility.reverse(restItems, [firstItem, ...result]);
  }
}

console.log(Utility.reverse([1, 2, 3, 4])); // [ 4, 3, 2, 1 ]


// Data descriptor ********************************
const circleData: any = {};
Object.defineProperty(circleData, 'PI', {
  value: 3.14
});
console.log(circleData.PI); // 3.14


// Accessor descriptor ********************************
const circleAccessor: any = {_radius: 10};
Object.defineProperty(circleAccessor, 'radius', {
  get(): number {
    return this._radius;
  },
  set(radius: any): void {
    if (radius >= 0) {
      this._radius = radius;
    }
  }
});
circleAccessor.radius = 9;
console.log(circleAccessor.radius); // 9


// Class decorators ********************************
function logMethods(constructor: Function) {
  console.log(Object.keys(constructor.prototype));
}

@logMethods
class God {
  createTheWorld() {
    console.log('Create the world');
  };

  nap() {
    console.log('Nap');
  };
}

const god = new God(); // [ 'createTheWorld', 'nap' ]
god.createTheWorld(); //Create the world
god.nap(); // Nap
// -------------------
function logMethods2(startWidth: string) {
  return (construct: Function) => {
    console.log(
      Object.keys(construct.prototype)
        .filter(method => method.startsWith(startWidth)));
  }
}

@logMethods2('create')
class God2 {
  createTheWorld() {
    console.log('God2 create the world');
  }

  createHumans() {
    console.log('God2 create humans');
  }

  nap() {
    console.log('God2 nap');
  }
}
const god2 = new God2(); // [ 'createTheWorld', 'createHumans' ]
god2.createTheWorld(); // God2 create the world
god2.createHumans(); // God2 create humans
god2.nap(); // God2 nap


// Property decorators ********************************
function validate(regex: RegExp) {
  return (target: any, key: string) => {
    let _value: any = this[key];
    Object.defineProperty(target, key, {
      set(value: any): void {
        if (regex.test(value)) {
          _value = value;
        } else {
          throw new Error('Invalid Value');
        }
      },
      get(): any {
        return _value;
      }
    })
  }
}
class PersonPropertyDecorators {
  @validate(/[a-zA-Z]+/)
  firstName: string;

  @validate(/[a-zA-Z]+/)
  lastName: string;
}
const personP = new PersonPropertyDecorators();
personP.firstName = 'aa';
console.log(personP.firstName); // aa


// Use for third party ********************************
// https://github.com/DefinitelyTyped/DefinitelyTyped




