// day count in a month program

let year = 2000
let month = 2
let daycount

switch (month){
  case 1:
  case 3:
  case 5 :
  case 7 :
  case 8 :
  case 10 :
  case 12 :
    daycount = 31
    break
  case 4:
  case 6:
  case 9:
  case 11:
    daycount = 30
    break
  case 2:
    year % 4 == 0 ? (year % 100 == 0 ? (year % 400 == 0?daycount = 28:daycount = 29):daycount = 28):daycount = 29
    break
  default :
    daycount = -1
}
console.log(daycount)