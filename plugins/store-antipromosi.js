let handler = async (m, { conn, command, text }) => {
  await conn.sendMessage(m.chat, { delete: m.key})
}
handler.customPrefix = /(OPEN?:\/\/)?[\da-z\.-]+\.[a-z\.]{2,6}(\/([^\s]*))?/ig
handler.command = new RegExp()

module.exports = handler