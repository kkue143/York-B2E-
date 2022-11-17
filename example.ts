// typescript vs javascript
// javascript - interpreted language: node executes/interprets the JS code
// C++ - compiled language: directly converted to machine code
// typescript - weird language: converted into Javascript then executed like JS

// TS is strongly typed, JS is loosely typed
// it is reducing opportunities to create bugs
// tsc can better understand your intent and check for errors
// linting - analyzing code w/o compiling

let i: number // i has a value of zero and a type of number
i = 5
// i = '5' does not work

// Goal: create/read/delete some employees
// employees have names and titles

// in general, you want to encapsulate fields
// encapsulate - hide inside of an object/class
//              - better control the use of being encapsulated

class Employee {
    private name: string
    private title: string

    constructor(name: string, title: string) {
        this.name = name
        this.title = title
    }

    print(): void {
        console.log(this.name + ', ' + this.title)
    }
}

// 1. declare a constant variable called 'employees'
// 2. set its type to an array of Employee objects
// 3. initialize it to an empty array
const employees: Employee[] = []

// new ClassName(...) - call the constructor in order to
//                      create a new object of type
//                      ClassName
function create(name: string, title: string) {
    employees.push(new Employee(name, title))
}

create('Mad', 'Dictator')
create('Dav', 'Peasant')

function read(): void {
    for(let employee of employees) {
        employee.print()
    }
}

read()