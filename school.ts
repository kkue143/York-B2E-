let school = []
class School {
    private teacher:string
    private subject:string
    private students:object

    constructor(teacher:string,subject:string,students:object){
        this.teacher = teacher
        this.subject = subject
        this.students = students
    }
    printOut():void{
        console.log("Teacher: " + this.teacher )
        console.log("Subject: " + this.subject)

        for(let student in this.students){
            console.log('Student' + ' '+ student +": "+ this.students[student])
        }
    }
}

let elementary = new School("Elwyn", "coding", {"1":"tanner","2":"saba","3":"del"})
elementary.printOut()




// function create(teacher:string,subject:string,students:object){
//     school.push(new School(teacher, subject, students))
// }
//This is not needed but I used it to change and array into and object
// function createStudents(students):object{
//     let a = {}
//     for(let i = 0; i < students.length;i++)
//         a[i+1] = students[i]
//     return a
// }
// let b = createStudents(['tanner','saba','del','marquis','joshua','emmanual','kristen','brian','quinn','oliver','luke','raul','carlton'])
// console.log(JSON.stringify(b))
// create("Elwyn", "coding", {"1":"tanner","2":"saba","3":"del"})
// school[0].printOut()