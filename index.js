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
// Basic type ********************************
var isDone = false;
var decimal = 6;
var color = 'blue';
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var x;
x = ["hello", 55];
var notSure = 5;
notSure = "meybe a string instead";
notSure = false;
function warnUser() {
    console.log('This is my warning message');
}
var u = undefined;
var n = null;
function error(message) {
    throw new Error(message);
}
// Literal types ********************************
var trafficLight;
trafficLight = "Grean";
// Enum ********************************
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var c = Color.GREEN;
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
    return shape.kind === 'square' ?
        Math.pow(shape.size, 2) : shape.width * shape.height;
}
var areaSquare = {
    kind: 'square',
    size: 20
};
console.log(area(areaSquare)); // 400
var areaRegtangle2 = {
    kind: 'rectangle',
    width: 2,
    height: 4
};
console.log(area(areaRegtangle2)); // 8
var point1 = { x: 2, y: 5 };
var point2 = { x: 2, y: 5, z: 8 };
// Parameter properties ********************************
var ParameterProperties = /** @class */ (function () {
    function ParameterProperties(name, readonlyCanChangeInConstructorOnly) {
        this.name = name;
        this.readonlyCanChangeInConstructorOnly = readonlyCanChangeInConstructorOnly;
    }
    return ParameterProperties;
}());
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
        console.log('Pregnant');
    };
    return Woman;
}(Human));
var somsriWoman = new Woman('Somsri');
somsriWoman.printName(); // Somsri
somsriWoman.pregnant(); // Pregnant
