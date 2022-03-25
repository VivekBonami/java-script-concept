console.log("Promises")

const Student = [
    {Name:'vivek',Subject : 'Math'},
    {Name:'Vikas',Subject : 'Science'},
    {Name: 'Aakash',Subject : 'GK'}
]

function enrollStudent(stu,callback){
    setTimeout(() => {
        Student.push(stu)
        callback()
        console.log("enroll student")
    }, 4000);
    
}


function getStudent(){
    setTimeout(() => {
        let s = ""
        Student.forEach((stu,index) => {
            s += `<li>${stu.Name}</li>`
        })
        document.body.innerHTML = s
        console.log('Get list of the student')
    }, 2000);
}

enrollStudent({Name:'Deepak',Subject:'Social Science'},getStudent)
getStudent()