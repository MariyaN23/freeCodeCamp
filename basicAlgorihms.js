//Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
    return celsius*9/5 + 32;
}

console.log(convertCtoF(30))

console.log(convertCtoF(-30))

//Reverse a String
function reverseString(str) {
    return str.split('').reverse('').join('');
}

console.log(reverseString("hello world"))


//Factorialize a Number
//1st solution
function factorialize1(num) {
    let out = 1;
    for (let i=1; i<=num; i++) {
        out *= i;
    }
    return out;
}
//2nd solution
factorialize1(5);
function factorialize2(num) {
    if (num === 1) {
        return num;
    } else {
        return num*factorialize2(num-1);
    }
}

console.log(factorialize2(5))

//Find the Longest Word in a String
function findLongestWordLength(str) {
    let long = 0;
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > long) {
            long = strArr[i].length;
        }
    }
    return long;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let largest = [arr[0][0], arr[1][0], arr[2][0], arr[3][0]];
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length; j++) {
            if (arr[i][j] > largest[i]) {
                largest[i] = arr[i][j];
            }
        }
    }
    return largest;
}
//если отрицательные то будет 0!!!
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

function largestOfFour2(arr) {
    return [Math.max(...arr[0]), Math.max(...arr[1]), Math.max(...arr[2]), Math.max(...arr[3])]
}

console.log(largestOfFour2([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))

/*function(a,b,c,d) {
    return ...
}
function (1,2,3,4)
function (...array)*/


//Confirm the Ending
function confirmEnding(str, target) {
    let lastWords = str.slice(-target.length)
    return lastWords === target
}

console.log(confirmEnding("Bastian", "n"))
console.log(confirmEnding("Abstraction", "action"))

//Repeat a String Repeat a String
