/*Write a function that takes an array
 of numbers and returns the largest (without using Math.max())*/

const numArr = [3, 5, 2, 8, 1]
function biggestNum () {
    bigNumber = [0]
    for(let i = 0; i <  numArr.length;i++) {
        bigNumber.push(i)
        if (bigNumber[0] < numArr[i]) {
            bigNumber = []
            bigNumber.push(numArr[i])
            console.log (bigNumber)
        }
    }
    console.log(bigNumber)
}

// Write a function that takes an array of words and a character
// and returns each word that has that character present.



lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"] 
let forLoopi = []


//it needs a prermater of a array of strings and character to serch with 
//it will retern an array full of strings that have the character 
function characterFinder (arrayOfStrings,serch) {
    let savedStrings = []
    for(let i = 0; i < arrayOfStrings.length; i++) {
        if(arrayOfStrings[i].includes(serch)) {
            savedStrings.push(arrayOfStrings[i])
        }
    }
    return savedStrings
}
//     for (let j = 0; j < alphabet1.length; j++) {
//             forLoopi.push(lettersWithStrings[i])
//             console.log()
//     }
// }
console.log(forLoopi)

// Write a function that takes a num1 and num2 and returns 
// whether num1 is divisible by num2.

//perams, num1, num2
//return boolean 

function isDivisible (num1, num2) {
    return (num1 % num2 === 0)
}



console.log("apple")