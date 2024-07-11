const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349151024191";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_18_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDU3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMyxcbiAgICAgICAgNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNixcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDc5LFxuICAgICAgICAzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0LFxuICAgICAgICA2NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgODQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY2LFxuICAgICAgICA2MixcbiAgICAgICAgMzksXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjTTlXcnFVaURjQnJxeE5iV0RnZDVKT29mODZkdE02ZG82OE5RSG5NMVlZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSN2tHb1ltOVN2eTd1cXl1aHhHUFh3XCIsXG4gIFwicGhvbmVJZFwiOiBcImZjMTk5NjY5LWJkNzktNGMyOS05OWMyLWNkMDA4N2NkMjQxMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICAxNTIsXG4gICAgICA3NCxcbiAgICAgIDI0OCxcbiAgICAgIDE4MyxcbiAgICAgIDU3LFxuICAgICAgMTkyLFxuICAgICAgNzEsXG4gICAgICAyMzIsXG4gICAgICAxMjEsXG4gICAgICAxODYsXG4gICAgICAxNTksXG4gICAgICAxNTIsXG4gICAgICAxOTgsXG4gICAgICAyMDMsXG4gICAgICAyMjcsXG4gICAgICAyMjMsXG4gICAgICAxODUsXG4gICAgICAyMTgsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICAxMTYsXG4gICAgICAyMTQsXG4gICAgICAyMzYsXG4gICAgICAxNDUsXG4gICAgICAyMzUsXG4gICAgICAzNCxcbiAgICAgIDEwLFxuICAgICAgMTQwLFxuICAgICAgMjM4LFxuICAgICAgODQsXG4gICAgICA4MixcbiAgICAgIDQ3LFxuICAgICAgMTc1LFxuICAgICAgMjQ4LFxuICAgICAgMTAwLFxuICAgICAgMTkyLFxuICAgICAgMTAsXG4gICAgICAyNTAsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUhUMjVXSjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTEwMjQxOTE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQwODM2NzkyNzI5NzI2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVRQMWhZUWxKNjl0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1bkN0SXcyTU1jK09kYllOVWZRNjg0dU90TkNtL0J1V2hFSFplTlNET3dBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpSREFjNyswVGZ2RjdwdmRnVmNTaXMraWMrZnlrN0pVVTlrUmUvMTk1RkNreEZjcjNjUFZ1ZmRiNUxwb2xNNUY5dUNaSm02b2JUTWY5bVZzU2pBN0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhrdDdKc2xaQWxaY0FqTW5ZMFcwY1JnSGdweVhaUHNpd2JNN213SWV2Z085T2lNbWVOTTdaS2hreS95TG5TbWRXL1VtRThiSHFZMDBMTS93QU81RkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTEwMjQxOTE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2Njc5Mjlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
