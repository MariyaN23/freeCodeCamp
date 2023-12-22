//Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
    return celsius*9/5 + 32;
}

convertCtoF(30);

convertCtoF(-30);

//Reverse a String
function reverseString(str) {
    return str.split('').reverse('').join('');
}

reverseString("hello world");


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
        return num*factorialize(num-1);
    }
}

factorialize2(5);

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

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let largest = [0, 0, 0, 0];
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length; j++) {
            if (arr[i][j] > largest[i]) {
                largest[i] = arr[i][j];
            }
        }
    }
    console.log(largest)
    return largest;
}
//если отрицательные то будет 0!!!
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);