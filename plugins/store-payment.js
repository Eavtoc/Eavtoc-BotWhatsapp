let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`https://i.supa.codes/lJHiE`).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `
Silahkan tekan link dibawah ini lalu pilih sewa bot untuk menampilkan qris
> https://bit.ly/eavtoc
`, m)
}

handler.help = ['paymentbot/qrisbot']
handler.tags = ['store']
handler.command = /^(paybot|paymentbot|qrisbot)$/
module.exports = handler
