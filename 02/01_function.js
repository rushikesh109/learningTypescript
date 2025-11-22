"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function twoNumber(num) {
    return num + 5;
    // return "hello"
}
console.log(twoNumber(6));
function getUpperCase(value) {
    return value.toLocaleUpperCase();
}
console.log(getUpperCase('hitesh'));
function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return [name, email, isPaid];
}
console.log(signUpUser("rushi", "r@3.com", true));
var arrow = function (s) {
    return "";
};
var mandBhadak = ["sakshi", "kamble"];
console.log(mandBhadak);
var hy = mandBhadak.map(function (hapen) {
    return hapen.slice(3);
});
console.log(hy);
