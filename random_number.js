// generate a secret number between two numbers

const min = 1
const max = 20

let random_secret = Math.floor(Math.random() * (max - min + 1) + min)

let guess = 0
let number = 0
let hint = ''

do {
	number = parseInt(prompt(`Enter the number Between ${min} and ${max} ${hint}`))
	guess += 1

	number > random_secret ? hint = `and less than ${number}`:number < random_secret ? hint = `and greater than ${number}`:alert(`Congratulations You have Entered correct number after ${guess} guesses`)
}while(number != random_secret)