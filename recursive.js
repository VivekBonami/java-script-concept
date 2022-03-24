// By First Method

let countdown = (num) => {
    console.log(num)
    let nextnumber = num - 1
    nextnumber > 1?countdown(nextnumber):console.log(1)
}
countdown(5)



// By second method
let countDown = function f(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        f(nextNumber);
    }
}

let newYearCountDown = countDown;
countDown = null;
newYearCountDown(10);



// Sum of n natural number 

function sum(num){
    if (num == 0){
        return 0
    }
    else{
        s = num + sum(num-1)
        return s
    }
}

console.log(sum(5))