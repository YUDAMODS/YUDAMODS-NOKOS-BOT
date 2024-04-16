const chalk = require("chalk")
const fs = require("fs")

const payment = {
    qris: {
      link_nya: "https://telegra.ph/file/5b399436eb0c243ecafe6.png",
      atas_nama: "YUDAMODS"
    },
    dana: {
      nomer: "6283842204546",
      atas_nama: "YUDAMODS"
    },
    ovo: {
      nomer: "Scan Aja Qris",
      atas_nama: "online shop"
    }
}

const apikeyOtpKu = "xg3H0pUKctadTouFOMR45BrkED8XLm"
//https://otpku.com

  global.ownerNumber = "6283153305709@s.whatsapp.net"
  global.kontakOwner = "6283153305709"
  global.namaStore = "YUDAMODS"
  global.botName = "YUDAMODS"
  global.ownerName = "YUDAMODS"
  global.pajak = "1000" //ini untuk pajak atau untung yang akan kamu peroleh 
  //gunakan hanya angka
  
  global.linkyt = "https://youtube.com/@YUDAMODS"
  global.linkig = "https://instagram.com/yudamods"
  global.dana = "Scan qris di atas"
  global.sawer = "Scan qris di atas"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

module.exports = { payment, apikeyOtpKu }
