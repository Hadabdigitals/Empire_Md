const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="benjaminzuze190906@gmail.com@gmail.com"
global.location="Harare/Zimbabwe."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Harare/Zimbabwe";
global.github=process.env.GITHUB|| "https://github.com/Agent-Dyke-md/Empire_Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6ntq2i.jpg" || "https://github.com/Agent-Dyke-md/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©by 𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" 


global.devs = "263789122322" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "Agent Dyke";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349015420015";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'   // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/6ntq2i.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,263xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "263xxxxxxxxx,263xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "263xxxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_47_04_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICA1MixcbiAgICAgICAgMjI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDM0LFxuICAgICAgICAzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjExLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDczLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjExLFxuICAgICAgICA3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJmT1AyMmM3bm9CNmZ2L281WXludHNIdkpOMC9pcHJHSDR4L1VpQ0Jpd2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImlhamxWTnZ6U3RlRmRlU0hlM3FVVWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODkxZWE1ZTMtYmNlZS00Mzg0LTgyNGItNTYyOWEzYjgxMmVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDQyLFxuICAgICAgODMsXG4gICAgICAxMjEsXG4gICAgICAxMDMsXG4gICAgICAxODMsXG4gICAgICA4NCxcbiAgICAgIDkyLFxuICAgICAgMjM0LFxuICAgICAgNTMsXG4gICAgICAxOCxcbiAgICAgIDEwNSxcbiAgICAgIDIyNyxcbiAgICAgIDI1LFxuICAgICAgMTc2LFxuICAgICAgOCxcbiAgICAgIDE2MyxcbiAgICAgIDE5LFxuICAgICAgMTgwLFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgNDQsXG4gICAgICAxNTQsXG4gICAgICA1OSxcbiAgICAgIDIxOSxcbiAgICAgIDE2NSxcbiAgICAgIDEwOCxcbiAgICAgIDcsXG4gICAgICAyMjEsXG4gICAgICAyMzgsXG4gICAgICAxNDksXG4gICAgICAzLFxuICAgICAgMTU3LFxuICAgICAgOTIsXG4gICAgICA1MyxcbiAgICAgIDE0NixcbiAgICAgIDE0NSxcbiAgICAgIDIsXG4gICAgICAzNyxcbiAgICAgIDUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlY2RzI5U0RYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE1NDIwMDE1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Qh/CdkJrwnZCd8J2QmvCdkJsg8J2Qg/CdkKLwnZCg8J2QovCdkK3wnZCa8J2QpfCdkKxcIixcbiAgICBcImxpZFwiOiBcIjE1NTkyODc4NzY5NzgzMDoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOcXU4ZFVCRUtmOHlyOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJaSEgxM2ZBb1ppdkI4ZnhTVUlNV2J5Zm03d3A5NW13UmF6L2ZaM01vQms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYlFTeEtsSWFQcDlWMlpDVGNyUGdDWE1xWGhwcFZaUk41MXBURFBMVm9FZkZmWG5tQ205TTJJOVYrUCtpa2cxRWZ4RmhWMTNsMjhtWGRwSkp5UEUyQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMmdFc2djV3h2U2xPejVHM0NXWDludVVmaGhzN3Fab0p1eUpOY1FVYUw2NTB5WjZQeVZ5MWI0ZjNONWM5blBZY2J5a0t0YllZRHplVzIzcEVObHR5RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNTQyMDAxNToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0Mzk2MTY0M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Agent-Dyke-md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞 』```", //*『sᴜʙsᴄʀɪʙᴇ • Empire_Md』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "Empire_Md",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Xploader_Md",
  ownername:process.env.OWNER_NAME|| "Agent-Dyke",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "kUSnarK3Xxue73tRHxzrd9sb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-c5_mjyTPg76Sl7gx6yADErKcLzUlfhs4KcNxFBFso4T3BlbkFJQpbBq0QN6CAr8ia7bqJmveKPTmentTE6guHxlLUnUA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Agent-Dyke"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_59adeb8a55b9c60aba5ed8b8001135049f773814fb35e722";
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
