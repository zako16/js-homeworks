var myAge = 10;
var isStudent = false;
var gender = true; // true = female, false = male
/*
if(myAge < 16) {
    console.log("Ты еще подросток")
}

if(myAge >= 16 && myAge <= 22) {
    console.log("Юность")
}

if(myAge > 22) {
    console.log("Молодость")
}
*/
// if - если
// else - или же, кроме "если"
/*
if(myAge >= 16 && myAge <= 22) {
    console.log("Юность")
} else {
    console.log("Молодость")
}
*/
// ------------ Про возрасты
if(myAge >= 16 && myAge <= 22)
{
    console.log("Юность")
} 
else if(myAge > 22)
{
    console.log("Молодость")
} 
else if(myAge < 16) // true 
{
    console.log("Подросток")
}
// ------------ Еще условный блок про то студент вы или нет
if(isStudent == true)
{
    console.log("Вы студент")
} else {
    console.log("Вы не студент")
}
// один знак = это присвоение значения
if(gender == false) // == это сравнение
{
    console.log("Вы женщина")
} else {
    console.log("Вы мужчина")
}
