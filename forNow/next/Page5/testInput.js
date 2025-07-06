

function test() {
  let mine = ' ' + document.getElementById('name').value.trim().toLowerCase();
  let numTester = [];
  let charTester = [];
  for (let value of mine.split('')) {
    if (value != ' ' && `${value}`.codePointAt(0) < 97  || `${value}`.codePointAt(0) > 122) {
      //numTester.splice(0, numTester.length);
      numTester.push("Error! Name includes invalid Characters " + value)
    }
    
  }
  
  if (mine.includes(' ')) {
    for (let values of mine.split(' ')) {
      if (values.length < 2 || values.length > 15) {
        charTester.splice(0, charTester.length);
        charTester.push('This \" ' + values + ' \" has less than 3');
      }
      else {
        charTester.splice(0, charTester.length);
        
      }
    }
  }
 
  if (numTester == '' && charTester == '') {
    document.getElementById('err').innerHTML = '<span style="color: lime;">✓ Name Available</span>';
  }
  else {
    document.getElementById(`err`).innerHTML = '<span style="color: red;">× Name includes invalid characters</span>';
  }
}

