var name = global.nameowner
var numberowner = global.numberowner
var gmail = global.mail
const { 
default: 
makeWASocket,
BufferJSON,
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
downloadContentFromMessage, 
downloadHistory, 
proto,
getMessage, 
generateWAMessageContent, 
prepareWAMessageMedia 
} = require("@adiwajshing/baileys");
var handler = async (m, {
conn
}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;Eavtoc;;;
FN: ${name}
item.ORG: Creator Bot
item1.TEL;waid=6283892608057:6283892608057@s.whatsapp.net
item1.X-ABLabel:Nomor Pemilik
item2.EMAIL;type=INTERNET:${gmail}
item2.X-ABLabel:Email Owner
item3.ADR:;;🇮🇩 Indonesia
item3.X-ABLabel:Location
item4.TEL;waid=6283820512521:6283820512521@s.whatsapp.net
item4.X-ABLabel:Nomor Optional
item5.URL:https://bit.ly/eavtoc
item5.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'CN', 
            contacts: [{ vcard }] 
        }
    }
)
await conn.reply(m.chat, "Silahkan dichat jika ada keperluan dengan pemilik bot nya ya kak 😁", sentMsg)}
handler.command = handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.limit = false;
module.exports = handler;