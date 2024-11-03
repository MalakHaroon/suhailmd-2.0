const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
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
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_34_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDcyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE3LFxuICAgICAgICA3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMyLFxuICAgICAgICA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMixcbiAgICAgICAgMTc3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM1LFxuICAgICAgICA3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY2LFxuICAgICAgICA0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICA2NixcbiAgICAgICAgNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAzMixcbiAgICAgICAgMjE2LFxuICAgICAgICA5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MixcbiAgICAgICAgMTc2LFxuICAgICAgICA2MSxcbiAgICAgICAgMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgODgsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK0c2UVIwZmpNTmMySEZzT3Nqc0YyYXVQV0VsVW9yV3AzenR3WWdCa0Vvdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVXpQLVJIR2VSVC1IeUhkcHU3YW1Od1wiLFxuICBcInBob25lSWRcIjogXCIzMTgzNGNhZS0zN2MzLTQxYTUtYWRiOC1hMDI0ZTA3MDBkZDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMTAwLFxuICAgICAgMjQwLFxuICAgICAgMjExLFxuICAgICAgMTMyLFxuICAgICAgMTQzLFxuICAgICAgNzMsXG4gICAgICAxOTcsXG4gICAgICA5NCxcbiAgICAgIDI0NSxcbiAgICAgIDI3LFxuICAgICAgMTgyLFxuICAgICAgMTg3LFxuICAgICAgNyxcbiAgICAgIDE0NCxcbiAgICAgIDE4MixcbiAgICAgIDE5MyxcbiAgICAgIDE3NCxcbiAgICAgIDIwOCxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICA3NSxcbiAgICAgIDU3LFxuICAgICAgOTAsXG4gICAgICA0MyxcbiAgICAgIDI0MyxcbiAgICAgIDIwNixcbiAgICAgIDU1LFxuICAgICAgMTE4LFxuICAgICAgNzUsXG4gICAgICA2MCxcbiAgICAgIDE4NyxcbiAgICAgIDE1NSxcbiAgICAgIDIxOSxcbiAgICAgIDYwLFxuICAgICAgMTQ2LFxuICAgICAgMzMsXG4gICAgICA1OCxcbiAgICAgIDc5LFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNMTE00OU00XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MDQzODYwODU6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1OTc2ODk0MTQ3ODEzODoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJR1U0Z2tRNi9lZHVRWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlY4NHltMFc0YWpFU1Z5YkRzVnhMVDNnQ0FNMlk4Q2tScCtjcFY0SkJUeEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicFY2MHZMYmsrZmV1YW5zSXgvZWRmN1JRNXBZZUpyQU1DWnNsRHEyZC9sN3N4QjA2RTg5SGxMcFl6UnVrMHVYdlFieUhqcm1HcTY2b2l6QzZZVmxLRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaHFCUDQ5U1poUDVVRVNwMWlPcmRORzVGS01CM1NBNU5ReUVHd2hFVkkyclVjU2Jlc3Q2K20wWTQ5a0dhL0VKL09zVUpPak80NHU4MlZXT2gybWd1Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDA0Mzg2MDg1OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjQwODc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjluXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCOW4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrM3JwcmdWTnJiUjJPVnc0eW9IOTFEaGI1bG1aRDNYb3V3MTVVMDArbEpNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDgyNTYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA2MzYwNTk2OTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
