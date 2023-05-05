"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var Person_1 = require("./Person");
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.printCalendar = function () {
        return this.people;
    };
    return Contacts;
}());
exports.Contacts = Contacts;
var carlos = new Person_1.Person("Carlos", 18, "calle pepito grillo 24");
var alba = new Person_1.Person("Alba", 27, "Calle casa de campo");
var teressa = new Person_1.Person("Teresa", 26, "calle lindo perrito");
var pandilla = new Contacts();
pandilla.people = [carlos, alba, teressa];
console.log(pandilla.people)
