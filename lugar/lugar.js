const axios = require('axios').default
const apiKey = require('../constants/apiKey').key
const getLatLng = async (direccion) => {
    const url = encodeURI(`https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=${apiKey}`)
    let respuesta = await axios.get(url)
    if (respuesta.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para ${direccion}`)
    }
    const resultados = respuesta.data.results[0]
    const longName = resultados.formatted_address
    const location = resultados.geometry.location
    return {
        longName,
        lat: location.lat,
        lng: location.lng
    }
}
module.exports = {
    getLatLng
}