// Задача 04:
// Пользователь вводит предложение, 
// надо вывести предложение где все буквы заглавные.
// Галадриель
// ГАЛАДРИЕЛЬ


/* 
prompt() - для получения данных от пользователя
parseInt() - чтобы перевести строковое значение в числовое
toUpperCase() - чтобы перевести все в верхний регистр
alert() - чтобы вывести результат

Как будем решать задачу:
Получим предложение
Переведем все в верхний регистр
Выведем результат
*/

var mySentense = prompt("Введите предложение");
var inUpperCase = mySentense.toUpperCase();
alert(inUpperCase);

// ord