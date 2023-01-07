// Задача 4.2:
// Дано целое положительное число N. 
// Найти сумму квадратов всех натуральных чисел от 0 до N.

/* 
prompt() - для получения данных от пользователя
parseInt() - чтобы перевести строковое значение в числовое
** - возведение в степень
* - умножение
alert() - чтобы вывести результат
count = count+1 
count++
*/
// var и let
let NumberString = prompt("Введите первое число");
let N = parseInt(NumberString);

let squareSumm = 0;

for(let count = 0; count <= N; count++){
    if(count > 0){
        let square = count * count;
        squareSumm = squareSumm + square;
    }
}

alert("Сумма квадратов до N=" + N + " равна = " + squareSumm)