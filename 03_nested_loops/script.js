var numsArray = [1, 5, 78, 9];


/*
for(var row = 0; row < matrix.length; row++)
{
    console.log(matrix[row]);
    var element = matrix[row]; //  [1, 5, 78, 9]
    for(var column = 0; column < element.length; column++)
    {
        console.log(element[column]);
    }
}
*/
var matrix = [
    [1, 5, 78, 9],
    [6, 3, 45, 10],
    [74, 85, 150, 41],
    [1, 0, 1, 0]
]
var sumOfNumsOfMatrix = 0;
for(var row = 0; row < matrix.length; row++)
{
    console.log(matrix[row]);
    for(var column = 0; column < matrix[row].length; column++)
    {
        console.log(matrix[row][column]);
        sumOfNumsOfMatrix = sumOfNumsOfMatrix + matrix[row][column]
    }
}

console.log(sumOfNumsOfMatrix)