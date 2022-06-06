const CronJob = require('cron').CronJob
const checkUser = require('../services/CheckDeletedUsers')


// 6 caracteres, cada um é um elemento da data
// Segundo, Minuto, Hora, Dia, Mês, DiaSemana

const job = new CronJob('*/2 * * * *',() =>{
    checkUser()
    
})

module.exports = job