export default class Users{
    firstname;
    lastname;
    age;
    gender;
    datebirth;

    constructor(firstname, lastname, age, gender){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
    }

    sayHi() {
        return "Привет от " + this.firstname;
    }

    fullName(){
        var fullName = this.firstname + " " + this.lastname;
        return fullName;
    }

    getAge(){
        this.age = 26 // this.datebirth - Date().now() 
        return this.age;
    }
}