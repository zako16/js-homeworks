/* -- Это комментарии и они не сработают
int, integer = это числовые значения
str, string = это строковые значения
bool = логические значения (правда или ложь)
alert("Ваш возраст" + myAgeString); // выводит значение myAgeString в окне
console.log(myAgeString); // выводит значение myAgeString в консоли
*/
function ageCategorization(ageInFunctionString){
    var ageInFunction = parseInt(ageInFunctionString); // переводим в integer
    if(ageInFunction >= 16 && ageInFunction <= 22)
    {
        alert("Вы ещё юны")
    } 
    else if(ageInFunction > 22)
    {
        alert("Вы совсем молоды")
    }
    else if(ageInFunction < 16)
    {
        alert("Привет, подросток")
    }
}

var howManyTimesString = prompt("Сколько раз будем определять возраст?");
var howManyTimes = parseInt(howManyTimesString);
var finalMessage = "";

for(var counter=0; counter < howManyTimes; counter++){
    var myAgeString = prompt("Введите ваш возраст " + (counter + 1) + " раз");
    ageCategorization(myAgeString)
    finalMessage = finalMessage + "Шаг " + (counter + 1) + " раз: Возраст " + myAgeString + ". ";
}

alert(finalMessage)