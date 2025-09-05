const employees =[

    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 }
]

const totalEmployees = employees.map((employee, index) => `<p>${employee.id}.  ${employee.name}: ${employee.department} - ${employee.age} - ${employee.salary}</p>`);
document.getElementById('employeesDetails').innerHTML=totalEmployees;

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employeess)=> acc + employeess.salary,0);
    alert(`Total Salaries: ${totalSalaries}`);
};