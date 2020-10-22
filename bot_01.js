const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date - start
    const dateEHora = new Date().toLocalString();
    console.log(`(${dataEHora} \n Tempo de resposta: ${ms}ms`)
})

bot.on('text', ctx => ctx.reply('Ola Mundo Senai'))

bot.launch()