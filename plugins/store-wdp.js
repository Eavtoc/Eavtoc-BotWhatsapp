let handler = async (m, { conn }) => {
let ye = `@${m.sender.split("@")[0]}`
let esce = `╭───────.★..─╮
     𝐍𝐚𝐚 𝐬𝐭'𝐞 ꒰ᐢ. .ᐢ꒱
╰─..★.───────╯
⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣ ‧₊˚✧
╰─ - ̗̀✎ weekly diamond pass
୨୧┇27.000

ᝰ.ᐟ harga bisa berubah sewaktu²
boleh tanya dulu sebelum tf.
⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣ ‧₊˚✧
`
m.reply(esce)
}
handler.help = ['wdp']
handler.tags = ['store']
handler.command = /^(wdp)$/

module.exports = handler