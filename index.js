var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Basic type ********************************
var isDone = false;
console.log(isDone); // false
var decimal = 6;
console.log(decimal); // 6
var color = 'blue';
console.log(color); // blue
var list = [1, 2, 3];
console.log(list); // [1, 2, 3]
var list2 = [1, 2, 3];
console.log(list2); // [1, 2, 3]
var x;
x = ['hello', 55];
console.log(x); //[ 'hello', 55 ]
var notSure;
notSure = false;
console.log(notSure); // false
function warnUser() {
    console.log('This is my warning message void');
}
warnUser(); // This is my warning message void
var u = undefined;
console.log(u); // undefined
var n = null;
console.log(n); // null
/*function error(message: string): never { // ไม่มีการ return ที่แท้จริงออกจาก function
  throw new Error(message);
}*/
// Literal types ********************************
var trafficLight;
trafficLight = 'Grean';
// Enum ********************************
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var r = Color.RED;
var g = Color.GREEN;
var b = Color.BLUE;
console.log(r); // 0
console.log(g); // 1
console.log(b); // 2
// Type Assertion ********************************
var someValue = 'This is a string';
var strLength = someValue.length;
console.log(strLength); // 16
function getArea(rec) {
    return rec.width * rec.height;
}
console.log(getArea({ width: 3, height: 4 })); // 12
function find2DDistance(point1, point2) {
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
}
var point12D = { x: 2, y: 4 };
var point22D = { x: 4, y: 8 };
var point13D = { x: 2, y: 4, z: 6 };
var point23D = { x: 4, y: 6, z: 10 };
console.log(find2DDistance(point12D, point22D)); // 4.47  สามารถใส่ 3D เข้าไปก็ได้
console.log(find2DDistance(point13D, point23D)); // 2.82
var UI = {
    state: {
        showPopup: false,
        showNotification: false,
        showMessage: false
    },
    setState: function (state) {
        Object.assign(this.state, state);
    },
    printState: function () {
        console.log(this.state);
    }
};
UI.setState({ showMessage: true });
UI.printState(); //{ showPopup: false, showNotification: false, showMessage: true }
// Type fressness ********************************
function display(person) {
    console.log(person.name);
}
var somchai = { name: 'Somchai' };
var somsri = { name: 'Somsri', age: 28 };
display(somchai); // Somchai
display(somsri); // Somsri
display({ name: 'Somchai type fressness' });
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.log = function () {
        console.log('Circle!');
    };
    return Circle;
}());
var circleClass = new Circle(10);
console.log(circleClass.getArea()); // 314.159
var Circle2 = /** @class */ (function () {
    function Circle2(radius) {
        this.radius = radius;
        this.name = 'Circle2';
    }
    Circle2.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle2.prototype.log = function () {
        console.log(this.name);
    };
    return Circle2;
}());
var circle2Class = new Circle2(10);
console.log(circle2Class.name); // Circle2
//circle2Class.getArea(); ไม่สามารถเรียก getArea() ได้เพราะว่า getArea มีใน Shape2 แต่ไม่มีใน Logger2 ต้องมีทั้งสอง interface ถึงจะเรียกใช้งาน function ได้
// Type guards ********************************
function slugify(text) {
    var result;
    if (typeof text === 'string') {
        result = text;
    }
    else {
        result = text.join(' ');
    }
    return result.toLowerCase().replace(/ /g, '-');
}
console.log(slugify('Freedom Seven')); // freedom-seven
console.log(slugify(['Hello', 'World'])); // hello-world
function area(shape) {
    return shape.kind === 'square'
        ? Math.pow(shape.size, 2)
        : shape.width * shape.height;
}
var areaSquare = {
    kind: 'square',
    size: 20
};
console.log(area(areaSquare)); // 400
var areaRectangle2 = {
    kind: 'rectangle',
    width: 2,
    height: 4
};
console.log(area(areaRectangle2)); // 8
var point1 = { x: 2, y: 5 };
var point2 = { x: 2, y: 5, z: 8 };
console.log(point1); // { x: 2, y: 5 }
console.log(point2); // {x: 2, y: 5, z: 8}
// Parameter properties ********************************
var ParameterProperties = /** @class */ (function () {
    function ParameterProperties(name, readonlyCanChangeInConstructorOnly) {
        this.name = name;
        this.readonlyCanChangeInConstructorOnly = readonlyCanChangeInConstructorOnly;
        console.log(name);
    }
    return ParameterProperties;
}());
var p = new ParameterProperties('ParameterProperties', 'Readonly ParameterProperties');
console.log(p); // ParameterProperties
// ParameterProperties {
//   name: 'ParameterProperties',
//   readonlyCanChangeInConstructorOnly: 'Readonly ParameterProperties'
// }
// Accessors ********************************
var Student = /** @class */ (function () {
    function Student(fullname) {
        this.fullname = fullname;
    }
    Object.defineProperty(Student.prototype, "fullname", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (fullname) {
            var _a;
            _a = fullname.split(' '), this._firstName = _a[0], this._lastName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var freedomStudent = new Student('Freedom Seven');
console.log(freedomStudent.firstName); // Freedom
console.log(freedomStudent.lastName); // Seven
console.log(freedomStudent.fullname); // Freedom Seven
// Inheritance ********************************
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.printName = function () {
        console.log(this.name);
    };
    return Human;
}());
var Woman = /** @class */ (function (_super) {
    __extends(Woman, _super);
    function Woman() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Woman.prototype.pregnant = function () {
        console.log(this.name + " is pregnant");
    };
    return Woman;
}(Human));
var somsriWoman = new Woman('Somsri');
somsriWoman.printName(); // Somsri
somsriWoman.pregnant(); // Pregnant
// Static properties ********************************
var StaticCircle = /** @class */ (function () {
    function StaticCircle(radius) {
        this.radius = radius;
    }
    Object.defineProperty(StaticCircle.prototype, "area", {
        get: function () {
            return StaticCircle.PI * Math.pow(this.radius, 2);
        },
        enumerable: false,
        configurable: true
    });
    StaticCircle.PI = Math.PI;
    return StaticCircle;
}());
var c1 = new StaticCircle(5);
var c2 = new StaticCircle(10);
console.log(c1.area); // 78.53
console.log(c2.area); // 314.15
// Abstract classes ********************************
var AbstractShape = /** @class */ (function () {
    function AbstractShape(width, height) {
        this.width = width;
        this.height = height;
    }
    return AbstractShape;
}());
var Rectangle4 = /** @class */ (function (_super) {
    __extends(Rectangle4, _super);
    function Rectangle4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle4.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle4;
}(AbstractShape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.getArea = function () {
        return (this.width * this.height) / 2;
    };
    return Triangle;
}(AbstractShape));
var abstractRectangle = new Rectangle4(2, 4);
var abstractTriangle = new Triangle(2, 4);
console.log(abstractRectangle.getArea()); // 8
console.log(abstractTriangle.getArea()); // 4
// Generic type ********************************
var Stack = /** @class */ (function () {
    function Stack() {
        var _this = this;
        this.data = [];
        this.push = function (item) { return _this.data.push(item); };
        this.prop = function () { return _this.data.pop(); };
    }
    Stack.prototype.print = function () {
        console.log(this.data);
    };
    return Stack;
}());
// -------------------
var stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
stack.prop();
stack.print(); // [ 'a', 'b' ]
function reverse(items, result) {
    if (result === void 0) { result = []; }
    var firstItem = items[0], restItems = items.slice(1);
    console.log("firstItem = " + firstItem);
    console.log("restItems = " + restItems);
    console.log("result = " + result);
    return items.length <= 0
        ? result
        : reverse(restItems, __spreadArrays([firstItem], result));
}
console.log(reverse([1, 2, 3, 4])); // [ 4, 3, 2, 1 ]
// -------------------
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.reverse = function (items, result) {
        if (result === void 0) { result = []; }
        var firstItem = items[0], restItems = items.slice(1);
        return items.length <= 0
            ? result
            : Utility.reverse(restItems, __spreadArrays([firstItem], result));
    };
    return Utility;
}());
console.log(Utility.reverse([1, 2, 3, 4])); // [ 4, 3, 2, 1 ]
// Data descriptor ********************************
var circleData = {};
Object.defineProperty(circleData, 'PI', {
    value: 3.14
});
console.log(circleData.PI); // 3.14
// Accessor descriptor ********************************
var circleAccessor = { _radius: 10 };
Object.defineProperty(circleAccessor, 'radius', {
    get: function () {
        return this._radius;
    },
    set: function (radius) {
        if (radius >= 0) {
            this._radius = radius;
        }
    }
});
circleAccessor.radius = 9;
console.log(circleAccessor.radius); // 9
// Class decorators ********************************
function logMethods(constructor) {
    console.log(Object.keys(constructor.prototype));
}
var God = /** @class */ (function () {
    function God() {
    }
    God.prototype.createTheWorld = function () {
        console.log('Create the world');
    };
    ;
    God.prototype.nap = function () {
        console.log('Nap');
    };
    ;
    God = __decorate([
        logMethods
    ], God);
    return God;
}());
var god = new God(); // [ 'createTheWorld', 'nap' ]
god.createTheWorld(); //Create the world
god.nap(); // Nap
// -------------------
function logMethods2(startWidth) {
    return function (construct) {
        console.log(Object.keys(construct.prototype)
            .filter(function (method) { return method.startsWith(startWidth); }));
    };
}
var God2 = /** @class */ (function () {
    function God2() {
    }
    God2.prototype.createTheWorld = function () {
        console.log('God2 create the world');
    };
    God2.prototype.createHumans = function () {
        console.log('God2 create humans');
    };
    God2.prototype.nap = function () {
        console.log('God2 nap');
    };
    God2 = __decorate([
        logMethods2('create')
    ], God2);
    return God2;
}());
var god2 = new God2(); // [ 'createTheWorld', 'createHumans' ]
god2.createTheWorld(); // God2 create the world
god2.createHumans(); // God2 create humans
god2.nap(); // God2 nap
// Property decorators ********************************
function validate(regex) {
    var _this = this;
    return function (target, key) {
        var _value = _this[key];
        Object.defineProperty(target, key, {
            set: function (value) {
                if (regex.test(value)) {
                    _value = value;
                }
                else {
                    throw new Error('Invalid Value');
                }
            },
            get: function () {
                return _value;
            }
        });
    };
}
var PersonPropertyDecorators = /** @class */ (function () {
    function PersonPropertyDecorators() {
    }
    __decorate([
        validate(/[a-zA-Z]+/)
    ], PersonPropertyDecorators.prototype, "firstName");
    __decorate([
        validate(/[a-zA-Z]+/)
    ], PersonPropertyDecorators.prototype, "lastName");
    return PersonPropertyDecorators;
}());
var personP = new PersonPropertyDecorators();
personP.firstName = 'aa';
console.log(personP.firstName); // aa
// Use for third party ********************************
// https://github.com/DefinitelyTyped/DefinitelyTyped
