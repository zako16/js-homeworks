// Задача 01:
// Пользователь вводит 2 числа, вывести квадрат каждого числа.


/* 
prompt() - для получения данных от пользователя
parseInt() - переводит строковые данные в числовые
* - умножение
** - возведение в степень
alert() - чтобы вывести результат

Как будем решать:
Получить первое число
Получить второе число

Возвести в квадрат первое число 
и вывести квадрат первого числа
Возвести в квадрат второе 
и вывести квадрат второго числа
*/

// получили числа от пользователя
var firstNumberString = prompt("Введите первое число");
var secondNumberString = prompt("Введите второе число");

// из строковых значений перевели в числовые
var firstNumber = parseInt(firstNumberString);
var secondNumber = parseInt(secondNumberString);

// возведение в квадрат, два варианта: умножить на себя и возвести в 2 степень
var squareOfFirstNumber = firstNumber * firstNumber;
var squareOfSecondNumber = secondNumber ** 2;

// выведение результата
alert("Квадрат первого числа = " + squareOfFirstNumber);
alert("Квадрат второго числа = " + squareOfSecondNumber);