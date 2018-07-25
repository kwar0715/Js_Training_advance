
// employee object

let employee ={
  fistname : "",
  lastname : "",
  setEmployee : function(firstname,lastname){
    this.fistname = firstname;
    this.lastname = lastname;
  }
}

// bind the function

let setEmployee = employee.setEmployee.prototype.bind(employee);

// current
console.log(employee);

//set names
setEmployee("Kolitha","warnakulasooriya");

// current
console.log(employee);



// bind will take later calling. return bound 
// function and take it