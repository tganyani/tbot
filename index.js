const express = require('express')
const {Telegraf} = require('telegraf')
require('dotenv').config()

const app = express()

const bot = new Telegraf(process.env.token)

bot.command('start',ctx=>{
    console.log(ctx.from)
    ctx.reply("Tgb ")
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})

const port = 5000 || process.env.PORT

app.listen(port,()=>console.log(`The server is app and running on port: ${port}`))
