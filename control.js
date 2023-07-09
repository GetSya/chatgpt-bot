/**
 * Very Thanks To Dika Ardnt.
 * Amirul
 * Contact Me on wa.me/6285849261085
 * Original https://github.com/DikaArdnt
 * Remake : Pebri
 */
 
require('@fnc')
require('module-alias/register')
require('./config')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    downloadContentFromMessage,
    generateWAMessageFromContent,
    proto,
    delay,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@whiskeysockets/baileys')

const fs = require('fs')
const util = require('util')
const path = require('path')
const yts = require("yt-search");
const dl = require('@bochilteam/scraper');
const JoApi = require('@phaticusthiccy/open-apis')
const axios = require('axios')
const gugel = require('googlethis')
const cheerio = require('cheerio')
const rmvbg = require('removebg-wrapper')
const ms = require("ms")
const moment = require("moment-timezone");
const { config, createAudioFromText } = require('tiktok-tts')
const { color } = require('./lib/color.js')
const { pinterest, stickersearch } = require("./lib/scraper/nyekrep")
const { webp2mp4File } = require("./lib/cv.js")
const { upload } = require("./lib/uploads.js")
const { TiktokDownloader } = require("./lib/scraper/tiktokdl.js")
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("./lib/game.js");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance } = require("./lib/limit.js");
const { addPrem, deletePrem, checkPrem} = require("./lib/prem2.js");
const { twitter } = require("./lib/scraper/twitter.js")
const { exec, spawn, execSync } = require("child_process")
const _prem = require("./lib/premium");
const Replicate = require('replicate')
  const replicate = new Replicate({
  auth: "r8_IrWhmFuiXDTW4y0ZVXvBB6ODmH56ifn1mTjWa", //Api Gueh
});


// Game
let tebakgambar = []
let tebakkata = []
let siapakahaku = []
let caklontong = []
let tebaklagu = []

//ssession tt
const tiktokresi = "2a78c6d3b550e355dc01cb366b146ab4" //Api Punya Gua anjing


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
	apiKey: `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`,
});
const openai = new OpenAIApi(configuration);

const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, otpkode, makeid, getRandom, getGroupAdmins } = require('./lib/function')
const { P } = require('pino')


/// DATABASE
let daftar = JSON.parse(fs.readFileSync('./assets/db/daftar.json'));
let antilink = JSON.parse(fs.readFileSync('./assets/db/antilink.json'));
let premium = JSON.parse(fs.readFileSync('./assets/db/premium.json'));
let prem2 = JSON.parse(fs.readFileSync('./assets/db/prem2.json'));
let chatbot = JSON.parse(fs.readFileSync('./assets/db/chatbot.json'));
let limit = JSON.parse(fs.readFileSync('./assets/db/limit.json'));
let balance = JSON.parse(fs.readFileSync('./assets/db/balance.json'));
let glimit = JSON.parse(fs.readFileSync('./assets/db/glimit.json'));


module.exports = bob = async (bob, m, chatUpdate, store, welcome, mentioned) => {
    try {
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const content = JSON.stringify(m.message)
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%/^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶/∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "/" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const CmD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await bob.decodeJid(bob.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const tgl = moment.tz('Asia/Jakarta').format('DD/MM/YY')
        const isMedia = /image|video|sticker|audio/.test(mime)

        const chats = m.type === "conversation" && m.message.conversation ? m.message.conversation : m.type === "imageMessage" && m.message.imageMessage.caption ? m.message.imageMessage.caption : m.type === "videoMessage" && m.message.videoMessage.caption ? m.message.videoMessage.caption : m.type === "extendedTextMessage" && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : m.type === "buttonsResponseMessage" && quotedMsg.fromMe && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : 
        m.type === "templateButtonReplyMessage" && quotedMsg.fromMe && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.type === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId : m.type === "listResponseMessage" && quotedMsg.fromMe && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : "";

        // Group
        const groupMetadata = m.isGroup ? await bob.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = groupAdmins.includes(m.sender)
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const isPremium = isCreator ? true : _prem.checkPremiumUser(sender, premium)
        const DaftarAnjay = daftar.includes(m.sender)
        const isWelcome = m.isGroup ? welcome.includes(m.chat) ? true : false : false
        const isChatBot = m.isGroup ? chatbot.includes(m.chat) ? true : false : false


        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid


        //Extensi Media Message
        const isImage = (m.mtype == 'imageMessage')
		const isVideo = (m.mtype == 'videoMessage')
		const isSticker = (m.mtype == 'stickerMessage')
		const isAudio = (m.mtype == 'audioMessage')
		const isDocument = (m.mtype == 'documentMessage')
		const isQuotedMsg = (m.mtype == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
    


        // Public & Self
        if (!bob.public) {
            if (!m.key.fromMe) return
        }

        //** cmd
        const CmDPlugins = isCmd ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null

        //** plugins
        for (let name in plugins) {
            let plugin = plugins[name]
            if (plugin.CmD && plugin.CmD.includes(CmDPlugins)) {
                let turn = plugin.CmD instanceof Array ?
                    plugin.CmD.includes(CmDPlugins) :
                    plugin.CmD instanceof String ?
                    plugin.CmD == CmDPlugins :
                    false
                if (!turn) continue 
                try {
                await plugin.exec(m, bob, quoted, pushname, {
                    args,
                    CmD,
                    text,
                    prefix,
                    command
                })
                } catch (e) {
                   m.reply(util.format(`*(⁠☉⁠｡⁠☉⁠)!* Upss... error pada plugins *_${plugin.CmD}_*\n\n${e}`))
                }
                console.log('pesan melalui plugins sistem')
            }
        }

        		// Premium
		_prem.expiredCheck(bob, premium)

        // function
        async function instagram(url) {
            let res = await axios("https://indown.io/");
            let _$ = cheerio.load(res.data);
            let referer = _$("input[name=referer]").val();
            let locale = _$("input[name=locale]").val();
            let _token = _$("input[name=_token]").val();
            let { data } = await axios.post(
              "https://indown.io/download",
              new URLSearchParams({
                link: url,
                referer,
                locale,
                _token,
              }),
              {
                headers: {
                  cookie: res.headers["set-cookie"].join("; "),
                },
              }
            );
            let $ = cheerio.load(data);
            let result = [];
            let __$ = cheerio.load($("#result").html());
            __$("video").each(function () {
              let $$ = $(this);
              result.push({
                type: "video",
                thumbnail: $$.attr("poster"),
                url: $$.find("source").attr("src"),
              });
            });
            __$("img").each(function () {
              let $$ = $(this);
              result.push({
                type: "image",
                url: $$.attr("src"),
              });
            });
          
            return result;
          }
          


        // Anti link
        if (m.isGroup && !isCreator && isAntiLink && !isGroupAdmins && isBotGroupAdmins){
            if (body.includes(`https://chat.whatsapp.com`)) {
                bob.sendMessage(m.chat, {text: `*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`})
                var number = m.sender
      bob.groupParticipantsUpdate(m.chat, [number], "remove")
            }
        }
        const reply = (teks) => {
			bob.sendMessage(m.chat, { text: teks }, { quoted: m})
		}
        const fakereply = (teks) => {
			bob.sendMessage(m.chat, { text: teks }, { quoted: fake})
		}
        const sendbut = (jid, text, pref, textbut, footer) => {
			let buttons = [{ buttonId: pref, buttonText: { displayText: textbut }, type: 1 }]
            let buttonMessage = {text: text, footer: footer, buttons: buttons, headerType: 2 }
            bob.sendMessage(jid, buttonMessage, { quoted: m })
        }
        const pickRandom = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }
        function monospace(string) {
            return '```' + string + '```'
        }
        function ngetag(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = bob.sendMessage(m.chat, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = bob.sendMessage(m.chat, { text: teks, mentions: mems }, { quoted: m })
		      return res
 		    }
		}
        function monospace(string) {
            return '```' + string + '```'
            }
        const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return bob.sendMessage(m.chat, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: m })
		}

        async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(m.message.videoMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(m.message.stickerMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(m.message.audioMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			}
		}
        
        const jimp_1 = require('jimp')
        async function pepe(media) {
        const jimp = await jimp_1.read(media)
        const min = jimp.getWidth()
        const max = jimp.getHeight()
        const cropped = jimp.crop(0, 0, min, max)
        return {
            img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
            preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
        }
    }
    
//fake

const fake2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast" //status@broadcast
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": `Hallo ${pushname}`,
            "title": `Hmm`,
            'jpegThumbnail': global.thumb
        }
    }
}

const fake = {
    key: { 
    fromMe: false,
    participant: `0@s.whatsapp.net`, ...(m.chat ? 
    { remoteJid: "41798898139-1429460331@g.us" } : {}) 
    },
    message: { 
    "extendedTextMessage": {
    "text": `Hallo _*${pushname} 👋*_`,
    "title": `Hmm`,
    'jpegThumbnail': fs.readFileSync('media/logo.png')
    }
    } 
    }

    // GAME 
    cekWaktuGame(bob, tebakgambar)
    if (isPlayGame(m.chat, tebakgambar) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, tebakgambar)) {
    var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, tebakgambar)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /tebakgambar`
    bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    tebakgambar.splice(getGamePosi(m.chat, tebakgambar), 1)
    }
    }
    cekWaktuGame(bob, tebakkata)
    if (isPlayGame(m.chat, tebakkata) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, tebakkata)) {
    var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, tebakkata)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /tebakkata`
    bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    tebakkata.splice(getGamePosi(m.chat, tebakkata), 1)
    }
    }
    cekWaktuGame(bob, siapakahaku)
    if (isPlayGame(m.chat, siapakahaku) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, siapakahaku)) {
    var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, siapakahaku)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /siapakahaku`
    bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    siapakahaku.splice(getGamePosi(m.chat, siapakahaku), 1)
    }
    }
    cekWaktuGame(bob, caklontong)
    if (isPlayGame(m.chat, caklontong) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, caklontong)) {
    var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, caklontong)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /caklontong`
    bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    caklontong.splice(getGamePosi(m.chat, caklontong), 1)
    }
    }
    cekWaktuGame(bob, tebaklagu)
    if (isPlayGame(m.chat, tebaklagu) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, tebaklagu)) {
    var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, tebaklagu)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /tebaklagu`
    bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    tebaklagu.splice(getGamePosi(m.chat, tebaklagu), 1)
    }
    }
    //Akhir
    
    // Premium
    _prem.expiredCheck(bob, premium)
    let yutu = `https://youtu${m.text.slice(13)}`

if (m.text.includes(yutu)) {
    if (isLimit(m.sender, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek Point Yang Tersedia`)
                    limitAdd(sender, limit)
var url = yutu
var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
var dl_url = await yt.audio['128kbps'].download()
bob.sendMessage(m.chat, {document: {url: dl_url}, fileName: yt.title + `.mp3`, mimetype: 'audio/mp4', caption: yt.title}, {quoted: m})
}
let tt = `https://vt.tiktok${m.text.slice(17)}`

if (m.text.includes(tt)) {
    if (isLimit(m.sender, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek Point Yang Tersedia`)
                    limitAdd(sender, limit)
var url = tt
dl.savefrom(url).then ( data => {
reply(`*[ TIKTOK ]*\n\nTitle : ${data[0].meta.title}\nDurasi : ${data[0].meta.duration}\n\n_Wait A Minute._`)
bob.sendMessage(m.chat, {video: {url: data[0].url[0].url}, caption: data[0].meta.title})
})
}
let tt2 = `https://www.tiktok.com/${m.text.slice(23)}`

if (m.text.includes(tt2)) {
    if (isLimit(m.sender, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek Point Yang Tersedia`)
                    limitAdd(sender, limit)
var url = tt2
dl.savefrom(url).then ( data => {
reply(`*[ TIKTOK ]*\n\nTitle : ${data[0].meta.title}\nDurasi : ${data[0].meta.duration}\n\n_Wait A Minute._`)
bob.sendMessage(m.chat, {video: {url: data[0].url[0].url}, caption: data[0].meta.title})
})
}
let tt3 = `https://vm.tiktok${m.text.slice(17)}`

if (m.text.includes(tt3)) {
    if (isLimit(m.sender, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek Point Yang Tersedia`)
                    limitAdd(sender, limit)
var url = tt3
dl.savefrom(url).then ( data => {
reply(`*[ TIKTOK ]*\n\nTitle : ${data[0].meta.title}\nDurasi : ${data[0].meta.duration}\n\n_Wait A Minute._`)
bob.sendMessage(m.chat, {video: {url: data[0].url[0].url}, caption: data[0].meta.title})
})
}
let fbdl = `https://www.facebook.com/${m.text.slice(25)}`

if (m.text.includes(fbdl)) {
    if (isLimit(m.sender, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek Point Yang Tersedia`)
                    limitAdd(sender, limit)
var url = fbdl
dl.savefrom(url).then ( data => {
reply(`*[ FACEBOOK ]*\n\nTitle : ${ data[0].meta.title}\nSize : HD\n\n_Wait A Minute._`)
bob.sendMessage(m.chat, {video: {url: data[0].hd.url}, caption: data[0].meta.title})
})
}
let igdl = `https://www.instagram.com/${m.text.slice(26)}`

if (m.text.includes(igdl)) {
    if (isLimit(m.sender, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek Point Yang Tersedia`)
                    limitAdd(sender, limit)
var url = igdl
reply(`*[ INSTAGRAM ]*\n\n_Wait A Minute._`)
instagram(url).then( data => {
for ( let i of data ) {
if (i.type === "video") {
bob.sendMessage(m.chat, {video: {url: i.url}}, {quoted: m})
} else if (i.type === "image") {
bob.sendMessage(m.chat, { caption: `Sukses, Follow Instagram : @arsrfii`, image: { url: i.url }})
}
}
}).catch(() => reply(`Eror mas. P in owner coba`))
}

let twt = `https://twitter.com/${m.text.slice(20)}`

if (m.text.includes(twt)) {
    if (isLimit(m.sender, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek Point Yang Tersedia`)
                    limitAdd(sender, limit)
var url = twt
dl.savefrom(url).then( data => {
reply(`*[ TWITTER ]*\n\nTitle : ${data[0].meta.title}\n\n_Wait A Minute._`)
if (data[0].url[1].type === "mp4") {
bob.sendMessage(m.chat, {video: {url: data[0].url[1].url}})
} else if (data[0].url[1].type === "jpg") {
bob.sendMessage(m.chat, {image: { url: data[0].url[1].url }})
}
}).catch(() => reply(`Eror mas. P in owner coba`))
}

let cp = `https://www.capcut.com/${m.text.slice(23)}`

if (m.text.includes(cp)) {
    if (isLimit(m.sender, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek Point Yang Tersedia`)
                    limitAdd(sender, limit)
var url = cp
capcut(url).then ( data => {
reply(`*[ CAPCUT ]*\n\nUsername : ${data.nama}\nUsed : ${data.used} Pemakai\n\n_Wait A Minute._`)
bob.sendMessage(m.chat, {video: {url: data.video}, caption: `${data.used} Telah Di Pakai`})
} )
}

    
async function loading() {
    const { key } = await bob.sendMessage(m.chat, {text: '「▱▱▱▱▱▱▱▱▱▱」Loading...'}, { quoted: m });
         await delay(1000);
         await bob.sendMessage(m.chat, { text: '「▰▰▱▱▱▱▱▱▱▱」20%', edit: key})
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▱▱▱▱▱▱」40%', edit: key})
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▱▱▱▱」60%', edit: key})
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▰▰▱▱」80%', edit: key})
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▰▰▰▰」100%', edit: key})
        bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▰▰▰▰」Success✓', edit: key})
      }
async function meriset2() {
    const { key } = await bob.sendMessage(m.chat, {text: '「▱▱▱▱▱▱▱▱▱▱」Loading...'}, { quoted: m });
         await delay(1000);
         await bob.sendMessage(m.chat, { text: '「▰▰▱▱▱▱▱▱▱▱」20%', edit: key})
         await delay(1000);
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▱▱▱▱▱▱」40%', edit: key})
         await delay(1000);
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▱▱▱▱」60%', edit: key})
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▰▰▱▱」80%', edit: key})
         await bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▰▰▰▰」100%', edit: key})
        bob.sendMessage(m.chat, { text: '「▰▰▰▰▰▰▰▰▰▰」Success Mereset✓\Merestart Bot....', edit: key})
      }
async function loading2() {
    const { key } = await bob.sendMessage(m.chat, {text: 'Mencari 🔍. 0%'}, { quoted: m });
         await delay(1000);
         await bob.sendMessage(m.chat, { text: 'Mencari 🔍. 10%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mencari 🔍. 40%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mencari 🔍. 60%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mencari 🔍. 80%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mencari 🔍. 100%', edit: key})
        bob.sendMessage(m.chat, { text: 'Mencari 🔍.\nKetemu!', edit: key})
      }
async function meriset() {
    const { key } = await bob.sendMessage(m.chat, {text: 'Mereset Poin.... = 0%'}, { quoted: m });
         await delay(2000);
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 5%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 10%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 15%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 20%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 25%', edit: key})
         await delay(2000);
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 30%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 35%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 40%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 45%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 50%', edit: key})
         await delay(2000);
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 55%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 60%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 65%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 70%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 75%', edit: key})
         await delay(2000);
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 80%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 85%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 90%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 95%', edit: key})
         await bob.sendMessage(m.chat, { text: 'Mereset Poin.... = 100%', edit: key})
        bob.sendMessage(m.chat, { text: 'Mereset Poin.... = SUKSES!', edit: key})
        
      }

function randomNomor(min, max = null) {
    if (max !== null) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
    return Math.floor(Math.random() * min) + 1
    }
    }
        // Push Message To Console && Auto Read
        if (m.message) {
            addBalance(m.sender, randomNomor(60), balance)
            bob.readMessages([m.key])           
        }


        /*Privasi User!
        if (!m.isGroup) {
            try {
                await bob.chatModify({
                    delete: true,
                    lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]
                },
                m.sender)
            } catch (e) {
                reply(`Habis Restart. Silahkan Ulangi Kembali Command nya ya`)
            } 
        }*/
        
         if (!m.isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
            if (isCmd && m.isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))

var LimitKu = `${getLimit(m.sender, limitCount, limit)}/${limitCount}`
const menuku = `Hayy *${pushname}* 👋

Ini Adalah Robot ChatGPT
Robot Ini Bisa Membantu Kamu
Dalam Berbagai Hal Seperti
Menulis Skripsi, Membuat Cerita
Membuat Lagu, Mengarang Pidato
Dan Lain Lain

Bot Ini Bisa Kamu Masukan Ke Grup
Kamu Dengan Cara Ketik ${prefix}owner.
Silahkan Chat Owner Terlebih Dahulu
Untuk Dimasukan Ke Dalam Grup Kalian`

const menu2 = `Hayy *${pushname}* 👋

Ini Adalah Robot ChatGPT
Robot Ini Bisa Membantu Kamu
Dalam Berbagai Hal Seperti
Menulis Skripsi, Membuat Cerita
Membuat Lagu, Mengarang Pidato
Dan Lain Lain

Kirim "${prefix}bot on" Untuk Mengaktifkan
Dan Kirim "${prefix}bot off" Untuk Menonaktifkan`
//_< Link MediaFire >_
/*if (!chats) {
    try {
        var url = chats
    var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
    var dl_url = await yt.audio['128kbps'].download()
    bob.sendMessage(m.chat, {image: {url: yt.thumbnail}, caption: `*[ YOUTUBE MP3 ]*\n\nTitle : ${yt.title}\nSize : 128kbps\n_Audio Sedang Dikirim..._`})
    bob.sendMessage(m.chat, {audio: {url: dl_url}, mimetype: 'audio/mp4'}, {quoted: m})
    } catch (e) {
        console.log(`awok`)
    } 
}*/
        switch (command) { 
            case 'menu': case 'dashboard': case 'help': case 'cara':{
                if (m.isGroup) {

                    let send = {
                        text: menu2,
                        mentions: [sender],
                        mimetype: 'application/rar',
                        contextInfo: {
                        externalAdReply: {
                            title: `GPT CHAT BOT - ${prefix}`,
                            body: `Hayyy ${pushname}`,
                            thumbnail: fs.readFileSync(`./media/chatgpt.png`),
                            sourceUrl: "https://my.arsrfii.repl.co",
                            mediaUrl: "?",
                            renderLargerThumbnail: true,
                            showAdAttribution: false,
                            mediaType: 1
                        }
                    },
                }
                bob.sendMessage(m.chat, send, {quoted: m})
            } if (!m.isGroup) {
                let send = {
                    text: menuku,
                    mentions: [sender],
                    mimetype: 'application/rar',
                    contextInfo: {
                    externalAdReply: {
                        title: `${pushname}`,
                        body: `Hayyy ${pushname}`,
                        thumbnail: fs.readFileSync(`./media/chatgpt.png`),
                        sourceUrl: "https://my.arsrfii.repl.co",
                        mediaUrl: "?",
                        renderLargerThumbnail: true,
                        showAdAttribution: false,
                        mediaType: 1
                    }
                },
            }
            bob.sendMessage(m.chat, send, {quoted: m})
            }
            }
            break
            case 'chatbot': case 'bot':{
                if (!isGroupAdmins) return reply(`Fitur Ini Hanya Di Aktifkan Oleh Admin`)
                if (q.toLowerCase() === "on") {
                  if (isChatBot) return reply(`ChatBot Telah aktif`)
                  chatbot.push(m.chat)
                  fs.writeFileSync('./assets/db/chatbot.json', JSON.stringify(chatbot, null, 2))
                  reply(`Sukses mengaktifkan BOT GPT di grup ini`)
                } else if (q.toLowerCase() === "off") {
                  if (!isChatBot) return reply(`CHATBOT GPT telah nonaktif`)
                  var posi = chatbot.indexOf(m.chat)
                  chatbot.splice(posi, 1)
                  fs.writeFileSync('./assets/db/chatbot.json', JSON.stringify(chatbot, null, 2))
                  reply(`Sukses menonaktifkan GPT BOT di grup ini`)
                } else {
                  reply(`Pilih on atau off\nExample : ${CmD} on`)
                }
            }
            break/**/
            case 'owner': {
                sendContact(m.chat, global.owner[0], 'Owner Arasyaa')
                reply(`Ini Kontak Pemilik Bot Aku.\nHanya Menerima Message Bukan Call.`)
            }
            break
                    //Akhir owner menu
                    default:
                    if (m.isGroup) {
                        
                        if (isQuotedMsg) {
                        if ( isChatBot ) {

                                if (m.text) {
                                    console.log("->[\x1b[1;32mNew\x1b[1;37m]", color('Question From', 'yellow'), color(pushname, 'lightblue'), `: "${m.text}"`)
                                    bob.sendPresenceUpdate("composing", m.chat);
                                    try {
                                        const response = await openai.createCompletion({
                                        model: "text-davinci-003",
                                        prompt: m.text,
                                        temperature: 0,
                                        max_tokens: 4000,
                                        stop: ["Ai:", "Human:"],
                                        top_p: 1,
                                        frequency_penalty: 0.2,
                                        presence_penalty: 0,
                                    })
                                    reply(response.data.choices[0].text.trim())
                                } catch (e) {
                                    console.log(`Eror Apinya Mas`)
                                } 
                            }  
                        }
                        
                    }
                    }
                    if (!m.isGroup) {
                        if (m.text) {
                console.log("->[\x1b[1;32mNew\x1b[1;37m]", color('Question From', 'yellow'), color(pushname, 'lightblue'), `: "${m.text}"`)
                bob.sendPresenceUpdate("composing", m.chat);
                try {
                    const response = await openai.createCompletion({
                        model: "text-davinci-003",
                        prompt: m.text,
                        temperature: 0,
                        max_tokens: 4000,
                        stop: ["Ai:", "Human:"],
                top_p: 1,
                frequency_penalty: 0.2,
                presence_penalty: 0,
            })
            reply(response.data.choices[0].text.trim())
        } catch (e) {
            console.log(`Eror Apinya Mas`)
        } 
    }  
        }
            if (budy.startsWith('x')) {
                if (!isCreator) return reply(mess.owner)
                
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(2)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }


                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(`${err}`)
                        if (stdout) return reply(stdout)
                    })
                }

        }


    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update ${__filename}`)
    delete require.cache[file]
    require(file)
})