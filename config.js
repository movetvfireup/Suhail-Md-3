const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_48_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0LFxuICAgICAgICA1NixcbiAgICAgICAgMjIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc0LFxuICAgICAgICA4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDc0LFxuICAgICAgICA4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MixcbiAgICAgICAgODUsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3LFxuICAgICAgICA0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM5LFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICA0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYyLFxuICAgICAgICA1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDg0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicDhTZjBkK0lzU2RuUVBDZUkwbTN2STV1elgrbjNFZGhRQVJuOE5nSmdRbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTlNtMVZOZnRRZ3lnRGVDMnB2eVRaQVwiLFxuICBcInBob25lSWRcIjogXCJiNWQ2ZTY0ZS0wZWMwLTRjZGEtOWYzMS0zODMwZjM5NDcwNWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgMTcwLFxuICAgICAgMjIzLFxuICAgICAgOTMsXG4gICAgICAxMzQsXG4gICAgICAxNjEsXG4gICAgICAxNzQsXG4gICAgICAxNzEsXG4gICAgICAxNjIsXG4gICAgICAyNSxcbiAgICAgIDEyNSxcbiAgICAgIDI0NyxcbiAgICAgIDc2LFxuICAgICAgMjQ1LFxuICAgICAgMjA4LFxuICAgICAgMjQ3LFxuICAgICAgNzEsXG4gICAgICA2NixcbiAgICAgIDI0NCxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgMTE0LFxuICAgICAgOCxcbiAgICAgIDQ4LFxuICAgICAgMTgzLFxuICAgICAgMjM0LFxuICAgICAgMjUxLFxuICAgICAgMTgyLFxuICAgICAgMjQsXG4gICAgICAxNzUsXG4gICAgICAyNDcsXG4gICAgICAxMDMsXG4gICAgICA4LFxuICAgICAgNjMsXG4gICAgICAxNTMsXG4gICAgICAxMCxcbiAgICAgIDIzNSxcbiAgICAgIDE4MixcbiAgICAgIDE4OCxcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ082VjRZTUZFSWVPc2NRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibEVuSENZTVV1R1VESjczMjBZalZGT0l3MmpFTVhtelYxUy9nd2lVaWgwbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJadEgzREl5T2t3cGVFWTR4bHh5Q01JUGI3QWlydlpodUs4cWVsSnFESE1iZk1OVjdpSHBJbGpaL2FYWDd4MWkrYlp3emZNREFpM2VtUU9NNVBnU1pCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6RHZsemdndEgxZ2ZaQThRR2Q0SHRicUhtbDRrT0lpVDk2ZkRFakZVWis2d29ubzJ0enhiRExvUHVlTDJMZy94eG55eGZwdFVtSnRab2JFekVOMDhEdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDA1MzQ5MDg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1lbWV0aXBzIEFkdmVydFwiLFxuICAgIFwibGlkXCI6IFwiNjEzNTg2NDEwNDU2MTI6MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDA1MzQ5MDg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU0MDIzNjkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVBxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFUHAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKQ2pQcDkwWU50MndXb3hWZVJZZThBNzlMSzBnc3RnaURmL0k2ZHBkcHpBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNTAwNjA3ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVQcS5qc29uIjogIntcImtleURhdGFcIjpcIjBQdTF2MytRNFB4NXo0a2FyMGxKcDFHMTZhd2VuVjcxWkxFZUdvaFlvdWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM1MDA2MDc4MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc1NDAyMzAzMjA5NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
