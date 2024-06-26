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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163589423";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_35_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNixcbiAgICAgICAgMTE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzksXG4gICAgICAgIDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzMsXG4gICAgICAgIDQyLFxuICAgICAgICA1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MixcbiAgICAgICAgNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVZMllYU2laa1BOakFGM3JxTkJ2STBBVXBhbk5KaWwvaTRUeEN2dHJjUW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImkyZGl6LUNFUkhXR3dianlnWnNHZEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTEwZjk1OTItYmUwZi00NGRhLTlkYzAtMTVmZjg0MjI1NjE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgMjAxLFxuICAgICAgNjMsXG4gICAgICAxMjcsXG4gICAgICAxNCxcbiAgICAgIDE4MyxcbiAgICAgIDI1MyxcbiAgICAgIDEzOSxcbiAgICAgIDEwLFxuICAgICAgMTAsXG4gICAgICAyLFxuICAgICAgMjIwLFxuICAgICAgMTI5LFxuICAgICAgNzQsXG4gICAgICAxNDUsXG4gICAgICAxODksXG4gICAgICAyMSxcbiAgICAgIDQwLFxuICAgICAgMjE2LFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgMTYzLFxuICAgICAgMTUzLFxuICAgICAgMTkyLFxuICAgICAgMTA0LFxuICAgICAgNTIsXG4gICAgICAxOTYsXG4gICAgICAzLFxuICAgICAgMTE1LFxuICAgICAgMjgsXG4gICAgICAyMTMsXG4gICAgICAxNDQsXG4gICAgICAxNzQsXG4gICAgICAyMTQsXG4gICAgICAxMTUsXG4gICAgICAxMDgsXG4gICAgICA3MyxcbiAgICAgIDg2LFxuICAgICAgMjA4LFxuICAgICAgMjMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY3TEFBNktGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYzNTg5NDIzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBQksgR1JBRklYXCIsXG4gICAgXCJsaWRcIjogXCIxMDAzMzkyNzc2NjgzNTY6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaXR0WUFIRUxydDdyTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5LVWxQanhlQVp4OEl2cFN3dGNGOUxTQ0s3ZnZENE84TXVPelpnUk8wRUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNDN3RnBkSzdYZmRaQml6RjI3Z1pGWk1pTGZRYWVzWUJHekR4TGM3NDJFd2hkcmVrdGpkTFBlZE9PTUY4QUJTZ1hFYzdMeGNrb0FuNysrZjFRSm1KQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidGNJRGFRcGlGOXJrTGRQVi9ZVys3UWE2empyVHpWRlZNN1N5YlFoLzllcWtpVEhjL1gyMEhJTjZITVdoRmlWN3V6QmdYR3hEekVpbm9NckwzcEVpQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MzU4OTQyMzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzgzNzQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTTAvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNMC8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
