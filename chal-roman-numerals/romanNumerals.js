//seperate each digit place

let test1 = 267;
let test2 = 99;
let test3 = 999;
let test4 = 9999;
//MCCCLXXXVII

const romanNumerals = (num) => {
    let result = '';
    while (num > 0) {
        if(num - 1000 > 0) {
            result += 'M';
            num -= 1000;
        } else if(num - 500 > 0) {
            result += 'D';
            num -= 500;
        } else if (num - 100 > 0) {
            result += 'C';
            num -= 100;
        } else if (num - 50 > 0) {
            result += 'L';
            num -= 50;
        } else if (num - 10 > 0) {
            result += 'X';
            num -= 10;
        } else if (num - 5 > 0) {
            result += 'V';
            num -= 5;
        } else {
            result += 'I'.repeat(num);
            num = 0;
        }
    }
    return result;
}

// console.log(romanNumerals(test1))
// console.log(romanNumerals(test2))
// console.log(romanNumerals(test3))
// console.log(romanNumerals(test4))

const romans = (num) => {
    let decimals = [1000, 500, 100, 50, 10, 5, 1]
    let numerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
    let result = '';
    for (i in decimals) {
        while (num >= decimals[i]) {
            result += numerals[i];
            num -= decimals[i];
        }
    }
    return result;
}

console.log(romans(test1));
console.log(romans(test2));
console.log(romans(test3));
console.log(romans(test4));


const createLegion = size => {
    let numerals = {
        1: ["I", "V"],
        2: ["X", "L"],
        3: ["C", "D"],
        4: ["M", null],
        5: [null, null],
    }

    let sizeArr = String(size).split('')
    let legion = ''

    while (sizeArr.length > 0) {
        let currentNumber = +sizeArr[0]
        let currentPosition = sizeArr.length

        let ones = numerals[currentPosition][0]
        let fives = numerals[currentPosition][1]
        let tens = numerals[currentPosition + 1][1]

        if(currentNumber === 9) {
            legion += ones
            legion += tens
        } else if (currentNumber < 9 && currentNumber >= 5) {
            legion += fives
            legion += ones.repeat(currentNumber - 5)
        } else if (currentNumber === 4) {
            legion += ones
            legion +=fives
        } else if (currentNumber < 4) {
            legion += ones.repeat(currentNumber)
        }

    }
    return legion
}