const key = require('../constants/apiKey').weatherKey
const axios = require('axios').default

const getClima = async (pos) => {
    const url = encodeURI(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lng}&appid=${key}&units=metric`)
    let respuesta = await axios.get(url)
    if (respuesta.data.cod !== 200){
        throw new Error(`Error obteniendo clima de ${pos.longName}`)
    }
    pos.temp= respuesta.data.main.temp
    return pos
}

module.exports = {
    getClima
}