/*let isDone: boolean = true;
let decimal: number = 7;
let color: string = 'blue';
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let x: [string, number];
x = ['string', 7];
let notSure: any = 4;
notSure = 'notSure';

function warnUser(): void {
    alert('This is my warning message');
}
let u: undefined = undefined;
let n: null = null;
function error(message: string): never {
    throw new Error(message);
}

// Literal types
let l: 'Bar';
l = 'Bar';

// Enums
enum Color {Red, Green, Blue}
let c: Color = Color.GREEN;
//console.log(c); 1

// Type assertion
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

interface Rectangle {
    width: number;
    height: number;
}
function getArea(rec: Rectangle) {
    return rec.width * rec.height;
}
getArea({width: 3, height: 4});

interface Point2D {
    x: number;
    y: number;
}
interface Point3D {
    x: number;
    y: number;
    z: number;
}
function find2DDistance(point1: Point2D, point2: Point2D) {
    return Math.sqrt(
        Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
    );
}
const point12D: Point2D = {x: 0, y: 5};
const point22D: Point2D = {x: 10, y: 15};
const point13D: Point3D = {x: 0, y: 5, z: 7};
const point23D: Point3D = {x: 10, y: 15, z: 17};
//console.log(find2DDistance(point12D, point22D));
//console.log(find2DDistance(point13D, point23D));

interface State {
    showPopup?: boolean;
    showNotifications?: boolean;
    showMessage?: boolean;
}
const UI = {
    state: <State> {
        showPopup: false,
        showNotifications: false,
        showMessage: false
    },
    setState(state: State) {
        Object.assign(this.state, state);
    },
    printState() {
        console.log(this.state);
    }
};

UI.setState({showPopup: true});
//UI.printState(); { showPopup: true, showNotifications: false, showMessage: false }

function display(person: { name: string }) {
    console.log(person.name);
}
const somchai = {name: 'Somchai'};
const somsree = {name: 'Somsree', age: 27};
//display(somchai); Somchai
//display(somsree); Somsree
//display({name: 'Somchai'}); Somchai

interface Shape {
    name: string;
    getArea(): number;
}
interface Logger {
    name: string;
    log();
}
class Circle implements Shape, Logger {
    name: string = 'Circle';

    constructor(private radius: number) {
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    log() {
        console.log('Circle!');
    }
}
const circle: Shape & Logger = new Circle(5);
const circle2: Shape | Logger = new Circle(5);
circle2.name; // เรียกได้เฉพาะ name เท่านั้นเพราะว่ามีทั้งคู่ getArea จะใช้ไม่ได้เพราะว่ามีเฉพาะใน Shape เท่านั้น
//console.log(circle.getArea()); 78.53981633974483

function slugify(text: string | string[]): string {
    let result: string;
    if (typeof text === 'string') {
        result = text;
    } else {
        result = text.join(' ');
    }
    return result.toLowerCase().replace(/ /g, '-');
}
//console.log(slugify('Hello World')); hello-world
//console.log(slugify(['Hello', 'World'])); hello-world

interface Square {
    kind: 'square';
    size: number;
}
interface Rectangle2 {
    kind: 'rectangle';
    width: number;
    height: number;
}
type Shape2 = Square | Rectangle2;
function area(shape: Shape2): number {
    return shape.kind === 'square'
        ? Math.pow(shape.size, 2)
        : shape.width * shape.height;
}

interface Point2 {
    [string: number]: number;
}
// same
interface Point3 {
    x: number;
    y: number;
    z: number;
}

// Exercise
function handler(event: Event) {
    let mouseEvent = event as MouseEvent;
}
interface Human {
    name: string;
    age: number;
    children: Human[];
}

class Animal {
    constructor(public name: string) {

    }
}
const dog = new Animal('Fanta');
//console.log(dog.name); Fanta

class Human2 {
    private _firstname: string;
    private _lastname: string;

    constructor(fullname: string) {
        this.fullname = fullname;
    }

    get firstname(): string {
        return this._firstname;
    }

    get lastname(): string {
        return this._lastname;
    }

    set fullname(fullname: string) {
        [this._firstname, this._lastname] = fullname.split(' ');
    }

    get fullname(): string {
        return `${this._firstname} ${this._lastname}`;
    }

}
const freedom = new Human2('Freedom Seven');
//console.log(freedom.firstname); Freedom

class Human3 {
    constructor(public name: string) {
    }

    printName() {
        console.log(this.name);
    }
}
class Woman extends Human3 {
    pregnant() {
        console.log("I'm pregnant!");
    }
}
const eiei = new Woman('Eiei');
//eiei.printName();
//eiei.pregnant();

class Circle2 {
    static PI: number = 3.14;

    constructor(private radius: number) {
    }

    get area(): number {
        return Circle2.PI * Math.pow(this.radius, 2);
    }
}
const c1 = new Circle2(5);
const c2 = new Circle2(10);

abstract class Shape3 {
    constructor(protected width: number, protected height: number) {
    }

    public abstract getArea(): number;
}
class Regtangle extends Shape3 {
    getArea(): number {
        return this.width * this.height;
    }
}
class Triangle extends Shape3 {
    public getArea(): number {
        return this.width * this.height / 2;
    }
}
const reg = new Regtangle(10, 20);
//console.log(reg.getArea()); 100
const tri = new Triangle(10, 20);
//console.log(tri.getArea()); 200

class Stack<T> {
    private data: T[] = [];
    push = (item: T): number => this.data.push(item);
    pop = (): T => this.data.pop();
}
const stack: Stack<string> = new Stack<string>();
stack.push('aaa');
stack.push('bbb');
stack.push('ccc');
//console.log(stack.pop()); ccc
//console.log(stack.pop()); bbb
//console.log(stack.pop()); aaa

function reverse<T>(items: T[], result: T[] = []): T[] {
    const [firstItem, ...restItems] = items;
    //console.log('--' + firstItem);
    //console.log('----' + restItems);
    return items.length <= 0
        ? result
        : reverse(restItems, [firstItem, ...result]);
}
//console.log(reverse([1, 2, 3, 4])); //[4, 3, 2, 1]
//console.log(reverse(['hi', 'hello'])); //['hello', 'hi']

class Utility {
    static reverse<T>(items: T[], result: T[] = []): T[] {
        const [firstItem, ...restItems] = items;

        return items.length <= 0
            ? result
            : Utility.reverse(restItems, [firstItem, ...result]);
    }
}
//console.log(Utility.reverse([1, 2, 3, 4])); [4, 3, 2, 1]

const aa: any = {};
Object.defineProperty(aa, 'PI', {
    value: 3.14
});
//console.log(aa.PI); 3.14
const aa2: any = {_radius: 10};
Object.defineProperty(aa2, 'radius', {
    get(): number {
        return this._radius;
    },
    set(radius: number) {
        if (radius >= 0) {
            this._radius = radius;
        }
    }
});
aa2.radius = 9;
//console.log(aa2.radius); 9


function logMethods(constructor: Function) {
    console.log(Object.keys(constructor.prototype));
}
//@logMethods [ 'createTheWorld', 'nap' ]
class God {
    createTheWorld() {
    }

    nap() {
    }
}
function logMethods2(startsWith: string) {
    return (construct: Function) => {
        console.log(
            Object.keys(construct.prototype)
                .filter(method => method.startsWith(startsWith))
        )
    }
}
//@logMethods2('create')  [ 'createTheWorld', 'createHumans' ]
class God2 {
    createTheWorld() {
    }

    createHumans() {
    }

    nap() {
    }
}

function validate(regex: RegExp) {
    return (target: any, key: string) => {
        let _value = this[key];
        Object.defineProperty(target, key, {
            set(value: string) {
                if (regex.test(value)) {
                    _value = value;
                } else {
                    throw new Error('Invalid Value');
                }
            },
            get(){
                return _value;
            }
        });
    }
}
class Person2 {
    @validate(/[a-zA-Z]+/)
    firstName: string;
    @validate(/[a-zA-Z]+/)
    lastName: string;
}
const freedomeiei = new Person2();
//freedomeiei.firstName = 'Freedom';
//freedomeiei.firstName = '111'; error*/