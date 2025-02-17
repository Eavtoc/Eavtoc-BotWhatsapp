global.owner = ['6283892608057','6283820512521']  
global.mods = ['6283892608057','6283820512521'] 
global.prems = ['6283892608057','6283820512521']
global.nameowner = 'Eavtoc','Gina'
global.numberowner = '6283892608057','6283820512521'
global.mail = 'eavtoc@gmail.com','naa@gmail.com'
global.gc = 'https://eavtoc.taplink.ws/'
global.instagram = 'https://instagram.com/eavtoc_a','https://instagram.com/naa'
global.wm = '𝘚𝘦𝘯𝘢𝘯𝘨 𝘣𝘪𝘴𝘢 𝘮𝘦𝘮𝘣𝘢𝘯𝘵𝘶 >_<'
global.wait = '𝘔𝘰𝘩𝘰𝘯 𝘮𝘦𝘯𝘶𝘯𝘨𝘨𝘶 𝘴𝘦𝘥𝘢𝘯𝘨 𝘥𝘪𝘱𝘳𝘰𝘴𝘦𝘴...'
global.eror = '𝘔𝘢𝘢𝘧 𝘭𝘢𝘨𝘪 𝘦𝘳𝘰𝘳 𝘛_𝘛'
global.stiker_wait = '⫹⫺ 𝘚𝘢𝘣𝘢𝘳 𝘺𝘢 𝘴𝘵𝘪𝘬𝘦𝘳𝘯𝘺𝘢 𝘭𝘢𝘨𝘪 𝘱𝘳𝘰𝘴𝘦𝘴 𝘥𝘪𝘣𝘶𝘢𝘵...'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '3' // Peringatan maksimum Warn

global.autobio = false // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = false // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: true)
global.spam = false // Set true/false untuk anti spam (default: true)
global.gcspam = false // Set true/false untuk menutup grup ketika spam (default: false)
    


//INI WAJIB DI ISI!//
global.btc = 'Eavtoc' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

//Gausah diganti
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

global.APIKeys = { 
  'https://api.botcahx.eu.org': global.btc
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
