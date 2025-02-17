let handler = async (m, { conn }) => {
let ye = `@${m.sender.split("@")[0]}`
let esce = `╭───────.★..─╮
     𝐍𝐚𝐚 𝐬𝐭'𝐞 ꒰ᐢ. .ᐢ꒱
╰─..★.───────╯
⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣ ‧₊˚✧
╰─ - ̗̀✎ paid editᨖ
୨୧┇video 5k » 12k
୨୧┇foto hs/ls 2k
⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣ ‧₊˚✧
`
m.reply(esce)
}
handler.help = ['padit/paid']
handler.tags = ['store']
handler.command = /^(paid|padit)$/

module.exports = handler