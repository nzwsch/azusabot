const dotenv = require('dotenv');
const Axios = require('axios');
const moduleCommands = require('./commands');

/**
 * This file is meant to be run from the command line, and is not used by the
 * application server.  It's allowed to use node.js primitives, and only needs
 * to be run once.
 */

dotenv.config();

const token = process.env.DISCORD_TOKEN;
const applicationId = process.env.DISCORD_APPLICATION_ID;
const testGuildId = process.env.DISCORD_TEST_GUILD_ID;

if (!token) {
  throw new Error('The DISCORD_TOKEN environment variable is required.');
}
if (!applicationId) {
  throw new Error(
    'The DISCORD_APPLICATION_ID environment variable is required.'
  );
}

/**
 * list commands
 */

const commands = Object.keys(moduleCommands)
  .filter((key) => key !== '__esModule')
  .map((key) => moduleCommands[key]);

/**
 * Register all commands globally.  This can take o(minutes), so wait until
 * you're sure these are the commands you want.
 */
async function registerGuildCommands() {
  const url = `https://discord.com/api/v10/applications/${applicationId}/guilds/${testGuildId}/commands`;
  await registerCommands(url);
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
    data: commands,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bot ${token}`,
    },
  });

  if (response.status === 200) {
    console.log('Registered all commands');
  } else {
    console.error(`${response.status}: Error registering commands`);
  }

  return response;
}

(async function () {
  await registerGlobalCommands().catch((err) => {
    if (err.response) {
      console.error(JSON.stringify(err.response.data, null, 2));
    } else {
      console.error(err.message);
    }
  });
})();
