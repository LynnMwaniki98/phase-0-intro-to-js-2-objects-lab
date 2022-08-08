let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
} 

function updateEmployeeWithKeyAndValue(employee, key, value){
    let employee1 = {...employee}
    employee1[key] = value
    return employee1
}
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee.streetAddress = "12 Broadway";
   return employee
 }
 function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee}
    delete newEmployee["name"]
    return newEmployee
 } 
 function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    return employee
 }