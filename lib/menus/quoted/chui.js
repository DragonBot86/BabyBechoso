const janza = {
    key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
    },
    message: {
    "productMessage": {
    "product": {
    "productImage":{
    "mimetype": "image/jpeg",
    "jpegThumbnail": fs.readFileSync(`./media/imagen/fake.jpg`)
    },
    "title": `𝕿𝖍𝖊𝖈𝖍𝖔𝖚𝖙𝖊|𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖍𝖔𝖘𝖔`,
    "description": "",
    "currencyCode": "NIUSES",
    "priceAmount1000": "999999999999999999",
    "retailerId": "",
    "productImageCount": 999
    },
    "businessOwnerJid": `0@s.whatsapp.net`
    }
    }
    }
    contextInfo: {
    mentionedJid: [sender]}


    const floc = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
        { remoteJid: "status@broadcast" } : {}) },
        message: { "locationMessage": { "caption":"🥀𝓝𝔂𝓪𝓷𝓑𝓸💞", 'jpegThumbnail': fs.readFileSync('./src/samyperry.png')}}
        }
        contextInfo: {
        mentionedJid: [sender]}