"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.address = address;
        this.name = name;
        this.age = age;
    }
    Person.prototype.printName = function () {
        return this.name;
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.setAddress = function (address) {
        return this.address;
    };
    Person.prototype.getAddres = function () {
        return this.address;
    };
    return Person;
}());
exports.Person = Person;
