let handler = async (m, { conn }) => {
let ye = `@${m.sender.split("@")[0]}`
let esce = `╭───────.★..─╮
     𝐍𝐚𝐚 𝐬𝐭'𝐞 ꒰ᐢ. .ᐢ꒱
╰─..★.───────╯
     /)    /)
    (｡•ㅅ•｡)〝₎₎ Format topup✦₊ ˊ˗ 
. .╭∪─∪────────── ✦ ⁺.
. .┊ ◟ 𐐪 Name            :
. .┊﹒ ੭ id server       :
. .┊﹒𐐪 jenis order    :
. .┊ ◟੭ jumlah order :
   ╰─────────────  ✦ ⁺.
`
m.reply(esce)
}
handler.help = ['form']
handler.tags = ['store']
handler.command = /^(form)$/

module.exports = handler