function iterators(values){
    let index = 0
    return {
        next : function(){
        if (index < values.length){
            return {
                value : values[index++],
                done : false
            }
        }
        else { 
            return {
                done : true
            }
        }
    }
    }
}

array = [1,2,3,4,5]
console.log(array)
console.log(iterators(array))
const arr = iterators(array)
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())