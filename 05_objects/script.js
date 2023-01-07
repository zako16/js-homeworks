import Users from './UsersClass.js';

// let arr = [] - массив
// let number = 5
// let string = "Строковое значение"
// let someObj = {} - объект
// Объекты это предметы

let user1 = {
    name: "Meerim",
    lastname: "Zhanuzakova",
    age: 27,
    gender: "female"
}

let user2 = {
    firstname: "Zhamilia",
    secondname: "Some Second Name",
    age: 25,
    gender: "female",
    sayHiFromOb: function() {
        alert("Привет от" + this.firstname);
    }
}


var user = new Users();
user.firstname = "Harry";
user.lastname = "Potter";
user.age = 26;
user.gender = "male";

var user3 = new Users("Hermione", "Granger", 26, "female");
var user4 = new Users("Ronald", "Weasley", 26, "male");


alert(user3.sayHi());
console.log(user.sayHi())
console.log(user.fullName())
alert(user4.sayHi());


//
var string = "Longer sentence";
console.log(string);

string.toUpperCase();
console.log(string);

string = string.toUpperCase();
console.log(string);
//