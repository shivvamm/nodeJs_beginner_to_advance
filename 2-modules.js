// Modules
// CommonJS used by node so that every file is a  module 

const names = require('./3-names') 
//console.log(names)

const data = require('./5-export_as_default')
const sayHi = require('./4-names_utils')
require('./6-mid_grenade')

//console.log(data);



sayHi('sam');
sayHi(names.firstName);
sayHi(names.lastName);