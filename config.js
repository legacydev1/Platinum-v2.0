// config.js — NEXUS-MD Configuration
// All values read from .env or config.env at startup
// Use runtime settings commands to change values without restarting
'use strict';

const fs = require('fs');
if (fs.existsSync('.env'))             require('dotenv').config({ path: './.env' });
else if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  SESSION_ID:        process.env.SESSION_ID        || '{"noiseKey":{"private":{"type":"Buffer","data":"CNSX4srPYhH85XnN167jW67dkN+QaN5CJu2pXrXu+Uo="},"public":{"type":"Buffer","data":"UPMg5bklEIXBbfYx+w089mtFPoX6u+YNeykhvVWknwE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"gNrWAH0wD8PRQMM+9+qwltyXtyq+he/B649Iqrhk2lU="},"public":{"type":"Buffer","data":"A0RlURP4AsOXmumIw93SDoNnwiw3xejT8K43cC3WTGg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"KM8XZ39GBICKQbyXkLiwP/n1L1ofTby24av5PV9ehXI="},"public":{"type":"Buffer","data":"wv1mqsGVNsx0MYA/sBDcMt6XKQqci2yaI5ludtpGWRQ="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"mIUg6cSW1tKpmqtbLE+rNRcglP4XXk2GpmXZhZTspXk="},"public":{"type":"Buffer","data":"5oYJdJfAuAQvcueNmkyOJJh53RIq/MxD7POnJgdEvnc="}},"signature":{"type":"Buffer","data":"rDUbFD4VyNW9gALc/gGwKdvrSaV6qGClbGCPi3fe1nI9SPyjvb8Q9tK20/glVf5X0MD7H4HSEIQGkd2OkSBigQ=="},"keyId":1},"registrationId":252,"advSecretKey":"2UMDHWeXqzXvTmBrIBwIBBoxaLOSQKDbtUl+YTFD96E=","processedHistoryMessages":[],"nextPreKeyId":813,"firstUnuploadedPreKeyId":813,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"XYLOWISE","me":{"id":"2348120055226:15@s.whatsapp.net","name":"ᡕᠵ᠊ᡃ່࡚ࠢ࠘⸝່ࠡ᠊߯ᡁࠣ࠘᠊᠊ࠢ࠘气亠𖤍یُونـ٘ـسـؔ ‎ ‎ ‎ ‎legacy ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎","lid":"160572234584230:15@lid"},"account":{"details":"CLv1ytkHEMu28dEGGAEgACgA","accountSignatureKey":"PHPJgUMmoSiOHM4BOD0le3Pw7IQkqu91/X2VUwpEDAY=","accountSignature":"2gn7TBWDE96xkoxVbcSMJUKfnuJamqqcZUd0XW7b/dY2J+EzosHAK8yhWG3k5CK9j5Dhr4Wnt3oXrmp7XNqaDA==","deviceSignature":"UbRH80CrRWAh3g6hKcJ8GlPvCNPYB1+V6SR3T9TPukk6AvpeFLG6PgHX7MOhXg/WxiudxmBjdIklg92xa3qVgQ=="},"signalIdentities":[{"identifier":{"name":"160572234584230:15@lid","deviceId":0},"identifierKey":{"type":"Buffer","data":"BTxzyYFDJqEojhzOATg9JXtz8OyEJKrvdf19lVMKRAwG"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAIIBQgI"},"lastAccountSyncTimestamp":1782340433,"myAppStateKeyId":"AAAAAOVf"}',
  ALIVE_IMG:         process.env.ALIVE_IMG         || 'https://files.catbox.moe/3q57x5.jpg',
  ALIVE_MSG:         process.env.ALIVE_MSG         || '👸 *KYLIE-MD* is online and ready!',
  ANTI_DEL_PATH:     process.env.ANTI_DEL_PATH     || 'same',
  OWNER_NUMBER:      process.env.OWNER_NUMBER       || '',
  MODE:              process.env.MODE               || 'public',
  VERSION:           process.env.VERSION            || '3.0.1',
  PREFIX:            process.env.PREFIX             || ':',
  BOT_NAME:          process.env.BOT_NAME           || 'NEXUS-MD',
  AUTO_READ_STATUS:  process.env.AUTO_READ_STATUS   || 'false',
  OWNER_NAME:        process.env.OWNER_NAME         || 'Owner',
  PAIR_SERVER_URL:   process.env.PAIR_SERVER_URL    || 'https://repo-jjl7.onrender.com',
  STICKER_PACK:      process.env.STICKER_PACK       || 'NEXUS-MD',
  STICKER_AUTHOR:    process.env.STICKER_AUTHOR     || 'nexus',
  TIMEZONE:          process.env.TIMEZONE           || 'Africa/Johannesburg',
  HEROKU_APP_NAME:   process.env.HEROKU_APP_NAME    || '',
  HEROKU_API_KEY:    process.env.HEROKU_API_KEY     || '',
};
