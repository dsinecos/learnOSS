const os = require('os');
const getos = require('getos');

// console.log(os.release());
// console.log(os.type());
// console.log(os.userInfo());
// console.log(os.arch());
// console.log(os.hostname());

getos(function(err, os) {
    console.log(JSON.stringify(os, null, "  "));
})