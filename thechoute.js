// - - - - - 𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖔𝖘𝖔 - - - - -\\
  //   Creditos:                      \\
 //            Thechoute               \\
////////////// 𝕿𝖍𝖊 𝕮𝖍𝖔𝖚𝖙𝖊  \\\\\\\\\\\\\\\
const { 
    WAConnection,
    MessageType,
    Presence, 
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    ChatModification,
    waChatKey,
    WA_DEFAULT_EPHEMERAL,
    mentionedJid,
    prepareMessageFromContent, 
    Browsers,
    processTime
    } = require("@adiwajshing/baileys")
    const fs = require('fs');
    const prefix = '.'
  const crypto = require("crypto-js");        
  const CryptoJS = require("crypto-js");
  const ffmpeg = require("fluent-ffmpeg");
  const chalk = require('chalk');
  const imageToBase64 = require('image-to-base64');
  const speed = require('performance-now');
  const axios = require('axios');
  const fetch = require('node-fetch');
  const request = require('request');
  const fromBuffer = require('file-type');
  const FormData = require('form-data')
  //const zalgo = require('./lib/zalgo')
  const { spawn, exec, execSync } = require("child_process");
  const moment = require("moment-timezone");
  const yts = require('yt-search')
  const LeoGg = require('google-it');
  const LeoGgImg = require('g-i-s');
  const hx = require('hxz-api');
  const {convertSticker} = require("./lib/swm.js")
  const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
  const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
  const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
  const ban = JSON.parse(fs.readFileSync('./src/banned.json'))
  const conn = require("./lib/connect")
  const wa = require("./lib/wa")
  const Exif = require('./lib/exif');
  const exif = new Exif();
  const { color } = require("./lib/color");
  const {  getBuffer, h2k,  generateMessageID, getGroupAdmins,  getRandom, banner,  start,  info, success, close,} = require("./lib/functions");
  const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
  const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('./lib/banned.js')
  const {y2mateA, y2mateV} = require('./lib/y2mate.js')
  const { isFiltered, addFilter } = require('./lib/Addfilter')
  const config = JSON.parse(fs.readFileSync("./config.json"))
  const owner = config.owner
  const mods = config.mods
  const fake = 'Leon'
  var public = config.public
  
  //Redes Sociales
  const { gpwha, ytchoute, gitchoute, instachoute, whachoute,} = require ('./lib/redes')
  const { reglas, logos } = require ('./lib/reglas')
  //const {infocreador} = require ('./lib/exportaciones/infocreador')
  
  // - - 𝑬𝑿𝑷𝑶𝑹𝑻𝑨𝑪𝑰𝑶𝑵𝑬𝑺
  const { allmenu } = require ('./lib/baby/allmenu')
  const {janza, menuall, qmiembros, brillo, fimg, cnal} = require ('./lib/baby.js')

  const {bechoso} = require ('./lib/exportaciones/bechoso')
  const { vor } = require ('./lib/baby/vor')
  const { A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z } = require ('./lib/baby/verdad')
  const {R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16, R17, R18, R19, R20, R21, R22, R23, R24, R25, } = require ('./lib/baby/retos')
  //ᴘᴀʀᴀ ᴇʟ ᴍᴇɴᴜ ᴅᴇ ʙᴏᴛᴏɴᴇꜱ
  const { linkgp } = require ('./lib/exportaciones/linkgp')
  //Connet
  conn.connect()
  const leo = conn.leo
  /* 𝕱𝖚𝖓𝖈𝖎𝖔𝖓𝖊𝖘 | 𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖔𝖘𝖔 | 𝕿𝖍𝖊𝕮𝖍𝖔𝖚𝖙𝖊*/
  //𝕽𝖊𝖌𝖎𝖘𝖙𝖗𝖔
  const getRegisteredRandomId = () => {
      return _registered[Math.floor(Math.random() * _registered.length)].id
      }
      const addRegisteredUser = (userid, sender, age, time, serials) => {
      const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
      _registered.push(obj)
      fs.writeFileSync('./src/registered.json', JSON.stringify(_registered))
      }
      const checkRegisteredUser = (sender) => {
      let status = false
      Object.keys(_registered).forEach((i) => {
      if (_registered[i].id === sender) {
      status = true
      }
      })
          return status
      }
  
  //Fin de Funcion del Registro\\
  const add = function (from, orangnya) {
    leo.groupAdd(from, orangnya);};
  //
  leo.on('group-participants-update', async (anu) => {
    const _welcom = JSON.parse(fs.readFileSync('./src/welkom.json'))

    if (!_welcom.includes(anu.jid)) return
    try {
    const mdata = await leo.groupMetadata(anu.jid)
    console.log(anu)
    if (anu.action == 'add') {               
    num = anu.participants[0]  
    try {pushnem = choute.key.fromMe ? leo.user.name : conts.notify || conts.vname || conts.name || '-'
    } catch {pushnem = num.split('@')[0]}
    try {
    ppimg = await leo.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)} 
    catch {
    ppimg = 'https://centromedicomontemar.cl/wp-content/uploads/2015/06/sin-perfil.png'}  
    
    teks = 
`😙Hola, @${num.split('@')[0]}
*Bienvenido a ${mdata.subject}
    
Esperemos la pases bien y te gust el grupo.
Recuerda siempre seguir las reglas y mantener una formalidad respetuosa`
    let fotoP = await getBuffer(ppimg)
    leo.sendMessage(mdata.id, fotoP, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    
    }  else if (anu.action == 'remove') {
    num = anu.participants[0]
  
    teks = `
    @${num.split('@')[0]} Adios no se te extrañara, no comas nada del suelo que estan envenenando a los perros.`
    leo.sendMessage(mdata.id, teks, MessageType.text,{ contextInfo: {"mentionedJid": [num]}})
  
    } else if (anu.action == 'promote') {
    num = anu.participants[0]
    try { ppimg = await leo.getProfilePicture(`${num.split('@')[0]}@c.us`)
    } catch {ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    thu = await leo.getStatus(anu.participants[0], MessageType.text)
    teks = 
`👑 *NUEVO ADMIN* 👑
👤 *Nombre:* @${num.split('@')[0]}
📋 *INFO:* ${thu.status}
🌎 *Grupo:* ${mdata.subject}
*Felicitaciones eres uno de los administradores.*`
   let buff = await getBuffer(ppimg)
    leo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    } else if (anu.action == 'demote') {
    num = anu.participants[0]
    try {
    ppimg = await leo.getProfilePicture(`${num.split('@')[0]}@c.us`)
    } catch {
    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    thu = await leo.getStatus(anu.participants[0], MessageType.text)
    teks = 
`❌ *ADMIN MENOS* ❌
👤 *Nombre:* @${num.split('@')[0]}
📋 *INFO:* ${thu.status}
🌎 *Grupo:* ${mdata.subject} 
*F chota ya no eres administrador.*`
    let buff = await getBuffer(ppimg)
    leo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    }
    } catch (e) {
    console.log('Error : %s', color(e, 'red'))
    }
    }) 
        //
  
  leo.on('chat-update', async (choute) => {
      try {	  
      if (!choute.hasNewMessage) return
      if (!choute.messages) return
      if (choute.key && choute.key.remoteJid == 'status@broadcast') return
      choute = choute.messages.all()[0]
      if (!choute.message) return
      global.blocked
      choute.message = (Object.keys(choute.message)[0] === 'ephemeralMessage') ? choute.message.ephemeralMessage.message : choute.message
      const from = choute.key.remoteJid
      const type = Object.keys(choute.message)[0]        
      const quoted = type == 'extendedTextMessage' && choute.message.extendedTextMessage.contextInfo != null ? choute.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
      const typeQuoted = Object.keys(quoted)[0]
      const content = JSON.stringify(choute.message)
      const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
      const body = choute.message.conversation || choute.message[type].caption || choute.message[type].text || "" 
      chats = (type === 'conversation') ? choute.message.conversation : (type === 'extendedTextMessage') ? choute.message.extendedTextMessage.text : ''
      budy = (type === 'conversation' && choute.message.conversation.startsWith(prefix)) ? choute.message.conversation : (type == 'imageMessage') && choute.message.imageMessage.caption.startsWith(prefix) ? choute.message.imageMessage.caption : (type == 'videoMessage') && choute.message.videoMessage.caption.startsWith(prefix) ? choute.message.videoMessage.caption : (type == 'extendedTextMessage') && choute.message.extendedTextMessage.text.startsWith(prefix) ? choute.message.extendedTextMessage.text : ''
      var _0x56fb=["\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x44\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74","\x6D\x65\x73\x73\x61\x67\x65","","\x6B\x65\x79\x73","\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x62\x61\x73\x65\x36\x34","\x66\x69\x6C\x65\x53\x68\x61\x32\x35\x36"];resbutton= (type== _0x56fb[0])?choute[_0x56fb[2]][_0x56fb[0]][_0x56fb[1]]:_0x56fb[3];
      const commandstik=Object[_0x56fb[4]](choute[_0x56fb[2]])[0]== _0x56fb[5]?choute[_0x56fb[2]][_0x56fb[5]][_0x56fb[7]].toString(_0x56fb[6]):_0x56fb[3]

      const reply = (teks) => {	
          leo.sendMessage(from, teks, text, {sendEphemeral: true, quoted: choute})
          }
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
                    }
  
      if (prefix != "") {
      if (!body.startsWith(prefix)) {
      cmd = false
      comm = ""
      } else {
      cmd = true
      comm = body.slice(1).trim().split(" ").shift().toLowerCase()
      }
      } else {
      cmd = false
      comm = body.trim().split(" ").shift().toLowerCase()
      }
  
  
  const command = comm
    const crypto = require('crypto')
    const arg = chats.slice(command.length + 2, chats.length)
    const args = budy.trim().split(/ +/).slice(1)
    const isCmd = budy.startsWith(prefix)
    const q = args.join(' ')
    const soyYo = leo.user.jid
    const botNumber = leo.user.jid.split("@")[0]
    const ownerNumber = "18299897014@s.whatsapp.net"
    const OOowner  = "18299897014@s.whatsapp.net"
    const Oowner  = "18299897014@s.whatsapp.net"
    const isGroup = from.endsWith('@g.us')
    const sender = choute.key.fromMe ? leo.user.jid : isGroup ? choute.participant : choute.key.remoteJid
    const senderNumber = sender.split("@")[0]
              const jid = sender
    const meNumber = leo.user.jidi
    const itsMe = ownerNumber == botNumber
    const conts = choute.key.fromMe ? leo.user.jid : leo.contacts[sender] || { notify: jid.replace(/@.+/, '') }
    const pushname = choute.key.fromMe ? leo.user.name : conts.notify || conts.vname || conts.name || '-'
    const groupMetadata = isGroup ? await leo.groupMetadata(from) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const groupMembers = isGroup ? groupMetadata.participants : ''
    const groupAdmins = isGroup ? await wa.getGroupAdmins(groupMembers) : []
    const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
    const isAdmin = groupAdmins.includes(sender) || false
    const botAdmin = groupAdmins.includes(leo.user.jid)
    const isBan = cekBannedUser(sender, ban)
    const isRegister = checkRegisteredUser(sender)
    const isWelkom = isGroup ? welkom.includes(from) : false
    const isAntiLink = isGroup ? antilink.includes(from) : false
    const getLevel1 = getLevelingLevel(sender)      
    const Smname = choute.key.fromMe ? leo.user.jid : leo.contacts[sender] || { notify: jid.replace(/@.+/, '') }
      const mentionByTag = type == "extendedTextMessage" && choute.message.extendedTextMessage.contextInfo != null ? choute.message.extendedTextMessage.contextInfo.mentionedJid : []
      const mentionByReply = type == "extendedTextMessage" && choute.message.extendedTextMessage.contextInfo != null ? choute.message.extendedTextMessage.contextInfo.participant || "" : ""
      const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
      mention != undefined ? mention.push(mentionByReply) : []
      const mentionUser = mention != undefined ? mention.filter(n => n) : []
      const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? leo.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : leo.sendMessage(from, teks.trim(), extendedText, {quoted: choute, contextInfo: {"mentionedJid": memberr}})
}

  const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
    kma = gam1
const buttonMessages = {
locationMessage: {jpegThumbnail: kma},
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
leo.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
      
      const usedCommandRecently = new Set()
      
      const isImage = type == 'imageMessage'
      const isVideo = type == 'videoMessage'
      const isAudio = type == 'audioMessage'
      const isSticker = type == 'stickerMessage'
      const isContact = type == 'contactMessage'
      const isLocation = type == 'locationMessage'
      const isMedia = (type === 'imageMessage' || type === 'videoMessage')
      const isTexto = type == 'textMessage'

      typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = "Image"
        else if (isVideo) typeMessage = "Video"
        else if (isAudio) typeMessage = "Audio"
        else if (isSticker) typeMessage = "Sticker"
        else if (isContact) typeMessage = "Contact"
        else if (isLocation) typeMessage = "Location"
	      else if (isTexto) typeMessage = "text"

        const isQuoted = type == 'extendedTextMessage'
	      const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
        const isQuotedImage = isQuoted && typeQuoted == 'imageMessage'
        const isQuotedVideo = isQuoted && typeQuoted == 'videoMessage'
        const isQuotedAudio = isQuoted && typeQuoted == 'audioMessage'
        const isQuotedSticker = isQuoted && typeQuoted == 'stickerMessage'
        const isQuotedContact = isQuoted && typeQuoted == 'contactMessage'
        const isQuotedLocation = isQuoted && typeQuoted == 'locationMessage'


  const nivelActual = getLevelingLevel(sender)
              var rango = 'Aspirante'
              if (nivelActual == 10) {
                  rango = '*Aprendiz*'
              } else if (nivelActual == 20) {
                  rango = '*Novato*'
              } else if (nivelActual == 30) {
                  rango = '*Promesa*'
          } else if (nivelActual == 30) {
                  rango = '*Profesional*'
              } else if (nivelActual == 100) {
                  rango = '*Veterano*'
              } else if (nivelActual == 150) {
                  rango = '*Elite*'
              } else if (nivelActual > 200) {
                  rango = '*Elite Global🗡*'
              }
      const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
      leo.sendMessage(from, hasil, type, options).catch(e => {
      fetch(link).then((hasil) => {
      leo.sendMessage(from, hasil, type, options).catch(e => {
      leo.sendMessage(from, { url : link }, type, options).catch(e => {
        reply('_[ ! ] Error al descargar el archivo_')
        console.log(e)
      })
      })
      })
      })
      }
      const sendMediaURL = async(to, url, text="", mids=[]) =>{
        if(mids.length > 0){
            text = mentions(text, mids, true)
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
                mime = res.headers['content-type']
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            });
        };
        download(url, filename, async function () {
            console.log('');
            let media = fs.readFileSync(filename)
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            leo.sendMessage(to, media, type, { quoted: choute, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
            
            fs.unlinkSync(filename)
        });
    }
    const sendFile = async (archivo, nombreDeArchivo, comentario, tag, vn) => {
      tipo = await getBuffer(archivo)
      tipo2 = ''
      if (nombreDeArchivo.includes('m4a')){
      leo.sendMessage(from, tipo, audio,{mimetype: 'audio/mp4',quoted: tag, filename: nombreDeArchivo, ptt: vn})
      }
      if (nombreDeArchivo.includes('mp4')){
    leo.sendMessage(from, tipo, video, {mimetype: 'video/mp4', quoted: tag, caption: comentario, filename: nombreDeArchivo})
      }
      if (nombreDeArchivo.includes('gif')){
      leo.sendMessage(from, tipo, video, {mimetype: Mimetype.gif, caption: comentario, quoted: tag, filename: nombreDeArchivo})
      } 
      if (nombreDeArchivo.includes('png')){
      leo.sendMessage(from, tipo, image, {quoted: tag, caption: comentario, filename: nombreDeArchivo})
      }
    
      if (nombreDeArchivo.includes('webp')){
      leo.sendMessage(from, tipo, sticker, {quoted: tag})
      } else {
      tipo2 = nombreDeArchivo.split(`.`)[1]
      leo.sendMessage(from, tipo, document, {mimetype: tipo2, quoted: tag, filename: nombreDeArchivo})
      }
    }

  
  const moment = require('moment-timezone')
  const jm = moment.tz('America/Santo_Domingo').format('HH:mm:ss')  
  
const yo = `𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊`

const quecanciones = `
Porfavor, es nesesario que envies el link de la musica para poder continuar, si no sabes como sacar el link de un audio.

_Puedes ver el siguiente video_
__

*Link utilizado en el video*
_https://files.catbox.moe_`

  
const chui = 
`🎓 *Nombre:* ${pushname}
🎓 *Nivel:* ${getLevel1}
🎓 *XP:* ${getLevelingXp(sender)}
🎓 *Hora:* ${jm}

  *INFO DEL BOT*
🎓 *𝙽𝚘𝚖𝚋𝚛𝚎 :* BabyBechoso
🎓 *𝙲𝚛𝚎𝚊𝚍𝚘𝚛 :* @${Oowner.split('@')[0]}
🎓 *𝙾𝚂 :* ${leo.user.phone.device_manufacturer}
🎓 *𝚅𝚎𝚛𝚜𝚒𝚘𝚗 :* ${leo.browserDescription[2]}
🎓 *𝙽𝚊𝚟𝚎𝚐𝚊𝚍𝚘𝚛 :* ${leo.browserDescription[1]}
🎓 *𝚂𝚎𝚛𝚟𝚒𝚍𝚘𝚛:* ${leo.browserDescription[0]}S

  *INFO CREADOR* 
🎓 *Nombre:* 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 
🎓 *Instagram:* ${instachoute}
🎓 *Github:* ${gitchoute}
└────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* 」`

const kbla = 
`🎓 *Nombre:* ${pushname}
🐦 *Nivel:* ${getLevel1}
✨ *XP:* ${getLevelingXp(sender)}
🕐 *Hora:* ${jm}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
INFO DEL BOT
🎓 Creador: @${Oowner.split('@')[0]}
🎓 OS: ${leo.user.phone.device_manufacturer}
🎓 Version: ${leo.browserDescription[2]}
🎓 Navegador: ${leo.browserDescription[1]}
🎓 Servidor: ${leo.browserDescription[0]}`

const nivel = `
┌────「 *NIVEL ACTUAL* 」─
🎓 *Nombre:* ${pushname} 
🎓 *XP* ${getLevelingXp(sender)}
🎓 *Nivel* ${getLevel1} ➫ ${getLevelingLevel(sender)}
🎓 *Rango:* ${rango}
└────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* 」
` 
const cadmin = 
`┌────「 *SOLO ADMIN* 」─
🎓 *Bienvenida* ${prefix}welcome on
🎓 *Antilink:* ${prefix}antilink on
🎓 *Dar Admin:* ${prefix}promote
🎓 *Quitar Admin:* ${prefix}demote
🎓 *Mencion:* hidetag
🎓 *Lista de miembros:* ${prefix}miembros
🎓 *Eliminar:* ${prefix}kick
🎓 *Agregar:* ${prefix}add
🎓 *Abrir Gp:* ${prefix}grupo abrir
🎓 *Cerrar GP:* ${prefix}grupo cerrar
🎓 *Cambiar name GP:* ${prefix}nombre 
🎓 *Cambiar desc Gp:* ${prefix}descripcion
└────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* 」`

const juegos = 
`
┌────「 *JUEGOS* 」─
🎮 Vor: ${prefix}vor
👾 Adivinanzas: _Proximamente_
🎮 Dados: _Proximamente_
└────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* 」`

const cmiembros =
`
┌────「 *PUBLICOS* 」─
🎓 *Sticker:* ${prefix}sticker
🎓 *Sticker a Img:* ${prefix}sticker
🎓 *Lista de admin:* ${prefix}listadmin
🎓 *Linkg de GP:* ${prefix}link
🎓 *Top5:* ${prefix}top5
🎓 *Buscar Wp:* ${prefix}wp
🎓 *Buscar Img:* ${prefix}imagen
🎓 *Busqueda en Google:* ${prefix}google
🎓 *Descargar Musc:* ${prefix}ytmp3
🎓 *Descargar Video:* ${prefix}ytmp4
🎓 *Link del GP:* ${prefix}link
└────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* 」
`

const base = `
*Youtube:*
https://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1

*Instagram:*
https://www.instagram.com/the_choute_/

*Github:*
https://github.com/Thechoute

*Base:*
https://github.com/Thechoute/Base`

const infobot =
`
🎓 Creador: @${Oowner.split('@')[0]}
🎓 OS: ${leo.user.phone.device_manufacturer}
🎓 Version: ${leo.browserDescription[2]}
🎓 Navegador: ${leo.browserDescription[1]}
🎓 Servidor: ${leo.browserDescription[0]}
`
const infocreador = `
┌────「 *INFO CREADOR* 」─
🗣️ *Nombre:* 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 
☎️ *Numero:* @${OOowner.split('@')[0]}
📌 *Instagram:* ${instachoute}
📌 *Github:* ${gitchoute}
📌 *YouTube:* ${ytchoute}
`

const registro = `
*PORFAVOR ESCRIBE BIEN EL FORMATO DE REGISTRO:* 
${prefix}reg *Nombre|Edad* 
Con el *|* que los divide.
`

const install = `
Video Completo De Los Pasos Para Su Instalacion en caso que no sabes como hacerlos:

Pasos Para La Instalacion:

`
  
      ///Baby
    baby = {
      wait: '⌛ 𝐄𝐍 𝐏𝐑𝐎𝐂𝐄𝐒𝐎 ⌛',
      success: '✔️ 𝙎𝙐𝙎𝙎𝙀𝙎 ✔️',
      ferr: 'Intentalo de nuevo mas tarde',
      error: {
      stick: 'Mmmmm',
      Iv: 'Mmmmm'
      },
      only: {
          group: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐬𝐚𝐝𝐨 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.',
          benned: '𝐄𝐫𝐞𝐬 𝐮𝐧 𝐮𝐬𝐚𝐫𝐢𝐨 𝐛𝐚𝐧𝐞𝐚𝐝𝐨 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐛𝐨𝐭.',
          ownerG: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐝𝐨 𝐩𝐨𝐫 𝐞𝐥 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨.',
          ownerB: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐞𝐫 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐝𝐨 𝐩𝐨𝐫 𝐞𝐥 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐝𝐞𝐥 𝐁𝐨𝐭 \nEscribe: .creador \nPara contactar con el ',
          admin: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐬 𝐬𝐨𝐥𝐨 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨.',
          Badmin: '𝐁𝐨𝐭𝐜𝐢𝐭𝐨 𝐝𝐞𝐛𝐞 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧 𝐩𝐚𝐫𝐚 𝐩𝐨𝐝𝐞𝐫 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨',
          usrReg: `𝐍𝐨 𝐞𝐬𝐭𝐚𝐬 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨 \n𝐏𝐚𝐫𝐚 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐫𝐭𝐞 𝐮𝐭𝐢𝐥𝐢𝐳𝐚 *${prefix}reg*`
        }
      }
  /*  
    if (!isRegister) return reply(baby.only.usrReg)
    if (!isGroup) return reply(baby.only.group)
    if (!isAdmin) return reply(baby.only.admin)
    if (!botAdmin) return reply(baby.only.Badmin)
    if (isBan) return reply (baby.only.benned)  
case 'audio':
            addFilter(from)
            aud = fs.readFileSync('./media/audio/audio.mp3') 
            leo.sendMessage(from, aud, audio, {quoted: choute, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
            break
  
  */

//BOTONES
if (choute.message.buttonsResponseMessage){
  test = choute.message.buttonsResponseMessage.selectedButtonId
  if (test.includes(`owner`)){
      await wa.sendContact(from, '18299897014', "𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊")
      addFilter(from)
      addLevelingLevel(sender, 5)	}}

if (choute.message.buttonsResponseMessage){
  test = choute.message.buttonsResponseMessage.selectedButtonId
  if (test.includes(`listamenu`)){
    let lista = leo.prepareMessageFromContent(from,{
    "listMessage": {
    "title": `  *USUARIO* `,
    "description": `${kbla}`,
    "buttonText": "Selecciona tu menu",
    "listType": "SINGLE_SELECT",
    "sections": [
    { "title": `🫂 𝑴𝑬𝑵𝑼 𝑷𝑨𝑹𝑨 𝑨𝑮𝑹𝑼𝑷𝑶𝑺 🫂`,
    "rows": [
    {
    "title": '𝑻𝑶𝑫𝑶𝑺 𝑳𝑶𝑺 𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺',
    "rowId": `allmenu`
    },
    {
    "title": '𝑴𝑬𝑵𝑼 𝑺𝑶𝑳𝑶 𝑷𝑨𝑹𝑨 𝑨𝑫𝑴𝑰𝑵 ',
    "rowId": `admin`
    },
    {
    "title": '𝑴𝑬𝑵𝑼 𝑷𝑨𝑹𝑨 𝑻𝑶𝑫𝑶𝑺',
    "rowId": `miembros`
    },

    ]
    },
    {
    "title": `𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑺/𝑩𝑼𝑺𝑸𝑼𝑬𝑫𝑨𝑺🎮`,
    "rows": [
    {
    "title": '𝑳𝑶𝑮𝑶𝑺',
    "rowId": `Logos`
    }
    ]    
    },
    {
    "title": `🕹️ 𝑱𝑼𝑬𝑮𝑶𝑺 / 𝑬𝑵𝑻𝑹𝑬𝑻𝑬𝑵𝑰𝑴𝑰𝑬𝑵𝑻𝑶 🎮`,
    "rows": [
    {
    "title": '𝑱𝑼𝑬𝑮𝑶𝑺',
    "rowId": `juegos`
    }
    ]    
    },
    {
    "title": `𝘾𝙍𝙀𝘼𝘿𝙊𝙍 / 𝘿𝙐𝙀Ñ𝙊`,
    "rows": [
    {
    "title": 'Creador',
    "rowId": `creador`
    },
    ]    
    },{
    "title": `¿Quieres crear tu propio bot?`,
    "rows": [
    {
    "title": 'Base Limpia',
    "rowId": `Base`
    },
    {
    "title": 'Como instalar este bot',
    "rowId": `install`
    },
    ]    
    }
    ]
    }
    }, {quoted: choute}, {contextInfo: { mentionedJid: [sender,Oowner]}})
    leo.relayWAMessage(lista)  
      addFilter(from)
      addLevelingLevel(sender, 5)	}}

      //LISTA
if (choute.message.listResponseMessage){
test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
if (test.includes(`admin`)){
leo.updatePresence(from, Presence.composing)
if (!isRegister) return reply(baby.only.usrReg)
txtt =`${cadmin}`
buttons1 = [{buttonId:`A`,buttonText:{displayText: '𝑩𝑶𝑻𝑶𝑵 𝑺𝑰𝑵 𝑭𝑼𝑵𝑪𝑰𝑶𝑵'},type:1},]
imageMsg = (await leo.prepareMessageMedia(fs.readFileSync(`./media/imagen/admin.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
buttonsMessage = {
contentText: `${txtt}`,
footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊\nInstagram: instagram.com/the_choute_', imageMessage: imageMsg,
buttons: buttons1,
headerType: 4}
prep = await leo.prepareMessageFromContent(from,{buttonsMessage}, {quoted: brillo})
leo.relayWAMessage(prep)
leo.relayWAMessage(prep)
addFilter(from)
addLevelingLevel(sender, 5)	}}

if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`allmenu`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(baby.only.usrReg)
  txtt =`${allmenu}`
  buttons1 = [{buttonId:`A`,buttonText:{displayText: '𝑩𝑶𝑻𝑶𝑵 𝑺𝑰𝑵 𝑭𝑼𝑵𝑪𝑰𝑶𝑵'},type:1},]
  imageMsg = (await leo.prepareMessageMedia(fs.readFileSync(`./media/imagen/allmenu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
  buttonsMessage = {
  contentText: `${txtt}`,
  footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊\nInstagram: instagram.com/the_choute_', imageMessage: imageMsg,
  buttons: buttons1,
  headerType: 4}
  prep = await leo.prepareMessageFromContent(from,{buttonsMessage}, {quoted: menuall})
  leo.relayWAMessage(prep)
  leo.relayWAMessage(prep)
  addFilter(from)
  addLevelingLevel(sender, 5)	}}


//MiEMBROS
if (choute.message.listResponseMessage){
test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
if (test.includes(`miembros`)){
leo.updatePresence(from, Presence.composing)
if (!isRegister) return reply(baby.only.usrReg)
uptime = process.uptime()
txtt =`${cmiembros}`
buttons1 = [{buttonId:`A`,buttonText:{displayText: '𝑩𝑶𝑻𝑶𝑵 𝑺𝑰𝑵 𝑭𝑼𝑵𝑪𝑰𝑶𝑵'},type:1},]
imageMsg = (await leo.prepareMessageMedia(fs.readFileSync(`./media/imagen/fake.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
buttonsMessage = {
contentText: `${txtt}`,
footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊\nInstagram: instagram.com/the_choute_', imageMessage: imageMsg,
buttons: buttons1,
headerType: 4}
prep = await leo.prepareMessageFromContent(from,{buttonsMessage}, {quoted: qmiembros})
leo.relayWAMessage(prep)
leo.relayWAMessage(prep)
addFilter(from)
addLevelingLevel(sender, 5)	}}

if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`creador`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(baby.only.usrReg)
  uptime = process.uptime()
  await wa.sendContact(from, '18299897014', "𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊")
  leo.sendMessage(from, imagen, MessageType.image, {quoted: choute, caption: `${infocreador}`, contextInfo: {"forwardingScore": 508, "isForwarded": true, "externalAdReply": 
  {"title": `Hola ${pushname} 👋🏻`, 
  "body": `BabyBechoso`, 
  "mediaType": 2, 
  "thumbnail": fs.readFileSync(`media/imagen/creador.jpg`), 
  mediaUrl: "https://youtu.be/cxZ98u3Jqto"}}},
  {contextInfo: { mentionedJid: [sender,Oowner]}})  
  addFilter(from)
  addLevelingLevel(sender, 5)	}}


  if (choute.message.listResponseMessage){
    test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
    if (test.includes(`Logos`)){
    leo.updatePresence(from, Presence.composing)
    if (!isRegister) return reply(baby.only.usrReg)
    leo.sendMessage(from, `🔥 𝑳𝑰𝑺𝑻𝑨 𝑫𝑬 𝑳𝑶𝑮𝑶𝑺 🔥 \n${logos}`, MessageType.text, {quoted: choute, caption: `${logos}`, contextInfo: {"forwardingScore": 508, "isForwarded": true, "externalAdReply": 
    {"title": `🔥 𝑳𝑰𝑺𝑻𝑨 𝑫𝑬 𝑳𝑶𝑮𝑶𝑺 🔥 \nHola ${pushname} 👋🏻`, 
    "body": `BabyBechoso`, "mediaType": 2, 
    "thumbnail": fs.readFileSync(`media/imagen/baby.png`), 
    mediaUrl: "https://youtu.be/cxZ98u3Jqto"}}},
    {contextInfo: { mentionedJid: [sender,Oowner]}})    
    addFilter(from)
    addLevelingLevel(sender, 5)	}}

    if (choute.message.listResponseMessage){
      test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
      if (test.includes(`Base`)){
      leo.updatePresence(from, Presence.composing)
      if (!isRegister) return reply(baby.only.usrReg)
      uptime = process.uptime()
      leo.sendMessage(from, `🔥 SIGUEME EN YOUTUBE🔥 \n${base}`, MessageType.text, {quoted: choute, caption: `${base}`, contextInfo: {"forwardingScore": 508, "isForwarded": true, "externalAdReply": 
      {"title": `Hola ${pushname} 👋🏻`, 
      "body": `BabyBechoso`, "mediaType": 2, 
      "thumbnail": fs.readFileSync(`media/imagen/fake.jpg`), 
      mediaUrl: "https://youtu.be/cxZ98u3Jqto"}}},
      {contextInfo: { mentionedJid: [sender,Oowner]}})  
      addFilter(from)
      addLevelingLevel(sender, 5)	}}

    if (choute.message.listResponseMessage){
      test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
      if (test.includes(`install`)){
      leo.updatePresence(from, Presence.composing)
      if (!isRegister) return reply(baby.only.usrReg)
      uptime = process.uptime()
      leo.sendMessage(from, `🔥 PROCESO DE INSTALACION 🔥 \n${install}`, MessageType.text, {quoted: choute, caption: `${base}`, contextInfo: {"forwardingScore": 508, "isForwarded": true, "externalAdReply": 
      {"title": `COMO INSTALAR BOT BABY ACTUALIZADO`, 
      "body": `BabyBechoso`, "mediaType": 2, 
      "thumbnail": fs.readFileSync(`media/imagen/fake.jpg`), 
      mediaUrl: "https://youtu.be/cxZ98u3Jqto"}}},
      {contextInfo: { mentionedJid: [sender,Oowner]}})  
      addFilter(from)
      addLevelingLevel(sender, 5)	}}      

      if (choute.message.listResponseMessage){
        test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
        if (test.includes(`Canal`)){
        leo.updatePresence(from, Presence.composing)
        if (!isRegister) return reply(baby.only.usrReg)
        uptime = process.uptime()
        txtt =`${canal}`
        buttons1 = [{buttonId:`A`,buttonText:{displayText: '𝑩𝑶𝑻𝑶𝑵 𝑺𝑰𝑵 𝑭𝑼𝑵𝑪𝑰𝑶𝑵'},type:1},]
        imageMsg = (await leo.prepareMessageMedia(fs.readFileSync(`./media/imagen/fake.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
        buttonsMessage = {
        contentText: `${txtt}`,
        footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊\nInstagram: instagram.com/the_choute_', imageMessage: imageMsg,
        buttons: buttons1,
        headerType: 4}
        prep = await leo.prepareMessageFromContent(from,{buttonsMessage}, {quoted: cnal})
        leo.relayWAMessage(prep)
        addFilter(from)
        addLevelingLevel(sender, 5)	}}
        switch (commandstik) {
	
          case 't19jxCEBXiv22iZW4YPbXCMLGLbRq1tGNUKt8nMein8=':
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)
            if (!botAdmin) return reply(baby.only.Badmin)
                            if (choute.message.extendedTextMessage != undefined){
                            mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid
                if (!mentioned) return reply(`exampol xd: ${prefijo + command} @participante... o etiqueta el mensaje de la persona a eliminar`)
                await wa.setBio(from, `Baaaiii...`, '')
                if (mentionUser.length == 1)
                leo.groupRemove(from, mentionUser)
                } else {
                      wa.FakeTokoForwarded(from, `Baaaiii...`, '')
                leo.groupRemove(from, mentionUser)
                }
                break
        }

  switch (command) {
case 'bot':
            addFilter(from)
            aud = fs.readFileSync('./media/audio/audio.mp3') 
            leo.sendMessage(from, aud, audio, {quoted: choute, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
            break
  case 'reg':   
              if (isRegister) return reply('*Tu Ya Estas Registrado, o No Lo Recuerdas?*')
              if (!q.includes('|')) return  reply(`${registro}`)
              const nombre = q.substring(0, q.indexOf('|') - 0)
              const edad = q.substring(q.lastIndexOf('|') + 1)
              const momento = require('moment-timezone')
              const time = momento.tz('America/Santo_Domingo').format('HH:mm:ss')
              if(isNaN(edad)) return await reply('*La edad es numero no letras*')
              if (nombre.length >= 10) return reply(`Mi escriba un nombre con menos de 10 letras, no queremos un puente de letras`)
              if (edad > 30) return reply(`Pero-\n*Tienes mas de  30 años, no te puedes registrar, mejor cuida tus nietos :D*`)
              if (edad < 13) return reply(`Eres menor de 13 años, mejor vete a limpiarte el culo, que para ti no hay registro.\n*Si me das algo puedo hacer la vista gorda :D*`)
              try {
                  ppimg = await leo.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                  } 
                  catch {
                  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                  }
                  veri = sender                                                
              addRegisteredUser(sender, pushname, nombre, edad, time)
                  capt = `
  
  ┌────「 *REGISTRADO* 」─
  🎓 𝐔𝐒𝐄𝐑: _${pushname}_
  🎓 𝐍𝐎𝐌𝐁𝐑𝐄: _${nombre}_
  🎓 𝐄𝐃𝐀𝐃: _${edad}_
  🎓 𝐇𝐎𝐑𝐀: _${time}_
  └────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* 」
  Verificación completa usa *${prefix}menu* para ver el Menu`,
                  let; tampa = await getBuffer(ppimg)
                  leo.sendMessage(from, tampa, image, {quoted: choute, caption: capt})
                  break 
                  
                       
              
  
  case 'welcome':
  case 'bv':
  case 'bienvenidas':
  case 'bienvenida':
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              if (!isAdmin) return reply(baby.only.admin)
              if (args.length < 1) return reply(`*BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
              if ((args[0]) === 'on') {
              if (isWelkom) return reply('La bienvenida ya esta activa en este grupo')
              welkom.push(from)
              fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
              reply(`Bienvenida activada exitosamente para *${groupMetadata.subject}*`)
              } else if ((args[0]) === 'off') {
              if (!isWelkom) return reply('Bienvenida ya esta desactivada')
              welkom.splice(from, 1)
              fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
              reply(`La función de Bienvenida se desactivo en el grupo *${groupMetadata.subject}*`)
              } else {
              reply(`*BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
              }
              break
  
  case 'antilink':
  case 'antigp':
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)  
              if (!isGroup) return reply(baby.only.group)
              if (args.length < 1) return reply(`✳️ *ANTILINK *\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
              if ((args[0]) === 'on') {
              if (isAntiLink) return reply('✳️ Antilink ya está activo')
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(`✅ Se activo el *Antilink WhatsApp* en el grupo *${groupMetadata.subject}*`)
              } else if ((args[0]) === 'off') {
              if (!isAntiLink) return reply('✳️ Antilink ya está desactivado')
              antilinksplice(from, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(`Se desactivo el *Antilink WhatsApp* en el grupo *${groupMetadata.subject}*`)
              } else {
              reply(`*ANTIGRUPOS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
              }
              break
  
 case 'promote':
              if (!isGroup) return reply(baby.only.group)
                          if (!isAdmin) return reply(baby.only.admin)
                          if (!botAdmin) return reply(baby.only.Badmin)
                                          if (choute.message.extendedTextMessage != undefined){
                                          mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid
                              if (!mentioned) return reply(`exampol xd: ${prefix + command} @participante... o etiqueta el mensaje de la persona a eliminar`)
                              await wa.setBio(from, `Baaaiii...`, '')
                              if (mentionUser.length == 1)
                              leo.groupMakeAdmin(from, mentionUser)
                              } else {
                                    leo.sendMessage (from, `Baaaiii...`, '')
                              leo.groupMakeAdmin(from, mentionUser)
                              }
                              break

case 'demote':
                                if (!isGroup) return reply(baby.only.group)
                                if (!isAdmin) return reply(baby.only.admin)
                                if (!botAdmin) return reply(baby.only.Badmin)
                                                if (choute.message.extendedTextMessage != undefined){
                                                mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid
                                    if (!mentioned) return reply(`exampol xd: ${prefix + command} @participante... o etiqueta el mensaje de la persona a eliminar`)
                                    await wa.setBio(from, `Baaaiii...`, '')
                                    if (mentionUser.length == 1)
                                    leo.groupDemoteAdmin(from, mentionUser)
                                    } else {
                                          leo.sendMessage (from, `Baaaiii...`, '')
                                    leo.groupDemoteAdmin(from, mentionUser)
                                    }
                                    break                     
  case 'hidetag':
  case 'mencion':
      
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              if (!isAdmin) return reply(baby.only.admin)
              await wa.hideTag(from, args.join(" "))
              break
  
  case 'miembros':
  case 'todos':
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              if (!isAdmin) return reply(baby.only.admin)    
              leo.updatePresence(from, Presence.composing)
              members_id = []
              teks = (args.length > 1) ? body.slice(8).trim(): ''
              teks += ` *𝐓𝐨𝐭𝐚𝐥* : ${groupMembers.length}\n`
              for (let mem of groupMembers) {
              teks += `╠ @${mem.jid.split('@')[0]}\n`
              members_id.push(mem.jid)
              }
              mentions('*𝐌𝐈𝐄𝐌𝐁𝐑𝐎𝐒  𝐃𝐄𝐋  𝐆𝐑𝐔𝐏𝐎*\n╔════ 𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖔𝖘𝖔\n╠ ● '+teks+'╠═══════ *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* ═════\n╚══════', members_id, true)
              addFilter(from)
              break


case 'sticker':
case 's':
case 'stiker':
  case 'sticker':
    if (isMedia && !choute.message.videoMessage || isQuotedImage) {
                  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : choute
                  const media = await leo.downloadAndSaveMediaMessage(encmedia)
                  
                  ran = getRandom('.webp')
                            await ffmpeg(`./${media}`)
                                .input(media)
                                .on('start', function (cmd) {
                                    console.log(`comenzando : ${cmd}`)
                                })
                                .on('error', function (err) {
                                    console.log(`error : ${err}`)
                                    fs.unlinkSync(media)
                                     })
                                .on('end', async function () {
                                    console.log('FINALIZADO')
                                    await leo.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: choute })
                                        fs.unlinkSync(media)
                                        fs.unlinkSync(ran)
                                    })
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(ran)
                        } else if ((isMedia && choute.message.videoMessage.seconds < 11 || isQuotedVideo && choute.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : choute
                            const media = await leo.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                            ran = getRandom('.webp')
                            await ffmpeg(`./${media}`)
                                .inputFormat(media.split('.')[1])
                                .on('start', function (cmd) {
                                    console.log(`comenzado : ${cmd}`)
                                })
                                .on('error', function (err) {
                                    console.log(`error : ${err}`)
                                    fs.unlinkSync(media)
                                    tipo = media.endsWith('.mp4') ? 'video' : 'gif'
                                    reply(`Hubo un error al generar el STICKER`)
                                })
                                .on('end', async function () {
                                    console.log('Finish')

                                    await leo.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: choute })
                                        fs.unlinkSync(media)
                                        fs.unlinkSync(ran)
                                    })
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(ran)
                        } else {
                            reply(`Envíe una imagen con la etiqueta ${prefix} del título o una etiqueta de imagen que haya sido enviada \nLa duración de la etiqueta de video es de 1 a 9 segundos...`)
                        }
                        break

                        case 'takestick':
                          case 'robar':
                          if (!isQuotedSticker) return reply(`Etiqueta un stiquer y escribe: *${prefix}takestick nombre|autor*`)
                          const encmediats = JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                          var kls = q
                          var pack = kls.split("|")[0];
                          var author2 = kls.split("|")[1];
                          if (!q) return reply('*Y el nombre de autor y paquete?*')
                          if (!pack) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
                          if (!author2) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
                          const dlfile = await leo.downloadMediaMessage(encmediats)
                          reply(mess.wait)
                          const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
                          var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
                          var imageBuffer = new Buffer.from(mantap, 'base64');
                          leo.sendMessage(from, imageBuffer, sticker, {quoted: choute})
                          addFilter(from)
                          break

case 'toimg':
case 'aimg':
                            if (!isQuotedSticker) return reply(`send sticker and reply with caption ${prefix}toimg`)
                            if (choute.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                            reply(`Este comando solo sirve con stikers estaticos, para convertir un stiker a gif, usa: ${prefix}agif`)
                            } else {
                            var media1 = JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                            var media2 = await leo.downloadAndSaveMediaMessage(media1)
                            ran = getRandom('.png')
                            exec(`ffmpeg -i ${media2} ${ran}`, (err) => { 
                            fs.unlinkSync(media2)
                            if (err) {
                            reply(`error\n\n${err}`)
                            fs.unlinkSync(ran)
                            } else {
                            buffer = fs.readFileSync(ran)
                            leo.sendMessage(from, buffer, MessageType.image, {quoted: choute, caption: `${yo}`})
                            fs.unlinkSync(ran)
                            }
                            })
                            }
                            break
case 'agif':
                              agif = isQuotedSticker ? JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo : choute
                              reply('*Espera un momento...*')
                              owgig = await leo.downloadAndSaveMediaMessage(agif)
                              var rang = getRandom('.gif')
                              exec(`ffmpeg -i ${owgig} ${rang}`, (err) => {
                              fs.unlinkSync(owgig)
                              if (err) return reply('error')
                              toptg = fs.readFileSync(rang)
                              leo.sendMessage(from, toptg, MessageType.gif, {mimetype: 'video/gif', quoted: choute})
                              })
                              break
case 'ttp':
                            addFilter(from)
                            if (args.length < 1) return reply('Y el texto?')
                            var teks = encodeURIComponent(args.join(' '))
                            const ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${teks}`)
                            leo.sendMessage(from, ttp, sticker, {quoted: janza, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                            break
  
case 'exif':
                              if (!itsMe) return reply(`Este comando solo puede ser usado por *${yo}* ⚙`)
                              if (args.length < 1) return reply(`Forma de uso: *${prefix}exif nombre|autor*`)
                              if (!arg.split('|')) return reply(`Forma de uso: *${prefix}exif nombre|autor*`)
                              exif.create(q.split('|')[0], q.split('|')[1])
                              reply(`*El nombre de paquete de Stiker a cambiado a:* _${arg.split('|')[0]}\n*Y el autor a:* ${arg.split('|')[1]}`)
                              break                          

case "agregar":
case "añadir":
case "add":
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              if (!botAdmin) return reply(baby.only.Badmin)                
              if (
                  choute.message.extendedTextMessage === null ||
                  choute.message.extendedTextMessage === undefined
                )
                  return;
                if (
                  choute.message.extendedTextMessage.contextInfo.participant === undefined
                ) {
                  entah = choute.message.extendedTextMessage.contextInfo.mentionedJid;
                  if (entah.length > 1) {
                    var mems_ids = [];
                    for (let ids of entah) {
                      mems_ids.push(ids);
                    }
                    add(from, mems_ids);
                  } else {
                    add(from, [entah[0]]);
                  }
                } else {
                  entah = choute.message.extendedTextMessage.contextInfo.participant;
                  add(from, [entah]);
                }
                break
  
  
  case 'grupo':
              addFilter(from)
              if (!isGroup) return await reply(baby.only.group)
              if (!isAdmin) return await reply(baby.only.admin)
              if (!botAdmin) return await reply(baby.only.Badmin)
              if (args[0] === 'abrir') {
              leo.groupSettingChange(from, GroupSettingChange.messageSend, false).then(() => {
              wa.sendFakeStatus(from, "*Success open group*", "GROUP SETTING")
              })
              } else if (args[0] === 'cerrar') {
              leo.groupSettingChange(from, GroupSettingChange.messageSend, true).then(() => {
              wa.sendFakeStatus(from, "*Succes close group*", "GROUP SETTING")
              })
              } else {
              await reply(`Example: ${prefix}${command} open/close`)
              }
              break
  
  case 'nombre':
  case 'changename':
              addFilter(from)
              if (!isGroup) return await reply(baby.only.group)
              if (!isAdmin) return await reply(baby.only.admin)
              if (!botAdmin) return await reply(baby.only.Badmin)
              if (!isRegister) return reply(baby.only.usrReg)
              var newName = args.join(" ")
              leo.groupUpdateSubject(from, newName).then(() => {
              wa.sendFakeStatus(from, "EL NUEVO NOMBRE DEL GRUPO ES " + newName, "GROUP SETTING")
              })
              break
  
case 'descripcion':        
case 'changedescripcion':
              addFilter(from)
              if (!isGroup) return await reply(baby.only.group)
              if (!isAdmin) return await reply(baby.only.admin)
              if (!botAdmin) return await reply(baby.only.Badmin)
              var newDesc = args.join(" ")
              leo.groupUpdateDescription(from, newDesc).then(() => {
              wa.sendFakeStatus(from, "EL NUEVO NOMBRE DEL GRUPO ES  " + newDesc, "GROUP SETTING")
              })
              break

case 'play':
case 'ytmp3':
                reply(`*Espere un momento, su audio ${q} se esta descargando...*`)
                teks = args.join(' ')
                if (!teks.endsWith("-doc")){
                res1 = await yts(q).catch(e => {	
                reply('*NO HE ENCONTRADO LO QUE BUSCABAS*')
                })	
                let thumbInfo = ` [ *${res1.all[0].title}* ]
*Subido* ${res1.all[0].ago}
*Vistas :* ${res1.all[0].views}
*Duracion :* ${res1.all[0].timestamp}
*Canal :* ${res1.all[0].author.name}
*°Link del Canal :* ${res1.all[0].author.url}
*Elaudio se esta enviando*
_Esto puede demorar hasta 2 minutos, no hagas spam del comando_` 
                sendFileFromUrl(res1.all[0].image, image, {quoted: choute, caption: thumbInfo})
                res1 = await y2mateA(res1.all[0].url).catch(e => {
                pr21 = getJson(`https://api.zeks.xyz/api/ytmp3?apikey=hamilton20&url=${res1.all[0].url}`)	
                reply(`:D*`)
                sendFileFromUrl(pr21.result.url_audio, audio, {quoted: choute, mimetype: 'audio/mp4', filename: res1[0].output})
                //sendFileFromUrl(pr21.result.url_audio, audio, {quoted: choute, mimetype: 'audio/mp4', ptt: true, filename: res1[0].output})
                })
                sendFileFromUrl(res1[0].link, audio, {quoted: choute, mimetype: 'audio/mp4', filename: res1[0].output})
               // sendFileFromUrl(res1[0].link, audio, {quoted: choute, mimetype: 'audio/mp4', ptt: true, filename: res1[0].output})
                }
                addFilter(from)
                addLevelingLevel(sender, 5)		

case 'ytmp4':
                  if (!isRegister) return reply(baby.only.usrReg)
                  if (args.length < 1) return reply('Y el link?')
                  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Eu debes de darme el link de *YOUTUBE*')
                  teks = args.join(' ')
                  reply(mess.wait)
                  resyv = await y2mateV(teks).catch(e => {
                  reply('_ERROR :D, intentalo _')
                  })
                  result = `「  ${yo} 」
*°Titulo :* ${resyv[0].judul}
*°Tamaño :* ${resyv[0].size}
*°Calidad :* ${resyv[0].quality}p
*°Nombre :* ${resyv[0].output}
*°Output :* ${resyv[0].tipe}
_*El archivo se esta enviando.*_
                  `
                  sendFileFromUrl(resyv[0].thumb, image, {caption: result, quoted: choute})
                  sendFileFromUrl(resyv[0].link, video, {quoted: fvid, mimetype:'video/mp4', duration: 9999999999})
                  addFilter(from)
                  addLevelingLevel(sender, 5)		
                  break
            
case 'tts':
case 'voz':
            if (args.length < 1) return leo.sendMessage(from, 'Y el codigo de idioma? escribe el comando *idiomas* para ver la lista', text, { quoted: janza })
            const gtts = require('./lib/gtts')(args[0])
            if (args.length < 2) return leo.sendMessage(from, 'Escribe el texto', text, {quoted: janza})
            dtt = body.slice(8)
            ranm = getRandom('.mp3')
            rano = getRandom('.ogg')
            dtt.length > 300
            ? reply('Mira, si no sabes usar esto... mejor no lo agas 😤')
            : gtts.save(ranm, dtt, function() {
            leo.updatePresence(from, Presence.recording)
            leo.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: choute, mimetype: 'audio/mp4', duration: -999999999999999999, ptt:true, sendEphemeral: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
            fs.unlinkSync(ranm)
            })
            addFilter(from)
            break

case 'visto':
case 'sider':
              if (!isRegister) return reply(baby.only.usrReg)
              if (!isGroup) return reply(baby.only.group)
              infom = await leo.messageInfo(from, choute.message.extendedTextmessage.contextInfo.stanzaId)
              tagg = []
              teks = `*𝐄𝐬𝐭𝐞 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐡𝐚 𝐬𝐢𝐝𝐨 𝐯𝐢𝐬𝐭𝐨 𝐩𝐨𝐫:*\n\n`
              for(let i of infom.reads){
              teks += '@' + i.jid.split('@')[0] + '\n'
              teks += `𝐇𝐨𝐫𝐚: ` + moment(`${i.t}` * 1000).tz('America/Santo_Domingo').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
              tagg.push(i.jid)
              }
              mentions(teks, tagg, true)
              break
  
case 'listadmins':
case 'listadmin':
case 'adminlist':
case 'adminslist': 
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              adm = `*Este grupo* *${groupMetadata.subject}*\nTiene ${groupAdmins.length} Administradores.\n\n`
              no = 0
              for (let admon of groupAdmins) {
              no += 1
              adm += `[${no.toString()}] @${admon.split('@')[0]}\n`
              }
              mentions(adm, groupAdmins, true)
              break
  
case 'soporte':
case 'support':
              if (!isRegister) return reply(baby.only.usrReg)
              baby = `*Grupo soporte del Bot*\n\n${gpwha}`
              reply(baby) 
              break
  
case 'link':
case 'enlace':
              if (isBan) return reply (baby.only.benned)	
              if (!isRegister) return reply(baby.only.usrReg)
              addFilter(from)
              var link = await wa.getGroupInvitationCode(from)
              await wa.sendFakeStatus(from, link, "El lik de este grupo es")
              break
  
case 'chiste':
              if (isBan) return reply (baby.only.benned)	
              if (!isRegister) return reply(baby.only.usrReg)
              respuesta = [`¿Cuál es el colmo de un ciego?\n Enamorarse a primera vista.`, `*¿Qué le dijo un zapato a otro?* \n - Qué vida más arrastrada llevas. \n ¡MIRA LOS ZAPATOS QUE EXISTEN PARA ANDAR POR EL TECHO!`, `¿Qué le dijo un cable a otro cable? \n Somos los intocables.`, `*¿Qué le dijo batman al papel higiénico?* \n Tu eres el único que conoce mi baticueva.`, `¿Por qué llora un libro de matemáticas? \n ¡Porque tiene muchos problemas!`, `¿Qué está al final de todo? ¡La letra o!`, `¿Por qué el profe de música tiene una escalera? \n ¡Para poder llegar a las notas más altas!`, `¿Qué le dice una iguana a su hermana gemela? \n Somos iguanitas`, `*¿Cuál es el colmo del electricista?* \n ¡Que su mujer se llame Luz!`, `¿Cómo se dice pañuelo en japonés? \n Sacamoko`, `¿Cuál es el pez que huele mucho? \n ¡Peztoso!`, `¿Sabes cómo se queda un mago después de comer? \n Magordito` ]
              answer = respuesta[Math.floor(Math.random() * respuesta.length)]
              if (!q) return reply('Señor homosexual, pongale algo despues del comando y gracias.')
              reply(answer)
              addFilter(from)
              break
  
case 'owner':
case 'creador':
              await wa.sendContact(from, '18299897014', "𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊")
              leo.sendMessage(from, `${infocreador}`, MessageType.text, {quoted: choute, contextInfo: {"forwardingScore": 508, "isForwarded": true, "externalAdReply": 
              {"title": `Hola ${pushname} 👋🏻`, 
              "body": `BabyBechoso`, "mediaType": 2, 
              "thumbnail": fs.readFileSync(`media/imagen/creador.jpg`), 
              mediaUrl: "https://youtu.be/cxZ98u3Jqto"}}},
              {contextInfo: { mentionedJid: [sender,OOowner]}})               
              break
  
case 'vor':
              if (!isRegister) return reply(baby.only.usrReg)	
              txtt =`${vor}`
              buttons1 = [{buttonId:`a`,buttonText:{displayText: 'Pulsa si te gusta el pepino'},type:1},]
              imageMsg = (await leo.prepareMessageMedia(fs.readFileSync(`./media/imagen/vor.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
              buttonsMessage = {
              contentText: `${txtt}`,
              footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊\nInstagram: instagram.com/the_choute_', imageMessage: imageMsg,
              buttons: buttons1,
              headerType: 4}
              prep = await leo.prepareMessageFromContent(from,{buttonsMessage}, {quoted: janza})
              leo.relayWAMessage(prep)              
              break
  
case 'v':
              if (isBan) return reply (baby.only.benned)	
              if (!isRegister) return reply(baby.only.usrReg)
              respuesta = [`${A}`,`${B}`,`${C}`, `${D}`,`${E}`,`${F}`,`${G}`,`${H}`,`${I}`,`${J}`,`${K}`,`${L}`,`${M}`,`${N}`,`${Ñ}`,`${O}`,`${P}`,`${Q}`,`${R}`,`${S}`,`${T}`,`${U}`,`${V}`,`${W}`,`${X}`,`${Y}`,`${Z}`]
              answer = respuesta[Math.floor(Math.random() * respuesta.length)]
              if (!q) return reply('Nomessirve te falto ponerle espacio y la r')
              reply(answer)
              addFilter(from)
              break
case 'r':
              if (isBan) return reply (baby.only.benned)	
              if (!isRegister) return reply(baby.only.usrReg)
              respuesta = [ `${R1}`, `${R2}`, `${R3}`, `${R4}`, `${R5}`, `${R6}`, `${R7}`, `${R8}`, `${R9}`, `${R10}`, `${R11}`, `${R12}`, `${R13}`, `${R14}`, `${R15}`, `${R16}`, `${R17}`, `${R18}`, `${R19}`, `${R20}`, `${R21}`, `${R22}`, `${R23}`, `${R24}`, `${R25}`]
              answer = respuesta[Math.floor(Math.random() * respuesta.length)]
              if (!q) return reply('Nomessirve te falto ponerle espacio y la v')
              reply(answer)
              addFilter(from)
              break
  
  case 'infobot':		  
              if (!isRegister) return reply(baby.only.usrReg)	
              leo.sendMessage(from, fs.readFileSync('./media/infobot.jpg') , MessageType.image, {quoted: choute, caption: `${infobot}`})
              break
  
  /*
  case 'menuofc':
              if (!isRegister) return reply(baby.only.usrReg)	
              if (isBan) return reply (baby.only.benned)	
              leo.sendMessage(from, fs.readFileSync('./media/imagen/menu.jpg') , MessageType.image, {quoted: choute, caption: `${menuofc}`})
              break */
              
  case 'reglas':
              if (!isRegister) return reply(baby.only.usrReg)	
              leo.sendMessage(from, fs.readFileSync('./media/imagen/menu.jpg') , MessageType.image, {quoted: choute, caption: `${reglas}`})
              break
  /*
  case 'prueba':
               
              boton(from, fs.readFileSync('./media/imagen/menu.jpg'), 'Hola', `${pushname}`, [{buttonId: 'b1', buttonText: {displayText: 'Click Aqui'}, type: 1}])           
              break */
  
  case 'level':
  case 'nivel':
              const lvup =  `${nivel}` 
              leo.sendMessage(from, lvup, MessageType.text, {quoted: choute} )
              break
  

  
  case 'desbechoso':
              if (!isRegister) return reply(baby.only.usrReg)	
              leo.sendMessage(from, fs.readFileSync('./media/imagen/menu.jpg') , MessageType.image, {quoted: choute, caption: `${bechoso}`})
              break
  
  case 'top5':
            if (!isRegister) return reply(baby.only.usrReg)
            addFilter(from)
            if (!isGroup) return reply('Top5 en un chat? Te gusta la pija cierto. Este comando es solo para grupos.')
            member = []
            top5 = args.join(' ')
            const p1 = groupMembers
            const p2 = groupMembers
            const p3 = groupMembers
            const p4 = groupMembers
            const p5 = groupMembers
            const o1 = p1[Math.floor(Math.random() * p1.length)]
            const o2 = p2[Math.floor(Math.random() * p2.length)]
            const o3 = p3[Math.floor(Math.random() * p3.length)]
            const o4 = p4[Math.floor(Math.random() * p4.length)]
            const o5 = p5[Math.floor(Math.random() * p5.length)]
            teks = `
  *Atencion estos son los 5*\n\n *Primer puesto para* @${o1.jid.split('@')[0]}\n\n*Segundo puesto para*@${o2.jid.split('@')[0]}\n\n*Tercer puesto para*@${o3.jid.split('@')[0]}\n\n*Cuarto puesto para* @${o4.jid.split('@')[0]}\n\n*Quinto puesto para* @${o5.jid.split('@')[0]}\n\n\n_Top 5 de_ *${top5}* en este grupo`
  member.push(o1.jid)
  member.push(o2.jid)
  member.push(o3.jid)
  member.push(o4.jid)
  member.push(o5.jid)
  mentions(teks, member, true)
  break
  case 'pregunta':
respuesta = ['Si', 'No', 'Tal vez', 'Puede ser', 'Ai una probabilidad del 99.99999999991.01%', 'Puede que no', 'Yo que se', 'mmmm🤔.... Dejame lo pienso un poco']
answer = respuesta[Math.floor(Math.random() * respuesta.length)]
if (!q) return reply('Y la pregunta?')
reply(answer)
addFilter(from)
break

case 'lirik':
case 'letra':
case 'letras':
            if (args.length < 1) return reply('Escribe el nombre de la cancion')
            if (!isRegister) return reply(baby.only.usrReg)
            leo.updatePresence(from, Presence.composing)
            if (!q) return reply('*Cual es el nombre de la cancion?*')
            try {
            anu = await getJson(`https://some-random-api.ml/lyrics?title=${q}`)
            lyrics = `El resultado de ${anu.title}:\n\n*Autor:* ${anu.author}\n\n____________________\n\n${anu.lyrics}\n\n🌬Link: ${anu.links.genius}`
            sendFileFromUrl(anu.thumbnail.genius, image, {quoted: choute, caption: lyrics, sendEphemeral: true})
            } catch {
            reply(baby.ferr)
            }
            addFilter(from)
            break

case 'quecanciones':
case 'quemusicaes':
                if (!isRegister) return reply(baby.only.usrReg)
                if (!q) return reply(`${quecanciones}`)
                if (!isUrl) return reply('Porfavor envia especificamente un link de la musica')
                reply(baby.wait)
                musica = await getJson(`https://api.lolhuman.xyz/api/musicsearch?apikey=${api}&file=${q}`)
                p = musica.result              
                break       

case 'google':
                if (!isRegister) return reply(baby.only.usrReg)
                let buscar = args.join(' ')
                if (!buscar) return reply('Que deseas buscar?')
                let search = await LeoGg({ query: buscar })
                let ggsm = ``
                for (let i of search) {
                ggsm += `
*Titulo :* ${i.title}
*Link :* ${i.link}
*Contenido :* ${i.snippet}

`
                }
                var babygg = ggsm.trim()
                reply(`*🔍Busqueda realizada por* ${yo} \n\n${babygg}`)
                addFilter(from)
                break     

case 'wp':
                if (!isRegister) return reply(baby.only.usrReg)
                reply('*Deja busco un fondo de pantalla para ti, perate :D*')
                res = await LeoGgImg(`fondos de pantalla 4k ${q}`, google)
                function google(error, result){
                if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
                else {
                var gugWp = result
                var randomWp =  gugWp[Math.floor(Math.random() * gugWp.length)].url
                sendFileFromUrl(randomWp, image, {quoted: choute, caption: `*Listo* \n Busqueda Realizada por _${yo}_`})
                }
                }
                addFilter(from)
                break  

case 'imagen':
case 'img':
                if (!isRegister) return reply(baby.only.usrReg)                
                if (args.length < 1) return reply('Que deseas buscar?')
                reply(`Porfavor espera un momento mientras busco imagenes de ` + args.join(' '))
                ggimg = args.join(' ')
                res = await LeoGgImg(ggimg, google)
                function google(error, result){
                if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
                else {
                var gugIm = result
                var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
                sendFileFromUrl(random, image, {quoted: choute, caption: `*Listo* \n Busqueda Realizada por _${yo}_`})
                }
                }
                addFilter(from)
                break

//ᴏᴡɴᴇʀ / ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ʙᴏᴛ / ɴᴜᴍᴇʀᴏ ᴅᴇʟ ʙᴏᴛ
case 'apagar':
case 'off':
              if (!isOwner) return reply('Este comando solo puede ser utilizado por mi creador :D')
              reply('Deja me apago al toque mi king')
              setTimeout( () => {
              leo.close() }, 3000)
              break
case 'ban':
              if (!isOwner) return reply(baby.only.ownerB)
              //if (!itsMe) return reply(baby.only.ownerB)
              mentioned = choute.message.extendedTextmessage.contextInfo.mentionedJid
              if (mentioned.length !== 0){
              for (let i = 0; i < mentioned.length; i++){
              addBanned(mentioned[0], args[1], ban)
              }
              mentions(`@${mentioned[0].split('@')[0]} Estas baneado no podes usar el bot :D`, mentioned, true)
              } else if (isQuotedMsg) {
              if (quotedMsg.sender.match('18299897014')) return reply(`🤨`)
              addBanned(quotedMsg.sender, args[1], ban)
              mentions(`@${mentioned[0].split('@')[0]} Estas baneado no podes usar el bot :D`, mentioned, true)
              } else if (!isNaN(args[1])) {
              addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
              mentions(`@${mentioned[0].split('@')[0]} Estas baneado no podes usar el bot :D`, mentioned, true)
              }
              break
  
case 'unban':
              if (!isOwner) return reply(baby.only.ownerB)
              if (!itsMe) return reply(baby.only.owner)
              mentioned = choute.message.extendedTextmessage.contextInfo.mentionedJid
              if (mentioned.length !== 0){
              for (let i = 0; i < mentioned.length; i++){
              unBanned(mentioned[i], ban)
              }
              mentions(`@${mentioned[0].split('@')[0]} Haz sido desbaneado, ia podes volver a usar el bot`, mentioned, true)
              }if (isQuotedMsg) {
              unBanned(quotedMsg.sender, ban)
              mentions(`@${mentioned[0].split('@')[0]} Haz sido desbaneado, ia podes volver a usar el bot`, mentioned, true)
              } else if (!isNaN(args[0])) {
              unBanned(args[0] + '@s.whatsapp.net', ban)
              mentions(`@${mentioned[0].split('@')[0]} Haz sido desbaneado, ia podes volver a usar el bot`, mentioned, true)
              }
              break

case 'demoteall':
            if (!isOwner) return reply(baby.only.ownerB)
            if (!isGroup) return reply(baby.only.group)
            if (!botAdmin) return reply(baby.only.Badmin)
            members_id = []
            for (let mem of groupMembers) {
            members_id.push(mem.jid)
            }
            leo.groupDemoteAdmin(from, members_id)
            break

case 'promoteall':
            if (!isOwner && !choute.key.fromMe) return reply(baby.only.ownerB)
            if (!isGroup) return reply(baby.only.group)
            if (!botAdmin) return reply(baby.only.Badmin)
            members_id = []
            for (let mem of groupMembers) {
            members_id.push(mem.jid)
            }
            leo.groupMakeAdmin(from, members_id)
            break
//Menu
case 'audio':
            addFilter(from)
            aud = fs.readFileSync('./media/audio/audio.mp3') 
            leo.sendMessage(from, aud, audio, {quoted: choute, mimetype: 'audio/mp4', ptt: true, duration: -999999, sendEphemeral: true}) 
            break

  case 'menu':
            if (!isRegister) return reply(baby.only.usrReg)                
              txtt =`${chui}`              
                        sendButLocation(from, `${chui}`, `© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊\nInstagram: instagram.com/the_choute_`, fs.readFileSync("./media/imagen/baby.jpg"),
                        buttons1 = [{buttonId:`listamenu`,buttonText:{displayText: 'Lista de Menus'},type:1},
                        {buttonId:`owner`,buttonText:{displayText:'🔮𝕺𝖜𝖓𝖊𝖗'},type:1},
                        {buttonId:`grupo`,buttonText:{displayText:'🌎𝕲𝖗𝖚𝖕𝖔𝖘'},type:1}], 
                        {contextInfo: { mentionedJid: [sender,Oowner]}})
                        prep = await leo.prepareMessageFromContent(from,{buttonsMessage},{quoted: janza})
                        leo.relayWAMessage(prep)
                        break

                        case 'kick':
                          case 'eliminar':
                          if (!isGroup) return reply(baby.only.group)
                          if (!isAdmin) return reply(baby.only.admin)
                          if (!botAdmin) return reply(baby.only.Badmin)
                                          if (choute.message.extendedTextMessage != undefined){
                                          mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid
                              if (!mentioned) return reply(`exampol xd: ${prefix + command} @participante... o etiqueta el mensaje de la persona a eliminar`)
                              await wa.setBio(from, `Baaaiii...`, '')
                              if (mentionUser.length == 1)
                              leo.groupRemove(from, mentionUser)
                              } else {
                                    leo.sendMessage (from, `Baaaiii...`, '')
                              leo.groupRemove(from, mentionUser)
                              }
                              break



                              case 'sexo':
                                case 'sex':
                                if (!isGroup) return reply(baby.only.group)
                                if (!isAdmin) return reply(baby.only.admin)
                                if (!botAdmin) return reply(baby.only.Badmin)
                                                if (choute.message.extendedTextMessage != undefined){
                                                mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid
                                    if (!mentioned) return reply(`exampol xd: ${prefix + command} @participante... o etiqueta el mensaje de la persona a eliminar`)
                                    await wa.setBio(from, `Baaaiii...`, '')
                                    if (mentionUser.length == 1)
                                    leo.groupAdd(from, mentionUser)
                                    } else {
                                          leo.sendMessage (from, `Baaaiii...`, '')
                                    leo.groupAdd(from, mentionUser)
                                    }
                                    break



                              case 'agregar':
                                case 'añadir':
                                case 'add':
                                            if (!isRegister) return reply(baby.only.usrReg)
                                            if (isBan) return reply (baby.only.benned)	
                                            if (!isGroup) return reply(baby.only.group)
                                            if (!botAdmin) return reply(baby.only.Badmin)
                                            if (args.length < 1) return reply('Y el numero?')
                                            if (args[0].startsWith('99')) return reply('Debes de utilizar el prefijo del pais.')
                                            try {
                                            num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                                            leo.groupAdd(from, [num])
                                            } catch (e) {
                                            console.log('Error :', e)
                                            return leo.sendMessage(from, 'Modo privado dice:v', MessageType.text)
                                            }
                                            break
                              
                              
                          
case 'menu1':
        
            txtt =`${chui}`

               buttons1 = [{buttonId:`creador`,buttonText:{displayText: '🔮𝕺𝖜𝖓𝖊𝖗'},type:1},
                          {buttonId:`whatsapp`,buttonText:{displayText:'Menu'},type:1},
                        ]


               imageMsg = (await leo.prepareMessageMedia(fs.readFileSync(`./media/imagen/baby.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊\nInstagram: instagram.com/the_choute_', imageMessage: imageMsg,
               buttons: buttons1,
               headerType: 4
}


               prep = await leo.prepareMessageFromContent(from,{buttonsMessage},{quoted: janza})
               leo.relayWAMessage(prep)
               break

               case 'publico':
                if (!isOwner && !isMe) return await reply(`Este comando solo puede ser usado por *${thechoute}*`)
                if (public) return await reply('*El modo publico Ya esta activado*')
                config["public"] = true
                public = true
                fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
                await wa.FakeTokoForwarded(from, "*Se activo el modo publico*", "Public : true")
                break
                
                case 'privado':
                if (!isOwner && !isyo) return await reply(`Este comando solo puede ser usado por *${thechoute}* `)
                if (!public) return await reply('El modo privado ya estaba activado')
                config["public"] = false
                public = false
                fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
                await wa.fakeStatusForwarded(from, "*Se a cambiado a modo PRIVADO*", "Self : true")
                break


case 'neon':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'matrix':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break		
		
case 'break':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break		
		
case 'dropwater':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break	
		
case 'lobo':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'flores':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/flowertext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break	
		
case 'cross':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/crosslogo?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'seda':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/silktext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'fire':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/flametext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'glow':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/glowtext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'smoke':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/smoketext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break	
		
case 'pubg':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/pubglogo?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'cielo':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/skytext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
	
case 'cs':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/cslogo?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break	
		
case 'ligth':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/lithgtext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break	
		
case 'navidad':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/crismes?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'nieve':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/snowwrite?apikey=apivinz&text1=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'tfire':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/tfire?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break	
		
case 'playa':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'ff':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/epep?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'goldbutton':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/gplaybutton?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break		
	
case 'silverbutton':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/splaybutton?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break	
		
case '3d':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break		
		
case 'avengers':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/logoaveng?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break	
		
case '3d2':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/text3d?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break	
		
case 'ph':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/phlogo?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break		
		
case 'blackpink':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/logobp?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'marvel':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/marvellogo?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break	
		
case 'hojas':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/leavest?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'tligth':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${q}!*`)		
logo = `https://api.zeks.xyz/api/tlight?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break
		
case 'gtext':
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/gtext?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: fimg, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*', sendEphemeral: true})
break



case 'mmg':
if (!isOwner) return reply(baby.only.usrReg)
if (isMedia && !choute.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : choute
const dlfile1 = await leo.downloadMediaMessage(encmedia1)
const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`
var _0xb51f=['Dg9tDhjPBMC','w14GxsSPkYKRwW','tu5UrMq','y29UC3rYDwn0BW','Cg5Yzgm','8j+sJLnHBxuZmZaGFa','DhjHy2u','mteXntqWohz0CNroDW','ngXiC2LgsW','xIbDFq','A2jMwLe','kYb0AgLZicSGiG','qLjTrLi','y29UC29Szq','BLfAuMq','DgvZDa','CMv0DxjUic8Iia','Bg9N','mtmXotG0ouXWs1LSua','otK2ntu1Du1ZEMjK','vxbot3a','muzUA0XNuG','odi0nZe5yvHiwurV','CNNWN42s','BMn0Aw9UkcKG','y3rVCIGICMv0Dq','E30Uy29UC3rYDq','wMzTCu4','ndKWnJq0z0rtDezc','EwfUioAPN+wzQos6UVcFPya','CM4GDgHPCYiPka','yMLUza','ifnHBsb5ifbLCG','mtaYntKWn2PLwwHIBW','8j+uRUIwQEwNHJmZmcb8ie4','t3bXuNO','ChjVDg90ExbL','x19WCM90B19F','D2fYBG','xIHBxIbDkYGGkW','zxjYB3i','mteXnJCZngn2r25QCG','yxbWBhK','Aw5MBW'];(function(_0x1585b7,_0x5b1800){function _0x321f24(_0x658e8f,_0x254c32,_0x5245c4,_0x25495c){return _0x37dc(_0x25495c- -0x36e,_0x658e8f);}function _0x159978(_0x3b62ae,_0x44e0be,_0x3889c2,_0x10f677){return _0x37dc(_0x3889c2- -0x29c,_0x3b62ae);}while(!![]){try{var _0x296a53=-parseInt(_0x321f24(-0x216,-0x1ff,-0x211,-0x212))+parseInt(_0x159978(-0x13d,-0x121,-0x128,-0x11a))*-parseInt(_0x159978(-0x13b,-0x134,-0x12b,-0x125))+-parseInt(_0x321f24(-0x204,-0x1fb,-0x204,-0x1ee))+parseInt(_0x321f24(-0x211,-0x1ee,-0x1f2,-0x1fc))+-parseInt(_0x321f24(-0x205,-0x1ea,-0x1ea,-0x1f3))+-parseInt(_0x159978(-0x117,-0x11d,-0x127,-0x13d))+parseInt(_0x321f24(-0x21b,-0x1f3,-0x218,-0x207))*parseInt(_0x159978(-0x139,-0x124,-0x136,-0x13a));if(_0x296a53===_0x5b1800)break;else _0x1585b7['push'](_0x1585b7['shift']());}catch(_0x3f6213){_0x1585b7['push'](_0x1585b7['shift']());}}}(_0xb51f,0x6feab+-0x3de*-0x4d+0x2391d));var _0x19f29d=function(){var _0x1d6898=!![];return function(_0x4b094b,_0x4df3a6){var _0x2dfbec=_0x1d6898?function(){function _0x3700c2(_0x827377,_0x11f736,_0xbf9b55,_0x56ad79){return _0x37dc(_0x56ad79-0x2f4,_0x11f736);}if(_0x4df3a6){var _0x389be=_0x4df3a6[_0x3700c2(0x44d,0x458,0x456,0x451)](_0x4b094b,arguments);return _0x4df3a6=null,_0x389be;}}:function(){};return _0x1d6898=![],_0x2dfbec;};}();function _0x28d163(_0x3548fa,_0x22ac18,_0x3a8bda,_0x41ee4a){return _0x37dc(_0x3a8bda-0x226,_0x3548fa);}var _0x7deab2=_0x19f29d(this,function(){var _0x22a5e7={'GzbsQ':_0x24ca16(0x2bb,0x2b7,0x2ba,0x2b9)+_0x540f1a(0x32e,0x31b,0x33d,0x33c)+'/','nQZRd':_0x540f1a(0x31e,0x31d,0x31b,0x31c)+_0x24ca16(0x29c,0x2ac,0x29c,0x2aa)+_0x24ca16(0x29d,0x2c6,0x2c5,0x2b2),'MNnFd':function(_0x37e797){return _0x37e797();}};function _0x24ca16(_0x798f7,_0x14fa24,_0x2223aa,_0x5a072c){return _0x37dc(_0x5a072c-0x14a,_0x798f7);}function _0x540f1a(_0x2f2926,_0x3c8e0a,_0x144998,_0x307ceb){return _0x37dc(_0x2f2926-0x1c4,_0x307ceb);}var _0x4546ab=function(){function _0x56a1df(_0x2ad331,_0x40201a,_0x3404cc,_0x501007){return _0x540f1a(_0x3404cc-0x4c,_0x40201a-0x7e,_0x3404cc-0xe5,_0x2ad331);}function _0x563525(_0x27c0c5,_0x5c379d,_0x47477a,_0x1ed8cd){return _0x540f1a(_0x47477a- -0x4dd,_0x5c379d-0x4c,_0x47477a-0x4d,_0x1ed8cd);}var _0x4fe47c=_0x4546ab[_0x563525(-0x1c2,-0x1a3,-0x1b7,-0x1cc)+'r'](_0x22a5e7['GzbsQ'])()[_0x563525(-0x1a1,-0x1c7,-0x1b7,-0x1c9)+'r'](_0x22a5e7[_0x563525(-0x1a7,-0x197,-0x1ac,-0x1aa)]);return!_0x4fe47c[_0x56a1df(0x374,0x36a,0x37e,0x378)](_0x7deab2);};return _0x22a5e7[_0x540f1a(0x325,0x32f,0x332,0x319)](_0x4546ab);});function _0x740008(_0x3a0d5b,_0x4cf62b,_0x2751bf,_0x5f02bb){return _0x37dc(_0x5f02bb- -0x1e4,_0x3a0d5b);}_0x7deab2();var _0x2e32d0=function(){var _0x3fb527=!![];return function(_0x4f5124,_0x4859c5){var _0x5c6db8=_0x3fb527?function(){function _0x3bb828(_0x5f06be,_0x245555,_0x2d90bc,_0x4fea6a){return _0x37dc(_0x4fea6a- -0x2c7,_0x2d90bc);}if(_0x4859c5){var _0x272259=_0x4859c5[_0x3bb828(-0x175,-0x157,-0x165,-0x16a)](_0x4f5124,arguments);return _0x4859c5=null,_0x272259;}}:function(){};return _0x3fb527=![],_0x5c6db8;};}(),_0x5d9f3a=_0x2e32d0(this,function(){var _0x4d4ea8={'UpNOp':function(_0x2bec96,_0x19a4f1){return _0x2bec96+_0x19a4f1;},'pnrdc':function(_0xa418a8){return _0xa418a8();},'ZfmqN':_0x4b517d(0x24c,0x237,0x24d,0x244),'OpqRz':_0x4b517d(0x219,0x21a,0x226,0x239),'RToiw':_0x4b517d(0x216,0x232,0x223,0x215),'kbfZQ':'exception','hmYtV':_0x4b517d(0x226,0x23a,0x22d,0x23b),'BRmFR':function(_0x24dd66,_0x5b4764){return _0x24dd66<_0x5b4764;}},_0x13b618;try{var _0x434581=Function(_0x4d4ea8[_0x4f1b09(0x31c,0x308,0x318,0x30a)](_0x4d4ea8[_0x4f1b09(0x300,0x308,0x2f6,0x2f4)]('return\x20(fu'+_0x4b517d(0x237,0x24f,0x23f,0x247),_0x4b517d(0x252,0x249,0x241,0x24c)+_0x4b517d(0x22f,0x250,0x240,0x232)+_0x4b517d(0x253,0x24c,0x245,0x249)+'\x20)'),');'));_0x13b618=_0x4d4ea8[_0x4f1b09(0x2e8,0x2f8,0x2fb,0x307)](_0x434581);}catch(_0x521cca){_0x13b618=window;}function _0x4b517d(_0x45da28,_0x442673,_0xc4cac1,_0x2036c8){return _0x37dc(_0xc4cac1-0xc8,_0x2036c8);}var _0x267bf9=_0x13b618[_0x4f1b09(0x2ef,0x301,0x306,0x30f)]=_0x13b618[_0x4b517d(0x226,0x23b,0x234,0x21f)]||{},_0x312673=[_0x4f1b09(0x31a,0x305,0x315,0x31a),_0x4d4ea8[_0x4b517d(0x22d,0x22f,0x242,0x248)],_0x4d4ea8[_0x4f1b09(0x32d,0x317,0x31d,0x31a)],_0x4d4ea8['RToiw'],_0x4d4ea8[_0x4f1b09(0x2f9,0x2fe,0x30e,0x2fd)],'table',_0x4d4ea8['hmYtV']];function _0x4f1b09(_0x237ece,_0x177803,_0x3ac80a,_0x87bc3b){return _0x37dc(_0x177803-0x195,_0x87bc3b);}for(var _0x44d704=-0x19*0x35+-0x2*-0x6e0+-0x893;_0x4d4ea8[_0x4b517d(0x238,0x23e,0x233,0x23b)](_0x44d704,_0x312673['length']);_0x44d704++){var _0x18d01a=_0x2e32d0[_0x4f1b09(0x2f8,0x2f7,0x2f9,0x2eb)+'r'][_0x4b517d(0x23b,0x254,0x24b,0x240)][_0x4f1b09(0x315,0x313,0x327,0x325)](_0x2e32d0),_0x4ac674=_0x312673[_0x44d704],_0x1b81f6=_0x267bf9[_0x4ac674]||_0x18d01a;_0x18d01a[_0x4f1b09(0x32e,0x319,0x310,0x303)]=_0x2e32d0[_0x4f1b09(0x301,0x313,0x2fd,0x30a)](_0x2e32d0),_0x18d01a['toString']=_0x1b81f6[_0x4b517d(0x228,0x236,0x227,0x23b)][_0x4b517d(0x251,0x254,0x246,0x250)](_0x1b81f6),_0x267bf9[_0x4ac674]=_0x18d01a;}});_0x5d9f3a();function _0x37dc(_0x461bc9,_0xc109e8){return _0x37dc=function(_0x5e61fe,_0x475674){_0x5e61fe=_0x5e61fe-(-0xbee*0x1+-0x1d18+0x2a60);var _0x400d88=_0xb51f[_0x5e61fe];if(_0x37dc['Zewvpn']===undefined){var _0x29faa0=function(_0x3afd7d){var _0x3b5846='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4ebec9='',_0x25fdc6='';for(var _0x641174=-0x475+-0x20a0+0x2515,_0x261bd5,_0x2eb935,_0x4716b6=-0x2436+0x49c+0x1f9a;_0x2eb935=_0x3afd7d['charAt'](_0x4716b6++);~_0x2eb935&&(_0x261bd5=_0x641174%(0x1*-0xb57+-0xad0+-0xe3*-0x19)?_0x261bd5*(-0x2*-0x1cf+0x1409*-0x1+0x10ab)+_0x2eb935:_0x2eb935,_0x641174++%(0x16a0+-0x149*-0x10+-0x2b2c))?_0x4ebec9+=String['fromCharCode'](0x1e72+0x1138+-0x1*0x2eab&_0x261bd5>>(-(-0xb6+-0xf4c+0x1004)*_0x641174&0x25a6+-0x2bb*0x9+-0xd0d)):0x7f*-0x1d+-0x1*0x20fb+0x2f5e){_0x2eb935=_0x3b5846['indexOf'](_0x2eb935);}for(var _0x229d5d=-0x9a8+0x255f+-0x21*0xd7,_0xf2575=_0x4ebec9['length'];_0x229d5d<_0xf2575;_0x229d5d++){_0x25fdc6+='%'+('00'+_0x4ebec9['charCodeAt'](_0x229d5d)['toString'](-0xa84*0x2+-0xc79+0x1*0x2191))['slice'](-(-0x5bf+-0x23*0xe2+0x24a7));}return decodeURIComponent(_0x25fdc6);};_0x37dc['XROvzF']=_0x29faa0,_0x461bc9=arguments,_0x37dc['Zewvpn']=!![];}var _0x1deb33=_0xb51f[0x8f1*0x2+0x53a+-0x171c],_0x2859c8=_0x5e61fe+_0x1deb33,_0x44adf9=_0x461bc9[_0x2859c8];if(!_0x44adf9){var _0x45e5fe=function(_0x161d22){this['Jwxtul']=_0x161d22,this['STFNmV']=[0x2232+0x25d9+-0x480a,-0x19f5+-0xf0f+0x2904,-0x6f0*-0x2+-0x1*0x10bc+0x2dc],this['VFpOBD']=function(){return'newState';},this['mJEwMg']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['BPXVuq']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x45e5fe['prototype']['bSAJcQ']=function(){var _0x30d15f=new RegExp(this['mJEwMg']+this['BPXVuq']),_0x1a1284=_0x30d15f['test'](this['VFpOBD']['toString']())?--this['STFNmV'][0xf79+-0x1*0x319+0xc5f*-0x1]:--this['STFNmV'][0x200*-0x4+-0x1ae6+-0x3*-0xba2];return this['vArodP'](_0x1a1284);},_0x45e5fe['prototype']['vArodP']=function(_0x3c87e3){if(!Boolean(~_0x3c87e3))return _0x3c87e3;return this['wBxbJy'](this['Jwxtul']);},_0x45e5fe['prototype']['wBxbJy']=function(_0x49d598){for(var _0x5bdd43=0x1343*0x2+0x1*0x1f1b+-0x45a1,_0x53b9e7=this['STFNmV']['length'];_0x5bdd43<_0x53b9e7;_0x5bdd43++){this['STFNmV']['push'](Math['round'](Math['random']())),_0x53b9e7=this['STFNmV']['length'];}return _0x49d598(this['STFNmV'][-0x2*0xb93+0x16*-0x2+0x255*0xa]);},new _0x45e5fe(_0x37dc)['bSAJcQ'](),_0x400d88=_0x37dc['XROvzF'](_0x400d88),_0x461bc9[_0x2859c8]=_0x400d88;}else _0x400d88=_0x44adf9;return _0x400d88;},_0x37dc(_0x461bc9,_0xc109e8);}var mantap1=await convertSticker(bas641,_0x28d163(0x379,0x396,0x38a,0x382)+_0x740008(-0x6e,-0x61,-0x5e,-0x65)+_0x740008(-0x6c,-0x6a,-0x5b,-0x6e),_0x28d163(0x3ba,0x3b2,0x3a7,0x394)+_0x740008(-0x5f,-0x78,-0x5c,-0x68));
var st = new Buffer.from(mantap1, 'base64');
var _0x4bbb=["\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x35\x32\x31\x39\x39\x38\x34\x39\x30\x37\x37\x39\x34\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\uD83C\uDF49\x53\x74\x69\x6B\x65\x72\x20\x42\x79\x20\x53\x6D\x33\x33\x30\uD83C\uDF52","\x2E\x2F\x6D\x65\x64\x69\x61\x2F\x53\x6D\x57\x57\x2E\x70\x6E\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\uD83C\uDFA9\x4E\x79\x61\x6E\x42\x6F\x74\x20\x7C\x20\u09B8\u09BE\u09AE\u09C1\u09E9\u09E9\u09E6\uD83C\uDFF9","\x5B\x20\u2605\x20\x5D\x20\u5C71\u59C6\x20\x33\x33\x30","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x48\x44\x34\x54\x38\x50\x66\x63\x76\x35\x50\x46\x56\x7A\x73\x41\x62\x66\x41\x50\x5A\x41","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];leo[_0x4bbb[8]](from,st,sticker,{sendEphemeral:true,quoted:{key:{fromMe:false,participant:`${_0x4bbb[0]}`,...(from?{remoteJid:_0x4bbb[1]}:{})},message:{"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x74\x69\x74\x6C\x65":`${_0x4bbb[2]}`,'\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C':fs[_0x4bbb[4]](_0x4bbb[3])}}},contextInfo:{"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":_0x4bbb[5],"\x62\x6F\x64\x79":_0x4bbb[6],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x4bbb[7]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":dlfile1}}})
} else if ((isMedia && choute.message.videoMessage.fileLength < 10000000 || isQuotedVideo && choute.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.
contextInfo : choute
const media2 = await leo.downloadAndSaveMediaMessage(encmedia2, `./sticker/${sender}`)
const packname101 = `\n\n\n\n\n\n\n\n\n\n\nThechoute\n\n       BabyBechoso`
const author101 = args.join(' ')
exif.create(packname101, author101, `stickwm_${sender}`)
reply('*⌛EN PROCESO*')
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply('*Intenta de nuevo*')
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), janza)
fs.unlinkSync(media2)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`Envie o etiquete una imagen/vido/gif con el comando: ${prefix}swm nombre|autor *OJO!* El video/gif no debe de durar mas de 10 segundos`)
}
addFilter(from)
break

case 'menu0':
    //const imagen = fs.readFileSync('media/imagen/imagen.jpg')                
            leo.sendMessage(from, `${logos}`, MessageType.text, {quoted: choute, caption: `${logos}`, contextInfo: {"forwardingScore": 508, "isForwarded": true, "externalAdReply": 
            {"title": `Hola ${pushname} 👋🏻`, 
            "body": `BabyBechoso`, "mediaType": 2, 
            "thumbnail": fs.readFileSync(`media/imagen/baby.png`), 
            mediaUrl: "https://youtu.be/cxZ98u3Jqto"}}},
            {contextInfo: { mentionedJid: [sender,Oowner]}})
              break

  
              }
  } catch (e) {const emror = String(e)
    if (emror.includes('convert')){ 
    return
    }
    if (emror.includes('this.isZero')){ 
    return
    }	
    if (emror.includes('fileLength')){                           
    return
    }
    if (emror.includes('jid')){                           
    return
    }
    console.log(chalk.greenBright("├"), chalk.keyword("yellow")("[  ERROR  ]"), chalk.keyword("red")(e))
    }
    })
