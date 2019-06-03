
const testFun = (param) => {
  console.log(param.splice(0,10))
}

try{
  testFun('this Should be an array so because splice doesn\'t work on strings')
}catch(error){
  console.log(error.stack)
  console.log(error.message)
}



//COMPILE TIME ERROR
if(1{
console.log('this wille never get logged because the compile time error')
};

//RUNTIME ERROR
console.log(10/0, 'this wont get logged either because it is impossible to divide by zero')