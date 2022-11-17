// Goal: create/read/delete some employees
// employees have names and titles

class Employee {
    name
    title

    constructor(name, title) {
        this.name = name
        this.title = title
    }
}

const employees = []

// new ClassName(...) - call the constructor in order to
//                      create a new object of type
//                      ClassName
function create(name, title) {
    employees.push(new Employee(name, title))
}

create('Mad', 'Dictator')
create('Dav', 'Peasant')

function read() {
    for(let employee of employees) {
        console.log(employee.name + ', ' + employee.title)
    }
}

function remove(index) {
    employees.splice(index, 1)
}

remove(0)
read()