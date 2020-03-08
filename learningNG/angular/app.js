"use strict";
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
exports.__esModule = true;
var ali_1 = require("./ali");
new ali_1.Ali();
var courseName = "CS472";
// courseName = 10; Error! 
//explicit return type
var userId = function (a, b) { return "Hello string " + b + ", your number is " + a; };
//implicit return type
var userName = function (a, b) { return "Hello string " + b + ", your number is " + a; };
var hoppies;
hoppies = ["100", 200];
// hoppies = 20; Error!
var address = ["1000 N 4th St.", 144];
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor); // 101
var Multiply;
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
var a = 20;
var MWAcourse = {
    courseName: "CS572",
    courseNumber: 572,
    project: true
};
var Course = /** @class */ (function () {
    function Course(name, code) {
        this.name = name;
        this.code = code;
    }
    Course.prototype.registerCourse = function (course) {
        console.log("registered course : " + this.name + " , code : " + this.code + " successfully!");
    };
    return Course;
}());
// shortcut! 
var CoolCourse = /** @class */ (function () {
    function CoolCourse(name, code) {
        this.name = name;
        this.code = code;
    }
    CoolCourse.prototype.registerCoolCourse = function (course) {
        console.log("registered course : " + this.name + " , code : " + this.code + " successfully!");
    };
    // set name (value : string){
    //  this.name = value;
    // }
    CoolCourse.prototype.printCourse = function () {
        console.log(this.setCourseName(this.name));
    };
    CoolCourse.prototype.setCourseName = function (name) {
        return "Course Name : " + this.name;
    };
    CoolCourse.generalRule = "Enjoy it!";
    return CoolCourse;
}());
var IceCreamCourse = /** @class */ (function (_super) {
    __extends(IceCreamCourse, _super);
    function IceCreamCourse(name) {
        return _super.call(this, name, 20) || this;
    }
    return IceCreamCourse;
}(CoolCourse));
console.log(CoolCourse.generalRule);
var cool = new CoolCourse("WAP", 10);
cool.printCourse();
var blckberryIceCream = new IceCreamCourse("Blackberry");
console.log(blckberryIceCream.code); // 20
var Life = /** @class */ (function () {
    function Life() {
        this.lifeWisdom = "Change your mind set to the growth mode!";
    }
    return Life;
}());
var studentLife = /** @class */ (function (_super) {
    __extends(studentLife, _super);
    function studentLife(challengeName) {
        var _this = _super.call(this) || this;
        _this.challengeName = challengeName;
        return _this;
    }
    studentLife.prototype.challenge = function (name) {
        return "You can overcome " + this.challengeName + " !";
    };
    return studentLife;
}(Life));
// Factory Decorate Pattern
var fear = { desc: 'unkown' };
function doRest(advice) {
    return function (obj) {
        return {
            advice: advice,
            fear: obj.desc
        };
    };
}
var decorateMyFear = doRest("Do not worry")(fear);
console.log(decorateMyFear);
var Fear = /** @class */ (function () {
    function Fear() {
        this.fear = "unkown";
    }
    Fear = __decorate([
        doRestFactory("Do not worry")
    ], Fear);
    return Fear;
}());
function doRestFactory(advice) {
    return function (targetClass) {
        return /** @class */ (function () {
            function class_1() {
                this.advice = advice;
                this.fear = new targetClass().fear;
            }
            return class_1;
        }());
    };
}
console.log(new Fear());
