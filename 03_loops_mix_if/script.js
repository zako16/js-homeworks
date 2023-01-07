/*
+, -, /, *, **, %


цикл (с какого шага начнется; условие когда из цикла надо выходить; размера шага)

for(var count=0; count < numsArray.length; count = count +1)

создадим массив чисел
мы откроем цикл для перербора числа
  условие проверки ( если это четное число)
    я буду их складывать
  условие проверки (если это НЕчетное число)
    я буду их умножать друг на друга
выведу результат
*/
/*
var numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var chetnyeChisla = 0;
var nechectnyeChisla = 1; // потому что при умножении на 0 всегда 0
for(var count=0; count < numsArray.length; count = count +1)
{
    // четные числа где в остатке на деление 2 ничего не остается
    if(numsArray[count] % 2 == 0){ 
        chetnyeChisla = chetnyeChisla + numsArray[count];
    } 
    // тут нечетные числа, потому что в остатке на деление 2 всегда 1
    else if (numsArray[count] % 2 == 1){
        nechectnyeChisla = nechectnyeChisla * numsArray[count];
    }
}


console.log("Сумма четных чисел", chetnyeChisla);
console.log("Сумма умножений нечетных чисел", nechectnyeChisla);

*/
// for(var count=15; count > 5; count = count - 2){
//     console.log(count);
// }
// count++
// count = count + 1
// for(var count=5; count < 15; count++ ){
//     console.log(count);
// }

// for(var count=15; count > 5; count = count -3 ){
//     console.log(count);
// }



var myAge = 17;
var gender = true; // false = мужчина, true = женщина
var isStudent = true;

if(isStudent == true){
    if(myAge >=16 && myAge <=22){
        if(gender == true){
            console.log("Вы студентка колледжа");
        }
        else if(gender == false) {
            console.log("Вы студент колледжа");
        }
    }
    else if( myAge< 16){
        if(gender == true){
            console.log("Вы школьница");
        }
        else if(gender == false) {
            console.log("Вы школьник");
        }
    }
}