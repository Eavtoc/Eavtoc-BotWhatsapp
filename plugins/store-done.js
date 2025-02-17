let handler = async (m, { conn }) => {
let ye = `@${m.sender.split("@")[0]}`
let esce = `ᯓᡣ𐭩 *Transaksi Done* ✅リ
${ye}
Terimakasih atas pesanan anda ⨳
 I Really Appreciate It ⊹ ࣪ ˖
• from 𝗡𝗮𝗮 𝘀𝘁'𝗲 ʚɞ ☆
`
m.reply(esce)
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(done)$/i

module.exports = handler