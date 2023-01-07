// Задача 03:
// Пользователь вводит свое имя и число (место буквы). 
// Надо вывести какая буква находится под этим номером (числом).

/* 
prompt() - для получения данных от пользователя
parseInt() - чтобы перевести строковое значение в числовое
alert() - чтобы вывести результат

Как будем решать задачу:
Получим имя
Получим число

Потом получим букву по числу
Выведем букву

0123456789
Галадриель
*/

var nameString = prompt("Введите имя");
var indexString = prompt("Введите число");

var index = parseInt(indexString);

// var indexForNormalPeople = index - 1;
// var bukva = nameString[indexForNormalPeople];

var bukva = nameString[index - 1];

alert("Ваше имя " + nameString + " и число которое вы ввели " + index + " Ваша буква = " + bukva);