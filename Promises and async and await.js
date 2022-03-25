// function getUser(){
//     return [{username:"john",email:'vivek.9718470@gmail.com'},
//     {username:'vivek',email:'vivek.9718470484@gmail.com'}]
// }


// function findUser(username){
//     const users = getUser()
//     const user = users.find((user) => user.username == username)
//     return user
// }


// console.log(findUser('vivek'))



// function getUser(){
//     let users = []
//     setTimeout(() => {
//         users = [{username:"john",email:'vivek.9718470@gmail.com'},
//         {username:'vivek',email:'vivek.9718470484@gmail.com'}]
//     },1000)
//     return users;
// }


// console.log(getUser())




// Creating Promises

const posts = [
    {title:'Post One',body : 'This is a post one'},
    {title: 'Post two',body : 'This is a post two'}
]

// function getPost(){
//     setTimeout(() => {
//         let output = ''
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output
//     },1000)
// }




// function createPost(post,callback){
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000);
// }


// getPost()

// // createPost({title:'Post Three',body : 'This is the third Post'})
// // getPost()
// // getPost()
// // getPost()
// createPost({title:'Post Three',body : 'This is the third Post'},getPost)
// getPost()





// function createPost(post){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             posts.push(post)
//             const error = false
            
//             if (!error){
//                 resolve()
//             }else {
//                 reject('something went wrong')
//             }
//         }, 3000);
        
//     })
//     setTimeout(() => {
        
//     }, 3000);

// }



// async await

async function demo(){
    console.log("inside demo")
    const response = await fetch('https://api.github.com/users')
    console.log("before users")
    const users = await response.json()
    console.log("resolved")
    return users
}


console.log("Before calling demo")
let a = demo()
console.log("After calling demo")
console.log(a)
a.then(data => console.log(data))
console.log("last line of this code")