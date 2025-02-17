let handler = async (m, { conn }) => {
let ye = `@${m.sender.split("@")[0]}`
let esce = `╭───────.★..─╮
     𝐍𝐚𝐚 𝐬𝐭'𝐞 ꒰ᐢ. .ᐢ꒱
╰─..★.───────╯
⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣ ‧₊˚✧
╰─ - ̗̀✎ starlight 
୨୧┇33.000

ᝰ.ᐟ harga bisa berubah sewaktu²
boleh tanya dulu sebelum tf.
⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣ ‧₊˚✧
`
m.reply(esce)
}
handler.help = ['sl/starlight']
handler.tags = ['store']
handler.command = /^(sl|starlight)$/i

module.exports = handler