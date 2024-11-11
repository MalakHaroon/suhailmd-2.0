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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_44_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDc3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIzLFxuICAgICAgICA3MCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDM0LFxuICAgICAgICA3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQwLFxuICAgICAgICA5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEbEZVVldJdm8xbzlxSHRvR1BVa2tGMUFlL0hDc1hDWEtyWE5NK25LdTh3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjdWZXWEhuSlFyT3c3d2FwMXNzbUx3XCIsXG4gIFwicGhvbmVJZFwiOiBcImU2NWEyMjBlLWUzODUtNDFkNy04OGI5LWRlYjEwZmI0OGYyOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICA3NyxcbiAgICAgIDAsXG4gICAgICAxNTAsXG4gICAgICA2NSxcbiAgICAgIDE3NCxcbiAgICAgIDEwLFxuICAgICAgMTA4LFxuICAgICAgMjM0LFxuICAgICAgMjA2LFxuICAgICAgNSxcbiAgICAgIDE3NCxcbiAgICAgIDE1MSxcbiAgICAgIDEzNixcbiAgICAgIDEwNyxcbiAgICAgIDIyOSxcbiAgICAgIDE3NCxcbiAgICAgIDE2NyxcbiAgICAgIDE0OCxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDIxNyxcbiAgICAgIDIxOCxcbiAgICAgIDE1OCxcbiAgICAgIDE5OCxcbiAgICAgIDQ0LFxuICAgICAgMjUzLFxuICAgICAgMjM1LFxuICAgICAgMjIxLFxuICAgICAgMTYwLFxuICAgICAgODIsXG4gICAgICAxODYsXG4gICAgICAyMjEsXG4gICAgICAxNTIsXG4gICAgICA5MyxcbiAgICAgIDY2LFxuICAgICAgMTMsXG4gICAgICAxMjEsXG4gICAgICAzOSxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpHUEo4WFJIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNTk5NjM3MDg6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMzQxNjMzODI4MDU0MDoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLU0pxNWtGRUpUNHg3a0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNmcFpIUTRCb1VHdmlsZU9QbG8xc1VrRFJqL0xDMXBVZG81R05PdjNBeXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU0tCc3dYVUE1bHZRVGtLNWlPTGVHWDNHY0ZNRzYvblVwNW5KMTR5TUtDL3V0RDJIeDNZb2JPNzVzSkRlelBQVW9hUkRTZXhpYVlOS3R6TjJuRFoxRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidndKVnhHWjgyYXJ3VDQwRkQ5TGFNb2VRSzIzT2xTYUNtMm8zNWVZRFFQajRkL2pESUd1YnBjOG1HbHdWS25YZUpva1pYMUVKMWlSZmVGYk1NcGRRaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDU5OTYzNzA4OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTMyOTA0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU95Y1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3ljLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSVBXSEFyR0RhU2hva1VKemVJa2xYSFI5YkpMaGhmWjhpVUZBMytlcGczRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzk1MzExNzgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEzMTQyNjUyNjhcIn0iCn0="  // PUT your SESSION_ID 


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
