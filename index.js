var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var isDone = true;
var decimal = 7;
var color = 'blue';
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var x;
x = ['string', 7];
var notSure = 4;
notSure = 'notSure';
function warnUser() {
    alert('This is my warning message');
}
var u = undefined;
var n = null;
function error(message) {
    throw new Error(message);
}
// Literal types
var l;
l = 'Bar';
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//console.log(c); 1
// Type assertion
var someValue = 'this is a string';
var strLength = someValue.length;
var strLength2 = someValue.length;
function getArea(rec) {
    return rec.width * rec.height;
}
getArea({ width: 3, height: 4 });
function find2DDistance(point1, point2) {
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
}
var point12D = { x: 0, y: 5 };
var point22D = { x: 10, y: 15 };
var point13D = { x: 0, y: 5, z: 7 };
var point23D = { x: 10, y: 15, z: 17 };
var UI = {
    state: {
        showPopup: false,
        showNotifications: false,
        showMessage: false
    },
    setState: function (state) {
        Object.assign(this.state, state);
    },
    printState: function () {
        console.log(this.state);
    }
};
UI.setState({ showPopup: true });
//UI.printState(); { showPopup: true, showNotifications: false, showMessage: false }
function display(person) {
    console.log(person.name);
}
var somchai = { name: 'Somchai' };
var somsree = { name: 'Somsree', age: 27 };
var Circle = (function () {
    function Circle(radius) {
        this.radius = radius;
        this.name = 'Circle';
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.log = function () {
        console.log('Circle!');
    };
    return Circle;
}());
var circle = new Circle(5);
var circle2 = new Circle(5);
circle2.name; // เรียกได้เฉพาะ name เท่านั้นเพราะว่ามีทั้งคู่ getArea จะใช้ไม่ได้เพราะว่ามีเฉพาะใน Shape เท่านั้น
//console.log(circle.getArea()); 78.53981633974483
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
function area(shape) {
    return shape.kind === 'square'
        ? Math.pow(shape.size, 2)
        : shape.width * shape.height;
}
// Exercise
function handler(event) {
    var mouseEvent = event;
}
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var dog = new Animal('Fanta');
//console.log(dog.name); Fanta
var Human2 = (function () {
    function Human2(fullname) {
        this.fullname = fullname;
    }
    Object.defineProperty(Human2.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Human2.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Human2.prototype, "fullname", {
        get: function () {
            return this._firstname + " " + this._lastname;
        },
        set: function (fullname) {
            _a = fullname.split(' '), this._firstname = _a[0], this._lastname = _a[1];
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    return Human2;
}());
var freedom = new Human2('Freedom Seven');
//console.log(freedom.firstname); Freedom
var Human3 = (function () {
    function Human3(name) {
        this.name = name;
    }
    Human3.prototype.printName = function () {
        console.log(this.name);
    };
    return Human3;
}());
var Woman = (function (_super) {
    __extends(Woman, _super);
    function Woman() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Woman.prototype.pregnant = function () {
        console.log("I'm pregnant!");
    };
    return Woman;
}(Human3));
var eiei = new Woman('Eiei');
//eiei.printName();
//eiei.pregnant();
var Circle2 = (function () {
    function Circle2(radius) {
        this.radius = radius;
    }
    Object.defineProperty(Circle2.prototype, "area", {
        get: function () {
            return Circle2.PI * Math.pow(this.radius, 2);
        },
        enumerable: true,
        configurable: true
    });
    return Circle2;
}());
Circle2.PI = 3.14;
var c1 = new Circle2(5);
var c2 = new Circle2(10);
var Shape3 = (function () {
    function Shape3(width, height) {
        this.width = width;
        this.height = height;
    }
    return Shape3;
}());
var Regtangle = (function (_super) {
    __extends(Regtangle, _super);
    function Regtangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Regtangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Regtangle;
}(Shape3));
var Triangle = (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.getArea = function () {
        return this.width * this.height / 2;
    };
    return Triangle;
}(Shape3));
var reg = new Regtangle(10, 20);
//console.log(reg.getArea()); 100
var tri = new Triangle(10, 20);
//console.log(tri.getArea()); 200
var Stack = (function () {
    function Stack() {
        var _this = this;
        this.data = [];
        this.push = function (item) { return _this.data.push(item); };
        this.pop = function () { return _this.data.pop(); };
    }
    return Stack;
}());
var stack = new Stack();
stack.push('aaa');
stack.push('bbb');
stack.push('ccc');
//console.log(stack.pop()); ccc
//console.log(stack.pop()); bbb
//console.log(stack.pop()); aaa
function reverse(items, result) {
    if (result === void 0) { result = []; }
    var firstItem = items[0], restItems = items.slice(1);
    //console.log('--' + firstItem);
    //console.log('----' + restItems);
    return items.length <= 0
        ? result
        : reverse(restItems, [firstItem].concat(result));
}
//console.log(reverse([1, 2, 3, 4])); //[4, 3, 2, 1]
//console.log(reverse(['hi', 'hello'])); //['hello', 'hi']
var Utility = (function () {
    function Utility() {
    }
    Utility.reverse = function (items, result) {
        if (result === void 0) { result = []; }
        var firstItem = items[0], restItems = items.slice(1);
        return items.length <= 0
            ? result
            : Utility.reverse(restItems, [firstItem].concat(result));
    };
    return Utility;
}());
//console.log(Utility.reverse([1, 2, 3, 4])); [4, 3, 2, 1]
var aa = {};
Object.defineProperty(aa, 'PI', {
    value: 3.14
});
//console.log(aa.PI); 3.14
var aa2 = { _radius: 10 };
Object.defineProperty(aa2, 'radius', {
    get: function () {
        return this._radius;
    },
    set: function (radius) {
        if (radius >= 0) {
            this._radius = radius;
        }
    }
});
aa2.radius = 9;
//console.log(aa2.radius); 9
function logMethods(constructor) {
    console.log(Object.keys(constructor.prototype));
}
//@logMethods [ 'createTheWorld', 'nap' ]
var God = (function () {
    function God() {
    }
    God.prototype.createTheWorld = function () {
    };
    God.prototype.nap = function () {
    };
    return God;
}());
function logMethods2(startsWith) {
    return function (construct) {
        console.log(Object.keys(construct.prototype)
            .filter(function (method) { return method.startsWith(startsWith); }));
    };
}
//@logMethods2('create')  [ 'createTheWorld', 'createHumans' ]
var God2 = (function () {
    function God2() {
    }
    God2.prototype.createTheWorld = function () {
    };
    God2.prototype.createHumans = function () {
    };
    God2.prototype.nap = function () {
    };
    return God2;
}());
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
var Person2 = (function () {
    function Person2() {
    }
    return Person2;
}());
__decorate([
    validate(/[a-zA-Z]+/)
], Person2.prototype, "firstName");
__decorate([
    validate(/[a-zA-Z]+/)
], Person2.prototype, "lastName");
var freedomeiei = new Person2();
//freedomeiei.firstName = 'Freedom';
//freedomeiei.firstName = '111'; error 
