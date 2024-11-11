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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_41_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODksXG4gICAgICAgIDQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNixcbiAgICAgICAgOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODEsXG4gICAgICAgIDc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMixcbiAgICAgICAgNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1LFxuICAgICAgICA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzLFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxabEwyNDRnSnc4MnY0Q1NNOFh1RWt0dHNTTEpYbXdKZ0QyV2t6NjZjblE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBYR2xjSGNBUm4yd2I5MDB2RE9mX2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTVjNjZiYWYtNzIyZi00NTU4LWEzMjAtZDhiNWMyMjM1NWYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OCxcbiAgICAgIDM2LFxuICAgICAgMTkzLFxuICAgICAgODgsXG4gICAgICA1NixcbiAgICAgIDI0OCxcbiAgICAgIDIwNSxcbiAgICAgIDgwLFxuICAgICAgOSxcbiAgICAgIDQ4LFxuICAgICAgOTgsXG4gICAgICA1LFxuICAgICAgMjEwLFxuICAgICAgMTg1LFxuICAgICAgMzcsXG4gICAgICAyNDUsXG4gICAgICAyMjcsXG4gICAgICA0OCxcbiAgICAgIDEzOCxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMjEzLFxuICAgICAgMjM3LFxuICAgICAgMTI5LFxuICAgICAgOTAsXG4gICAgICA1LFxuICAgICAgMTQzLFxuICAgICAgNjksXG4gICAgICAxOCxcbiAgICAgIDE4NCxcbiAgICAgIDE4NSxcbiAgICAgIDI1NSxcbiAgICAgIDE4NixcbiAgICAgIDI1MCxcbiAgICAgIDE3NixcbiAgICAgIDEwOCxcbiAgICAgIDE0MixcbiAgICAgIDEwNCxcbiAgICAgIDM5LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjIxTlM5OFlCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNzExNjk5MzA6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZS48J2VlfCdlZ/wnZWS8J2VnyDwnZWC8J2VmfCdlZLwnZWfXCIsXG4gICAgXCJsaWRcIjogXCIxMjg2NDMzODA1ODA2MDU6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlhncXI0RkVKM094cmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5bEVQTmZ5cmtkMWp2NFU2ejVpc3lDY3NSY2Y1aU9qNkRrSG1WOXdrWEN3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVhQSszYkkydHpQejNURldkZUZWbWhYYU5PT3g5TkJ0SmlWYlZVdEp0a3Zwd0pLc3l3MnhPUTFZeGllSkpvZVFMakgxMWpRQ2R4cy9kVUE0c0VNMENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllmUXQzaUdNKytHYzRRSktqZFA2ZW9pcm16aFFDVnRCSWl2MUMrOTVqMzk1aEdENEQ5WWRLcCtjZDRFZEpKNnQwQlVXN2N1OVFOdjFWSm1NZ1N5K2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE3MTE2OTkzMDoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEzMDcyOTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFQ3dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVDdy5qc29uIjogIntcImtleURhdGFcIjpcIlRwNHd4d2lZMG96Vy8xNktPQno0Y3pxNllRVHh1dnE1TjlGS3RuZThFUUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ3MjkwMTE0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxMzAwMTIzMzAyXCJ9Igp9"  // PUT your SESSION_ID 


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
