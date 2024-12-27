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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_44_12_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NSxcbiAgICAgICAgODksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg2LFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDg2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MixcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcxLFxuICAgICAgICA1OSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk3LFxuICAgICAgICA0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc4LFxuICAgICAgICA0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgODksXG4gICAgICAgIDIxNixcbiAgICAgICAgNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhLM2E4bzlhcTZwcWEyUmJubC9LY2xLRGtHMTlXcUYyaWZDU2FtMTRncDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE0MTgzMjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNzQ0MkUxNTY0NjUwREQ0ODk3MzUzQzdGNjA1Qjc1MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUyODU0NzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTQxODMyNjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNGQjg3OTIxMTJFQTQxOEFFMTk0NzkyNjE0NjIwMDBEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTI4NTQ3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNDE4MzI2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDEyQjA0OEQ3RTk1REQ0Qjc4NjAzRjQzRjgzMjU1OTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1Mjg1NDc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE0MTgzMjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NTVBQkJBRDdCNzMxODdCRDA1NEY0OTBEQ0JBNkM2QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUyODU0NzhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNGJybmI0R2tTN2FmbzFxeDhITzdwQVwiLFxuICBcInBob25lSWRcIjogXCJmZTRkZTlhMS03ZWVlLTQxMmMtYjZjZC05Mzc2MmNhZTU1M2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA2LFxuICAgICAgMjgsXG4gICAgICA0LFxuICAgICAgMjI2LFxuICAgICAgMTU0LFxuICAgICAgMjQ3LFxuICAgICAgNDgsXG4gICAgICAxMjcsXG4gICAgICA5OCxcbiAgICAgIDI1MSxcbiAgICAgIDU2LFxuICAgICAgODYsXG4gICAgICAxOTksXG4gICAgICAxNTAsXG4gICAgICA0NCxcbiAgICAgIDE4MyxcbiAgICAgIDIwNCxcbiAgICAgIDExNixcbiAgICAgIDQ4LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAxNDQsXG4gICAgICA3NixcbiAgICAgIDI5LFxuICAgICAgODUsXG4gICAgICA4NCxcbiAgICAgIDE2NCxcbiAgICAgIDkyLFxuICAgICAgMTc3LFxuICAgICAgMjE1LFxuICAgICAgMjA2LFxuICAgICAgNTMsXG4gICAgICA4OCxcbiAgICAgIDE1NyxcbiAgICAgIDg0LFxuICAgICAgMjIzLFxuICAgICAgMTMxLFxuICAgICAgMCxcbiAgICAgIDU5LFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWU4citjRUVOMjF1YnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5bCtKZ3k3Ym1NZ1BCRWVEbW14cEJMWjcwYnp6bTZ3cHViUkZpK2RSQTA4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkszdVkrMDYzbTZUVFRrVlZJWXlvYnlHbCsrZ1Ftd1o2cUZ1Unp5ZUQrYUdNR1RlZFIzanlWeTdGK29xRUQxKzNMZVhJMjhkVWxHeXNkcUV4RmJ1Z0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlwRWNQYWNkQ3NzYitnRUQyQUpVbjUzOGFuSENWeStrbXFQQjduVjJaR01kc2M2elF1N0ZzQU96ekRYc2NHVWFrKytudUgzUEtTTDU5RWNZMEZud2lnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE0MTgzMjYxOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTSEFET1dCT1RcIixcbiAgICBcImxpZFwiOiBcIjc0NTc0MDg3NjIyNzM5OjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTQxODMyNjE6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUyODU0NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGeVdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ5VS5qc29uIjogIntcImtleURhdGFcIjpcImExNW56VGpEZGN0REVlRlp3YjVXZDlMYnNwRC9hYVdkMllrUG9GbTBLeGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI5MDUyNjI3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnlWLmpzb24iOiAie1wia2V5RGF0YVwiOlwib1gzNi93RVlCRy91UVplTzFYTkxtQXF4bm5LTUM5YVhSdFEwdFRRVTA0OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjkwNTI2Mjc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM1Mjc4MDYxMjM3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnlXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaDMxQ09HN0V6TXZKaS85cnBqdEY4L2JHU0F2NWJDdFQ5UzM3Q3VHNVRkST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjkwNTI2Mjc5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUyODU0NzYzMDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD ",
  ownername:process.env.OWNER_NAME|| "SHADOWWALKER [mandishona innocent]",


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
