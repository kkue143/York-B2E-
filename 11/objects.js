// Goal: create/read/delete some employees
// employees have names and titles

const employees = []

// Object: list of key, value pairs
// coupling objects that should be coupled
// fewer opportunities to create bugs
function create(new_name, new_title) {
    employees.push({
        name: new_name,
        title: new_title
    })
}

create('Mad', 'Dictator')
create('Dav', 'Peasant')

function read() {
    for (let employee of employees) {
        console.log(employee.name + ', ' + employee.title)
    }

//    for (let i = 0; i < employees_names.length; ++i) {
//    let employee = employees[i]
//    console.log(employees_names[i] + ', ' + employees_titles[i])
//    }
}

function remove(index) {
    employees.splice(index, 1)
}

remove(0)
read()