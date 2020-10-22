const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)


//Executando o comando /Start
bot.start(ctx => {
    const nome = ctx.message.from.first_name + ' ' +
    crx.message.from.last_name
    ctx.reply(`Bem Vindo ${nome}!`)
})

//Evento de texto
bot.on('text', ctx =>{
    ctx.reply(`Texto: '${ctx.message.text}' recebido com sucesso`)
})

//Evento de Localização
bot.on('location', ctx =>{
    const location = ctx.message.location
    ctx.reply(`Sei que você está na Latitude: ${location.latitude} e Longitudo: ${location.longitude}`)
})

//Evento de contato
bot.on('contact', ctx =>{
    const contact = ctx.message.contact
    console.log(contact)
    ctx.reply(`Vou guardar o contado de ${contact.first_name} e telefone ${contact.phone_number}`)
})

//Evento de Voz
bot.on('voice', ctx =>{
    const voice = ctx.message.voice
    console.log(voice)
    ctx.reply(`Áudio recebido, ele possui ${voice.duration}`)
})

//Evento de Foto
bot.on('photo', ctx =>{
const photo = ctx.message.photo
console.log(photo)
photo.forEach(ft,i) => {
    ctx.reply(`Foto ${i} tem resolução de ${ft.widht}x$
     {
        
    }}`)
}
    
});

})


//Evento de Figurinha 
bot.on('sticker', ctx =>{
    const figurinha = ctx.message.sticker
    console.log(figurinha)
    ctx.replu(`Voce enviou uma figurinha correspondente ${}`)
})
