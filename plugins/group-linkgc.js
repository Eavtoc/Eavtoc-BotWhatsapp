let handler = async (m, { conn }) => {
  try {
    conn.reply(m.chat, `*Name Group* : ${await conn.getName(m.chat)}\n\n*Link Group* : https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat) +`, m)
  } catch {
    conn.reply(m.chat, `Jadikan @${conn.user.jid.split('@')[0]} sebagai admin untuk menggunakan perintah ini!`, m, { mentions: [conn.user.jid] })
  }
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(g(c)?ro?up)?$/i

handler.group = true
handler.admin = false

module.exports = handler