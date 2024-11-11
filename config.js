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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_50_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1LFxuICAgICAgICA4NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk1LFxuICAgICAgICA2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDgyLFxuICAgICAgICA2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhNQk9FUEt0cGR0OTgwekVBRzZZVHFOd0I1cmVWbFRPaUlPN2pRYmVUMUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInYtaFFYWUM5UkktSElHbWs2aHRRN3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzQ2YzM1YjYtYmYwNy00MGE0LTg4ZDItNjc2YmVhOTUwODk5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDc5LFxuICAgICAgMTQ2LFxuICAgICAgMzksXG4gICAgICAxMzUsXG4gICAgICA4MyxcbiAgICAgIDcsXG4gICAgICAyNTMsXG4gICAgICAxMTMsXG4gICAgICAyMzAsXG4gICAgICA5NSxcbiAgICAgIDkyLFxuICAgICAgODEsXG4gICAgICAxNjMsXG4gICAgICAxNTMsXG4gICAgICAxOTUsXG4gICAgICAxMCxcbiAgICAgIDI0MixcbiAgICAgIDk1LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDIyLFxuICAgICAgMjI1LFxuICAgICAgMjQwLFxuICAgICAgNzIsXG4gICAgICA3OSxcbiAgICAgIDE2OCxcbiAgICAgIDE1MixcbiAgICAgIDY0LFxuICAgICAgNTQsXG4gICAgICAyOCxcbiAgICAgIDU5LFxuICAgICAgMTc5LFxuICAgICAgMTk0LFxuICAgICAgMzksXG4gICAgICAxNjEsXG4gICAgICA4OCxcbiAgICAgIDM2LFxuICAgICAgMTczLFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLWjc3V0tFQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTkxNDYzMjAyOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NzMwMTI5MTE1NTQ5NDoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPM1hwZllIRVBuOXhia0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpZbFMzK0gwT29mLzczT0JIMUxyeHVRcUdPeEpPNVQwU2FmYkgzS3d5alU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWjBmNXE4eWJQTklCRnFucHZxRjhVeWVCM3E5S0xMQWpVVUFOZWFhWjRmZHQvZERtdDNBQUYxSDZsSHd2Zkd6ajA5VDNCMEV1TUkrYVhSellSUDlCQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibFdmRGVFS1VicWYraThBb3pab3lEYUo0OERtU0FjR0lnLzNGWTdUbkZ2ZHpJbmJ5UHFuUG9QaWlSc0o0SVczejdrclVWczl6QitXci90U0VBS2pJRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTkxNDYzMjAyOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTI5NzAxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhUbVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFRtLmpzb24iOiAie1wia2V5RGF0YVwiOlwicWxDcThVeVFjS2hnKzhKZCt6WTBNUWtFZmVWVWJqZEY1WHBoRzR6VFZPVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTI3MTI5NTgxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgyODY4NDE5MDhcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
