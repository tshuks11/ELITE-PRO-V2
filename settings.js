const fs = require('fs')
const chalk = require('chalk')

//BOT SETTINGS//
global.xprefix = '.'
global.ownername = 'TemplerMD'
global.botname = 'TemplerMD'
global.ytname = "YT: CODED-BY-LOYD"
global.socialm = "GitHub: tshuks11"
global.location = "Harare, Zimbabwe"
global.ownernumber = '263783350189'

//BOT SETTINGS 2//
global.premium = ["263783350189"] //Premium 
global.websitex = "https://youtube.com/@CODED-BY-LOYD"
global.wagc = "https://whatsapp.com/channel/0029"
global.themeemoji = '👨🏼‍💻'
global.wm = "ELITE-PRO-V2"
global.botscript = 'https://github.com/EliteProTech/Elite-Pro-V2'
global.packname = "Sticker By"
global.author = "TEMPLER-MD\n\n+263783350189"
global.creator = "+263783350189@s.whatsapp.net"
global.elitepropp = 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg'

//DEFAULT SETTINGS//
global.hituet = 0
global.typemenu = 'v1' // v1, v2 too v9
global.typereply = 'v2' // v1, v2 and v3
global.autoblocknumber = '92' //autoblock country
global.antiforeignnumber = '91' //anti foreign number
// TOGGLE CMDS: Enable=true Disable=false
global.welcome = false //welcome/left in groups
global.anticall = false //blocks user that call
global.autoswview = false // view status
global.adminevent = false //show promote/demote mess
global.groupevent = false //show update messages in group chat
global.autoreact = false //React to messages

//DEFAULT SETTINGS 3//
global.mess = {
    limit: 'Your limit is up!',
    nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable it',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}

global.thumb = fs.readFileSync('./EliteProMedia/theme/elitepro.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
