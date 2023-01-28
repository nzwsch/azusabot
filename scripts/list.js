const Axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

/**
 * This file is meant to be run from the command line, and is not used by the
 * application server.  It's allowed to use node.js primitives, and only needs
 * to be run once.
 */

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
 * Register all commands globally.  This can take o(minutes), so wait until
 * you're sure these are the commands you want.
 */
async function listGlobalCommands() {
  const url = `https://discord.com/api/v10/applications/${applicationId}/commands`;
  const response = await listCommands(url);
  return response.data;
}

/**
 * Register all commands globally.  This can take o(minutes), so wait until
 * you're sure these are the commands you want.
 */
async function listGuildCommands() {
  const url = `https://discord.com/api/v10/applications/${applicationId}/guilds/${testGuildId}/commands`;
  const response = await listCommands(url);
  return response.data;
}

async function listCommands(url) {
  const response = await Axios({
    method: 'GET',
    url: url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bot ${token}`,
    },
  });

  if (response.status === 200) {
    console.log(response.data);
  } else {
    console.error('Error registering commands');
    const text = response.data;
    console.error(text);
  }
  return response;
}

async function deleteGuildCommand(commandId) {
  const url = `https://discord.com/api/v10/applications/${applicationId}/guilds/${testGuildId}/commands/${commandId}`;
  await deleteCommand(url);
}

async function deleteCommand(url) {
  const response = await Axios({
    method: 'DELETE',
    url: url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bot ${token}`,
    },
  });

  if (response.status === 204) {
    console.log('command deleted');
  } else {
    console.error('Error deleting commands');
  }
  return response;
}

(async function () {
  // await listGlobalCommands()
  const guildCommands = await listGuildCommands();
  for (const command of guildCommands) {
    console.log(command)
    // await deleteGuildCommand(command.id);
  }
})();
