let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye}
Mau script dari bot ini ya? boleh cek diweb kak :\n• https://bit.ly/eavtoc
`
m.reply(esce)
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler