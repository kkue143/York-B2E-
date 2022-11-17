// Goal: create/read/delete some employees
// employees have names and titles

const employees_names = []
const employees_titles = []

function create(name, title) {
    employees_names.push(name)
    employees_titles.push(title)
}

create('Mad', 'Dictator')
create('Dav', 'Peasant')

function read() {
    // initializer; check (do I keep going?); iterator
    // ++i adds it instantly whereas i++ adds it after
    for (let i = 0; i < employees_names.length; ++i) {
        console.log(employees_names[i] + ', ' + employees_titles[i])
    }
}
function remove(index) {
    employees_names.splice(index, 1)
    employees_titles.splice(index, 1)
}
remove(0)
read()

