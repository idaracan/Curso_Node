const argv = require('./config/yargs').argv
const getLatLng = require('./lugar/lugar').getLatLng
const getClima  = require('./clima/clima').getClima

getLatLng(argv.d).then().then(res => getClima(res)).then(res => console.log(res)).catch(error => console.log(error))

