let employees = [{id : 1, name : 'John', age : 40},
                {id : 2, name : 'Rajan', age : 25}
];

// create Employee
let createEmployee = (employee) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            employees.push(employee);
            let isDone = true;
            if(isDone){
                resolve();
            }
            else{
                reject('Employee creation is failed');
            }
        }, 2000)
    });
};

// get Employees
let getEmployees = () => {
    setTimeout(() => {
        let employeeRows = '';
        employees.forEach((employee) => {
            employeeRows += `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.age}</td>
                             </tr>`
        });
        document.querySelector('#table-body').innerHTML = employeeRows;
    }, 1000);
};

createEmployee({id : 3, name : 'Wilson', age : 45}).then(() => {
    getEmployees();
}).catch((err) => {
    console.error(err);
});