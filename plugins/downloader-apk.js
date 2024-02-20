import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `هاذا الأمر مخصص لتنزيل التطبيقات من aptoide \n\n ex:\n .apkdl whatsapp \n .apkdl facebook lite \n`;

  try {
    const apkId = encodeURIComponent(args.join(' '));
    const response = await fetch(`https://vihangayt.me/download/apk?id=${apkId}`);
    const data = await response.json();

    if (data.status) {
      const apkData = data.data;
      const message = `
*Informasi APK*
Nama: ${apkData.name}
Last Update: ${apkData.lastup}
Package: ${apkData.package}
Size: ${apkData.size}
Icon: ${apkData.icon}
Download Link: ${apkData.dllink}
      `;
      await conn.sendFile(`wait`);
    } else {
      conn.reply(m.chat, 'Tidak dapat menemukan informasi APK', m);
    }
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan', m);
  }
};

handler.help = ['apkdl']
handler.tags = ['downloader']
handler.command = /^(apkdl|downloadapk|apkdownload)$/i

export default handler;
