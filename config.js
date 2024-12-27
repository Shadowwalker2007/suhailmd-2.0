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
global.caption = process.env.CAPTION || global.caption || "© SHADOWWALKER" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263714183261";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_27_12_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDkzLFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM4LFxuICAgICAgICA1NixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NixcbiAgICAgICAgNTksXG4gICAgICAgIDIxLFxuICAgICAgICA3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDcxLFxuICAgICAgICA5NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk40Wk0wWlg2RVVsWmVjekdtdUFIcklxOFpmR0FtMUEvQmVaK3JJK3pSRWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE0MTgzMjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQTQzM0VBODYwRTFBNUFFNzE0Rjc1NkMyMkNCMTkxNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUyOTE2NTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTQxODMyNjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU3RDBFM0U0RUY0QzA5RTNDREUyMDlEM0UzNTczMjEyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTI5MTY1MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1dDc1RXFWcFRPeW93bVZiTTl6TWNRXCIsXG4gIFwicGhvbmVJZFwiOiBcImFhZWUyMDY3LTg1NjEtNGYxMS1hNWI0LTc0NWQxYzU5ZWQ4MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAyNyxcbiAgICAgIDE1NCxcbiAgICAgIDExMixcbiAgICAgIDczLFxuICAgICAgNjIsXG4gICAgICAxNjUsXG4gICAgICA2NixcbiAgICAgIDk5LFxuICAgICAgODYsXG4gICAgICAyMTAsXG4gICAgICAxNixcbiAgICAgIDQ3LFxuICAgICAgMTU1LFxuICAgICAgNjAsXG4gICAgICAxMDksXG4gICAgICAxNDQsXG4gICAgICAyLFxuICAgICAgMzUsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDgsXG4gICAgICAxMCxcbiAgICAgIDI1MixcbiAgICAgIDQyLFxuICAgICAgMTQsXG4gICAgICAyMDgsXG4gICAgICAxMDYsXG4gICAgICAxNzMsXG4gICAgICAxNzYsXG4gICAgICAxMjMsXG4gICAgICAxNTYsXG4gICAgICA0MixcbiAgICAgIDIxMSxcbiAgICAgIDEzLFxuICAgICAgMTE0LFxuICAgICAgNDQsXG4gICAgICAyNTAsXG4gICAgICAyMjEsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01pOHIrY0VFUHZsdWJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOWwrSmd5N2JtTWdQQkVlRG1teHBCTFo3MGJ6em02d3B1YlJGaStkUkEwOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrUWVPNklVMUEzemFrRk5IZFllMnN3YVZET2lnNjU4Q2RubTVOR0FmNm9ERDBQWWRjb2ZkQ3VXbWZTMjNuNGhTb0p6czA4dUpnWjZYajZYZzQxbVpEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHR1hSazVQWEltclpLY0JUa1ZXSVUwbWlPUW9hcFFkZE02azc1YjN1T1hyMkQ5YnhpNGx6TDBwUkEwM21vaUN6aXFjbjVzUHd5ZU1hd0ZJcmY4NFFndz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNDE4MzI2MToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNIQURPV0JPVFwiLFxuICAgIFwibGlkXCI6IFwiNzQ1NzQwODc2MjI3Mzk6MTBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTQxODMyNjE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MjkxNjQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnlZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGeVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhMTVuelRqRGRjdERFZUZad2I1V2Q5TGJzcEQvYWFXZDJZa1BvRm0wS3hnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyOTA1MjYyNzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ5Vi5qc29uIjogIntcImtleURhdGFcIjpcIm9YMzYvd0VZQkcvdVFaZU8xWE5MbUFxeG5uS01DOWFYUnRRMHRUUVUwNDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI5MDUyNjI3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNTI3ODA2MTIzN1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ5Vy5qc29uIjogIntcImtleURhdGFcIjpcImgzMUNPRzdFek12SmkvOXJwanRGOC9iR1NBdjViQ3RUOVMzN0N1RzVUZEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI5MDUyNjI3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnlYLmpzb24iOiAie1wia2V5RGF0YVwiOlwibCs3bTR3L21jN2FodU8rL28xcUViblY2U3lSS2g1MDRzUE5yQW55Qm1pUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjkwNTI2Mjc5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM1MjkxNjI1ODA3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnlZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVll6T1dXRUQxMUFMYUtLUFd6MUx3b2E0R2tvVWYvdSt3ZmhzUE5abW80WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjkwNTI2MjgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUyOTE2NTE4MzlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "NOVA",
  ownername:process.env.OWNER_NAME|| "SHADOWWALKER[mandishonainnocent]",


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
