let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`https://i.supa.codes/Hvihs`).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `
Yg mau hd-in foto bisa pake bot satunya, soalny dibot ini hd nya jelek 🙏🏼😅
- https://wa.me/6287825685574

Oh iya kalo mau hasil hd nya lebih jernih lagi kalian bisa kirim fotonya via document ya terus document nya di reply pakai pesan .hd
Contoh pemakaian seperti gambar diatas ya
`, m)
}

handler.help = ['hd']
handler.tags = ['tools']
handler.command = /^(hd|remini|hd2|remini2)$/
module.exports = handler