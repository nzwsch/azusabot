const dotenv = require('dotenv')

dotenv.config()

const { AWW_COMMAND, INVITE_COMMAND } = require('./commands.js');
// import Axios from 'axios';
const Axios = require('axios')

/**
 * This file is meant to be run from the command line, and is not used by the
 * application server.  It's allowed to use node.js primitives, and only needs
 * to be run once.
 */

const token = process.env.DISCORD_TOKEN;
const applicationId = process.env.DISCORD_APPLICATION_ID;

if (!token) {
  throw new Error('The DISCORD_TOKEN environment variable is required.');
}
if (!applicationId) {
  throw new Error(
    'The DISCORD_APPLICATION_ID environment variable is required.'
  );
}

/**
 * Register all commands globally.  This can take o(minutes), so wait until
 * you're sure these are the commands you want.
 */
async function registerGlobalCommands() {
  const url = `https://discord.com/api/v10/applications/${applicationId}/commands`;
  await registerCommands(url);
}

async function registerCommands(url) {
  const response = await Axios({
    method: 'PUT',
    url: url,
    data: [
      AWW_COMMAND,
      INVITE_COMMAND
    ],
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bot ${token}`,
    },
  });

  if (response.status === 200) {
    console.log('Registered all commands');
  } else {
    console.error('Error registering commands');
    const text = response.data;
    console.error(text);
  }
  return response;
}

;(async function() {
  await registerGlobalCommands()
})()
