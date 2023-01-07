/* 
ЦИКЛЫ (Loops)
array переводится с англ как массив/множество
*/
// var productApple = "Apple";
// var productOrange = "Orange";
// var productsArray = ["Mandarin", "Kiwi", "Banana"];
// index = это место элемента в массиве
// console.log(productApple);
// console.log(productOrange);
// console.log(productsArray);

// сколько раз что-то повторять, со скольки начать и до скольки делать
// var count это объявление шага, счетчика цикла и счетчик = 0
// цикл будет работать пока count меньше 10
// расстояние роста шаг/счетчика count это +1 на ПРЕДЫДУЩЕЕ значение
// for(var count =0; count < 10; count = count+1)
// {
//     console.log(count);
// }

// console.log("Тут будем выводить данные из массива");
// console.log(productsArray[1])
// console.log(productsArray[0])

/*
var temp = 0;
temp = temp +1;
temp = "Some Name";
temp = temp + " new Name";

console.log(temp);
*/

// Вывод значений ИЗ массива, используя цикл
/*console.log(productsArray);
console.log("Lenght: ", productsArray.length);

for(var count = 0; count < productsArray.length; count = count+1)
{
    console.log(count, productsArray[count]);
}
*/


var numsArray = [78, 541, 23, 56, 520, 620, 1000, 47, 58];
var sumOfNums = numsArray[0] + numsArray[1] + numsArray[2]+ numsArray[3]

// console.log(sumOfNums);
var finalSum = 0;
for(var count=0; count < numsArray.length; count = count+1)
{
    finalSum = finalSum + numsArray[count];
    console.log(finalSum);
}

var strokovoyeZnachenie = "Banana";
// console.log(strokovoyeZnachenie[2]);

for(var count=0; count < strokovoyeZnachenie.length; count = count+1){
    console.log(strokovoyeZnachenie[count]);
}
