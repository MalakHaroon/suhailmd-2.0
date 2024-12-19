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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_06_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMwLFxuICAgICAgICA2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTczLFxuICAgICAgICA3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OSxcbiAgICAgICAgODksXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MixcbiAgICAgICAgMTIsXG4gICAgICAgIDgxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMixcbiAgICAgICAgMTU1LFxuICAgICAgICA2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDkzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NixcbiAgICAgICAgMjUyLFxuICAgICAgICA1NixcbiAgICAgICAgMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYeHhRekFYaUFaRm5vdnVJblkvMnRVMlBtZ3ZvTktoSFViRXlTa0lid0tZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPUHJmVFdxc1JDYUlkTzBYYUJLVjBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAyODc5ZGY1LTZmMWEtNGIxYi1hNGRkLWE4YzdjN2I1NDc5NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAyMixcbiAgICAgIDg4LFxuICAgICAgMTA5LFxuICAgICAgMTQ3LFxuICAgICAgMjM3LFxuICAgICAgMTEwLFxuICAgICAgMTUsXG4gICAgICAyOCxcbiAgICAgIDk1LFxuICAgICAgMTMsXG4gICAgICA2LFxuICAgICAgMTk1LFxuICAgICAgMTI1LFxuICAgICAgMTU3LFxuICAgICAgMTU1LFxuICAgICAgMTY1LFxuICAgICAgMzEsXG4gICAgICAyNTQsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDg1LFxuICAgICAgNDgsXG4gICAgICAxNzIsXG4gICAgICAyMTAsXG4gICAgICA4NCxcbiAgICAgIDI0MyxcbiAgICAgIDExNyxcbiAgICAgIDM0LFxuICAgICAgMCxcbiAgICAgIDIwNCxcbiAgICAgIDEwLFxuICAgICAgMTcsXG4gICAgICAxMzAsXG4gICAgICAyMixcbiAgICAgIDExMCxcbiAgICAgIDI2LFxuICAgICAgMjQ5LFxuICAgICAgNTgsXG4gICAgICA4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTQUQ5V0NRSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzAwMzI4MjAzOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQXphbSBLaGFuXCIsXG4gICAgXCJsaWRcIjogXCIxNjg4Njk5MTAwNTcwNzY6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDJicU9FRUVKdjhqN3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4b1RpMWlMV1QyelM5WWI2Z3BPMklYUUVweXZ4ZEY3eGpkdVpSSXJ6WURNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNwTy9uQ2Y1L29wSnltcDRBUGFhVXNqNWJzL2pLamRFSkdLUXA0bFY2ZklPU1J3WjhFVlJiR2l0Z3dLRlRFSU8rVUc3cEhuaEFvSjE0V3YwOCtlT0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlEvVWxLVFlGc1hvQXJlWnYzQUVteFFpRGZaUjRqYUxyekE1MWNGY1EvQk81R2ZhMHdDWm10OVE5bDhtY25lb2krazlITHA5dEVlZDlQTUtUSGNSK0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMwMDMyODIwMzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NjA2MzY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ3ljXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDeWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxK0ZDZTdKU1lrNHJVNzlJZkh4bE5OZXVwTFBlNFRvQnV6WllISjVnQ3ZnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNzc4MjQ0NDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
