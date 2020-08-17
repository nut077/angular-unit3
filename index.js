// Basic type
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
// Literal types
var trafficLight;
trafficLight = "Grean";
// Enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var c = Color.GREEN;
// Type Assertion
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
