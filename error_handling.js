try{
    console.log("This is inside try block")
    fucntionofdemo()
}catch(error){
    console.log("Something is going wrong")
    console.log(error)
    console.log(error.name)
    console.log(error.message)

}finally{
    console.log("I will always run wether error is present in the code or not but i will execute every time")
}