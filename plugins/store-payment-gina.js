let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`https://i.supa.codes/GC_MZ`).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `
⤷ pay e-walletˎˊ˗

✦ dana          ➜ 083820512521
✦ gopay        ➜ 083820512521
✦ s-pay         ➜ 083820512521
✦ sea bank  ➜ 901520627910

ᝰ.ᐟ
ⓘ fee e-walet rp.150p
ⓘ fee bank ke dana rp.500p
ⓘ bukti transaksi harap di lampirkan .ᐟ
ⓘ salah tf bukan salah saya .ᐟ

「 terimakasih 𖹭」

`, m)
}

handler.help = ['paymentnaa/qrisnaa']
handler.tags = ['store']
handler.command = /^(Qris|qris|Payment|paymentnaa|qrisnaa|pay|Pay|payment)$/
module.exports = handler
