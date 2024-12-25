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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_03_12_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDAsXG4gICAgICAgIDExNixcbiAgICAgICAgODQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkwLFxuICAgICAgICA4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5LFxuICAgICAgICA1MyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTgwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MixcbiAgICAgICAgMTExLFxuICAgICAgICA5MixcbiAgICAgICAgMjI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM3LFxuICAgICAgICA1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDTXpsU1ptWnR4WWhtam9kVDdGajhlcE95MHJMZkd6Z1N4NWtmZHNCdHY4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtdERPWm1rdVI1MmJXUFA1OG93NnNBXCIsXG4gIFwicGhvbmVJZFwiOiBcImI1OTk5NDRiLWM0M2MtNGMyMS05MmRhLTg0YzU0NjU2NTVkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICAzMixcbiAgICAgIDQ2LFxuICAgICAgODAsXG4gICAgICA5NSxcbiAgICAgIDE1NyxcbiAgICAgIDkwLFxuICAgICAgMjAwLFxuICAgICAgMTk0LFxuICAgICAgMTI2LFxuICAgICAgMzMsXG4gICAgICAxMjYsXG4gICAgICAxODQsXG4gICAgICAxMjcsXG4gICAgICAxNDMsXG4gICAgICAyNSxcbiAgICAgIDI0NSxcbiAgICAgIDM0LFxuICAgICAgNzcsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAyMTIsXG4gICAgICAxODMsXG4gICAgICA1MyxcbiAgICAgIDE4NyxcbiAgICAgIDEyMixcbiAgICAgIDIxNixcbiAgICAgIDk1LFxuICAgICAgMTA3LFxuICAgICAgNzEsXG4gICAgICAxOTksXG4gICAgICAyNDEsXG4gICAgICAzNyxcbiAgICAgIDE2OCxcbiAgICAgIDIxMSxcbiAgICAgIDgxLFxuICAgICAgMTMyLFxuICAgICAgMjI1LFxuICAgICAgNDksXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaOUZMUkVOUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDUxMzM2NzUxOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MjYwMDAyOTA2NTQ1Nzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xqbjliNERFSmlGc0xzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZDc5UGYxWG9naDlqS0NXTnlucElqc2Vrci8vSkZlSHZOZDFLa2k1bG9qVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXZUREWHVzWXpNcDdUOVhPTXNhSE1TYXMwWDhJVWp5eDMvcFF2Z3lQYno0UytjVFhaUys0djVqbVhrcWJGZ0VYN1Z3L2pjNFB2ZWdILzBJcTN2UWxEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVekxjZnZqZndrbjN3OFJHdmwwNjRBdW1BTVRsT2RZWFVCUktNMWdoWElZdGdTUXczNjNaWkMybnJaeE5IdVVBUW5TMEVhRk5UbWlBejhhNFVUczdCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0NTEzMzY3NTE6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTEzMTgwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA5elwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDl6Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
