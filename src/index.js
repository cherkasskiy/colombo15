process.env["NTBA_FIX_319"] = 1;

const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const helper = require('./helper')
const kb = require('./keyboard-button')
const keyboard = require('./keyboard')
const fs = require('fs')

//const chatId = helper.getChatId(msg)

helper.logStart()



const bot = new TelegramBot(config.TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params:{
            timeout: 10



        }
    }





})



bot.on('message',msg => {
    const chatId = helper.getChatId(msg)
//  console.log('Working',msg.from.first_name )

    bot.on('polling_error', (error) => {
        console.log(error.code); // => 'EFATAL'
    });


    switch (msg.text) {
        case kb.home.Accessories:
            bot.sendMessage(chatId,`Выбирите аксессуары`, {
    reply_markup: {keyboard: keyboard.aks}
})
            break
        case kb.home.Doorhandles:
            bot.sendMessage(chatId,`Выбирите ручки`, {
                reply_markup: {keyboard: keyboard.Door}
            })

            break
        case kb.Door.NewsGenerale2:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/to/News 2018.pdf')
            break
        case kb.Door.Generale2:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/Generale - General.pdf')
            break
        case kb.Door.Ama:
         //   bot.sendDocument(chatId,'documents/ama.pdf')
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ama.pdf')

            break
        case kb.Door.Gira:
            //   bot.sendDocument(chatId,'documents/ama.pdf')
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/GIRA2.pdf')

            break
        case kb.Door.RoboquatroS:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ROBOQUATTROS1.pdf')

            break
        case kb.Door.Roboquatro:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ROBOQUATTRO2.pdf')
            break
        case kb.Door.Robodue:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ROBODUE1.pdf')
            break
        case kb.Door.Twitty:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/TWITTY.pdf')
            break
        case kb.Door.Taipan:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/TAIPAN.pdf')
            break
        case kb.Door.Slim:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/SLIM1.pdf')
            break
        case kb.Door.Robotre:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ROBOTRE1.pdf')
            break
        case kb.Door.Piuma:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/PIUMA1.pdf')
            break
        case kb.Door.Zelda:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ZELDA.pdf')
            break
        case kb.Door.Gaia:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/GAIA1.pdf')
            break
        case kb.Door.Viola:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/VIOLA2.pdf')
            break
        case kb.Door.Meta:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/META.pdf')
            break
        case kb.Door.Lara:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/LARA.pdf')
            break
        case kb.Door.Blazer:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/BLAZER.pdf')
            break
        case kb.Door.Alba:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ALBA.pdf')
            break
        case kb.Door.Elle:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ELLE1.pdf')
            break
        case kb.Door.Esprit:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ESPRIT1.pdf')
            break
        case kb.Door.Flessa:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/FLESSA1.pdf')
            break
        case kb.Door.Madi:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/MADI1.pdf')
            break
        case kb.Door.Cameo:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/CAMEO1.pdf')
            break
        case kb.Door.Ida:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/IDA1.pdf')
            break
        case kb.Door.Pegaso:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/PEGASO.pdf')
            break
        case kb.Door.Wing:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/WING.pdf')
            break
        case kb.Door.Tender:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/TenderDettagli.pdf')
            break
        case kb.Door.Tool:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/TOOL.pdf')
            break
        case kb.Door.Tecno:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/TECNO1.pdf')
            break
        case kb.Door.Peter:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/PETER1.pdf')
            break
        case kb.Door.Heidi:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/HEIDI2.pdf')
            break
        case kb.Door.Daytona:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/DAYTONA.pdf')
            break
        case kb.Door.Dea:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/DEA1.pdf')
            break
        case kb.Door.Electra:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ELECTRA.pdf')
            break
        case kb.Door.Mach:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/MACH1.pdf')
            break
        case kb.Door.Isy:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ISY.pdf')
            break
        case kb.Door.Accademia:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/Accademia.pdf')
            break
        case kb.Door.Prius:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/Prius.pdf')
            break
        case kb.Door.RobotCD41:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ROBOT-CD41.pdf')
            break
        case kb.Door.RobotCD75:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ROBOT-CD75.pdf')
            break
        case kb.Door.MillaLC41:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/MILLA-LC411.pdf')
            break
        case kb.Door.MillaLC31:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/MILLLA-LC31.pdf')
            break
        case kb.Door.TramaLC71:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/TRAMA-LC711.pdf')
            break
        case kb.Door.TramaLC81:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/TRAMA-LC811.pdf')
            break
        case kb.Door.Ellesse:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/ELLESSE.pdf')
            break
        case kb.Door.Olly:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/Olly_Dettagli.pdf')
            break
        case kb.Door.Fedra:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/FEDRA.pdf')
            break
        case kb.Door.Cut:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/CUT.pdf')
            break
        case kb.Door.BoldPT11:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/BOLD-PT111.pdf')
            break
        case kb.Door.BoldPT15:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/BOLD-PT151.pdf')
            break
        case kb.Door.Square:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/square.pdf')
            break

        case kb.Door.LouisXVI:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/LOUIS-XVI.pdf')
            break











        case kb.home.Сolombo:
            break


        case kb.aks.NewsGeneral3:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/AksNEWS2018.pdf')
            break


        case kb.aks.General3:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'documents/Collezioni - Collections.pdf')
            break

        case kb.aks.Road:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/Road.pdf')
            break
        case kb.aks.Forever:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/FOREVER2.pdf')
            break

        case kb.aks.Luna:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/LUNA.pdf')
            break
        case kb.aks.Alize:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/ALIZE.pdf')
            break

        case kb.aks.Land:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/LAND2.pdf')
            break

        case kb.aks.Link:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/LINK1.pdf')
            break

        case kb.aks.Look:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/LOOK4.pdf')
            break

        case kb.aks.Lulu:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/LULU2.pdf')
            break

        case kb.aks.Hermitage:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/HERMITAGE2.pdf')
            break

        case kb.aks.Portofino:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/PORTOFINO.pdf')
            break

        case kb.aks.APPENDITUTTO:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/APPENDITUTTO1.pdf')
            break
        case kb.aks.ClassicLine:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/ClassicLine.pdf')
            break

        case kb.aks.Basic:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/Basic.pdf')
            break

        case kb.aks.Nordic:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/NORDIC1.pdf')
            break
        case kb.aks.Plus:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/PLUS1.pdf')
            break

        case kb.aks.Time:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/TIME1.pdf')
            break

        case kb.aks.MIRRORS:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/FASHIONMIRRORS1.pdf')
            break

        case kb.aks.COMPLEMENTI:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/COMPLEMENTI.pdf')
            break

        case kb.aks.Colonne:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/PIANTANECOLONNE1.pdf')
            break
        case kb.aks.Ogget:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/OGGETTISTICA1.pdf')
            break

        case kb.aks.BasicQ:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/BASICQ.pdf')
            break

        case kb.aks.Khala:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/KHALA2.pdf')
            break

        case kb.aks.Melo:
            bot.sendMessage(chatId,`Загружаю....`)
            bot.sendDocument(chatId,'Doc/MELO1.pdf')
            break






        case kb.beck:
            bot.sendMessage(chatId,`Что вы хотите скачать ?`, {
                reply_markup: {keyboard: keyboard.home}
            })






    }
})

bot.onText(/\/start/, msg => {

    const text = `Привет !  ${msg.from.first_name}\n Меня зовут COLOMBO bot\n Я умею отправлять каталоги .... `
  
bot.sendMessage(helper.getChatId(msg), text, {
    reply_markup: {
        keyboard: keyboard.home


    }


    })

})





