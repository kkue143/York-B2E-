class School {
    teacher
    subject
    student

    constructor(teacher, subject, student) {
        this.teacher = teacher
        this.subject = subject
        this.student = student
    }
}

const students = []

function create(teacher, subject, student) {
    students.push (new School(teacher, subject, student))
}

create ('elwyn', 'js', 'kristen')
create ('elwyn', 'js', 'del')
create ('elwyn', 'js', 'saba')
create ('elwyn', 'js', 'tanner')
create ('elwyn', 'js', 'marquis')
create ('elwyn', 'js', 'brian')
create ('elwyn', 'js', 'luke')
create ('elwyn', 'js', 'joshua')

function read() {
    for (let student of students) {
        console.log(student.teacher + ', ' + student.subject + ', ' + student.student)
    }
}

read()