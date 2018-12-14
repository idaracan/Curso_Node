let direccion = {
    alias: 'd',
    desc: 'direccion de la ciudad para obtener el clima',
    demand:true
}
const argv = require('yargs').option('direccion',direccion).help().argv

module.exports = {
    argv
}