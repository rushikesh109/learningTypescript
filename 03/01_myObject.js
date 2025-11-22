"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "rushi",
    email: "r@r.com",
    isActive: true,
};
function createUser() {
    return {
        name: "rushi",
        email: "rushi@gmail.com",
        isActive: true,
    };
}
function createCourse(user) { }
var newUser = {
    name: "rushi",
    isPaid: false,
    //   email: "rushi@gmail.com",
};
console.log(createCourse(newUser));
