module.exports = {
before: async function (m) {
    this.autosholat = this.autosholat || {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
    let id = m.chat
    let jadwalSholat = {
            Subuh: "04:30",
            Syuruq: "05:49",
            Dzuhur: "12:06",
            Ashar: "15:30",
            Maghrib: "18:17",
            Dhuha: "06:13",
            Isya: "19:30",
            Imsak: "04:39",
            Tahajud2: "00:06",
            Tahajud1: "22:07",
            Tahajud3: "02:06"
        }
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    let isActive = Object.values(this.autosholat).includes(true);
    if (id in this.autosholat && isActive) {
        return false
    }

    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu && !(id in this.autosholat)) {
            let caption = `Hai kak @${who.split`@`[0]},\nBagi yang ber-agama Islam\nWaktu _*${sholat}*_ telah tiba, ambilah air wudhu dan segeralah shalat.\n\n${waktu}\nWaktu ini berlaku untuk wilayah  Jakarta dan sekitarnya\n\nMohon maaf untuk yang non-Islam bisa mengabaikan pesan ini\nTerimakasih 😅🙏🏼`
            this.autosholat[id] = [
                this.reply(m.chat, caption, null, {
                    contextInfo: {
                        mentionedJid: [who]
                    }
                }),
                setTimeout(() => {
                    delete this.autosholat[id]
                }, 57000)
            ]
        }
    }
},
disabled: false
}
