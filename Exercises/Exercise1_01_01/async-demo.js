var fs = require('fs');
function phoneNumber(err, data){
    console.log('data', data)
}
fs.readdir('../', phoneNumber);
console.log("this code is last");