class User{
    firstname = "";
    lastname = "";
    birthdate = "";
    gender = "";

    constructor(name, surname, birthdate, comingGender){
        this.firstname = name;
        this.lastname = surname;
        this.birthdate = birthdate;
        this.gender = comingGender;
    }
}

var user = {
    name: "Meerim",
    lastname: "Zhanuzakova",
    age: 27,
    gender: "female"
}

var user2 = {
    firstname: "Adelya",
    lastname: "",
    birthdate: "",
    gender: ""
}
console.log(user.lastname);
console.log(user.age);

user.lastname = "Madyarova"
console.log(user2.firstname)
console.log(user.name)

// Чуть больше рассмотрим классы
var someUser = new User;
someUser.firstname = "Tatyana";
someUser.lastname = "SomeSurname";
someUser.birthdate = "SomeSurname";

// объявление черех конструктор
var thirdUser = new User("Bermet", "A", "2000-01-01", "female");
console.log(thirdUser);




