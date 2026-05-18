function myFunction1() {
  var carName = "Volvo";  // Function Scope
}

function myFunction2() {
  let carName = "Volvo";  // Function Scope
}

function myFunction3() {
  const carName = "Volvo";  // Function Scope
}


// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
