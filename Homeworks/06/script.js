// Задача 05:
// Даны 3 вещественных числа a,b,c. Существует ли треугольник со сторонами a,b,c.


/* 
prompt() - для получения данных от пользователя
parseInt() - чтобы перевести строковое значение в числовое
if - условие - если
else if - условие - или же если
alert() - чтобы вывести результат

Как будем решать задачу:
Получим первое число
Получим второе число
Получим третье число

Проверим первое правило: что все числа больше нуля
Проверим второе правило: что сумма двух маленьких сторон больше длиный самой большой стороны
Проверим третье правило: что КАЖДАЯ сторона треугольника меньше суммы двух других сторон
a = firstNumber, b = secondNumber, c = thirdNumber
a + b > c И a + c > b И b + c > a
AND &&
*/

var firstNumberString = prompt("Введите первое число");
var secondNumberString = prompt("Введите второе число");
var thirdNumberString = prompt("Введите третье число");

var firstNumber = parseInt(firstNumberString);
var secondNumber = parseInt(secondNumberString);
var thirdNumber = parseInt(thirdNumberString);

var triangleExist = false;

if(firstNumber > 0 && secondNumber>0 && thirdNumber > 0){
    if(firstNumber + secondNumber > thirdNumber 
        && firstNumber + thirdNumber > secondNumber 
        && secondNumber + thirdNumber > firstNumber)
    {
        triangleExist = true;
    } 
} else {
    alert("Треугольник не может существовать когда одна из сторон меньше или равно НУЛЮ");
}

if(triangleExist) {
    alert("Треугольник существует");
} else {
    alert("Треугольник НЕ существует");

}