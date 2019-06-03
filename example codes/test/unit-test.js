const test = require( 'tape' ) ;

const unit = (number, number2) => {
  return Math.pow(number, number2)
}

const variable = 'Hello World'


test( 'testing if the the unit function makes to parameter to the power of the second parameter',  assert => {
  assert.equal( unit(2,2), 4, '....4 is 2 on the second power' ) ;
  assert.equal( unit(2,2), 2, '....4 is 2 on the second power' ) ;
  assert.equal( unit(2,2),'4', '....4 is 2 on the second power' ) ;
  assert.equal( unit(2,3), 8, '....8 is 2 on the third power' ) ;
  assert.equal( unit(3,2), 9, '....9 is 3 squared' ) ;
  assert.end() ;
}) ;

test( 'Testing if the variable is "Hello Wolrd"',  assert => {
  assert.equal(variable, 'Hello World', '...the variable is Hello World')
  assert.equal(variable, 'Helllo World', '...the variable is Hello World')
  assert.end() ;
})