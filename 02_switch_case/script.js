var myAgeCategory = "Возраст неизвестный";


switch(myAgeCategory){ 
    case("Юность"): // случай если myAgeCategory == Юность
        console.log("Вам между 16 и 22");
        break;
    case("Молодость"): // случай если myAgeCategory == Молодость
        console.log("Вам больше 22");
        break;
    case("Подросток"): // случай если myAgeCategory == Подросток
        console.log("Вам между 11 и 16");
        break;
    default:
        console.log("Мы не знаем сколько вам лет");
        break;
}

var myAge = 10;
var isStudent = true;
// == сравнение, просто = это присвоение
if(myAge < 16 && isStudent == true){
    console.log("Вы школьник");
} 
else if (myAge > 16 && isStudent == true){
    console.log("Вы студент колледжа")
}