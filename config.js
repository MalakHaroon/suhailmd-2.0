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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_14_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MixcbiAgICAgICAgMTI1LFxuICAgICAgICA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICA2MixcbiAgICAgICAgODcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgODMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICA4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMixcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDM4LFxuICAgICAgICA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDc5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU0LFxuICAgICAgICA2LFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDYzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIko2ZHYxY05yRGxJYUdRaThBbW5uUHpZMjdaVkcra0ttanNldXdKY05rVVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhtVmpfVEZVUTJldUFxVE94Mm5yZmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTQ1MjljMTYtM2VhMy00YmE0LWI2OGMtZjNhZTFkMGI5OWEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDExMyxcbiAgICAgIDIzLFxuICAgICAgMTIxLFxuICAgICAgMTc4LFxuICAgICAgMTcwLFxuICAgICAgMjM0LFxuICAgICAgMTgzLFxuICAgICAgMTA0LFxuICAgICAgODYsXG4gICAgICAyMDUsXG4gICAgICAxODcsXG4gICAgICAxNDcsXG4gICAgICA4OCxcbiAgICAgIDEzMixcbiAgICAgIDE2LFxuICAgICAgMixcbiAgICAgIDI0MSxcbiAgICAgIDIyNixcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTMwLFxuICAgICAgMTY2LFxuICAgICAgMTM0LFxuICAgICAgMjI5LFxuICAgICAgOTksXG4gICAgICA3NCxcbiAgICAgIDIwMyxcbiAgICAgIDIxMSxcbiAgICAgIDM3LFxuICAgICAgMjQwLFxuICAgICAgMjU1LFxuICAgICAgMjM2LFxuICAgICAgNzAsXG4gICAgICAxNDksXG4gICAgICA4NSxcbiAgICAgIDI2LFxuICAgICAgMjQwLFxuICAgICAgOSxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllYOUNXRDZaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMDAzMjgyMDM6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBemFtIEtoYW5cIixcbiAgICBcImxpZFwiOiBcIjE2ODg2OTkxMDA1NzA3NjoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMK2JxT0VFRUpTY2tMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhvVGkxaUxXVDJ6UzlZYjZncE8ySVhRRXB5dnhkRjd4amR1WlJJcnpZRE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUkYyTEF0QTNZZWcvTHJvNisvSEZXazIzMElYMVcvRnNNcDBGcm5VRlRWSXJ6b00xa0hSQ1UvY2lwV0VMbFF2aVZldG5GVmlVdmk4bzNnZnVValg3REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidzhJcmNkcEtkNi96MlQ1SXB6VTJwVHFycVR6ZXdsSnMybmI0cC83bUZ2N1Blcmk4Qm94V0xPRVpHR3hsNzdkcnJuazh6aGwxaU11STdVZ256L3pxRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzAwMzI4MjAzOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ2MTA0NTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDeVlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN5WS5qc29uIjogIntcImtleURhdGFcIjpcIkllSjhySHpvTGNUMDB4aHdDRzhHNUcyODFjK1hDNUF4WVlOZHBBVTNYeFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI3NzgyNDQ0MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
