import { InteractionResponseType, InteractionType } from 'discord-interactions';
import { UMA_COMMAND } from './commands';
import { JsonResponse } from './JsonResponse';
import umaCommand from './umaCommand';
import { verifyDiscordRequest } from './verifyDiscordRequest';

export interface Env {
  DISCORD_APPLICATION_ID: string;
  DISCORD_PUBLIC_KEY: string;
  DISCORD_TOKEN: string;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const discordResponse = await verifyDiscordRequest(request, env);

    if (discordResponse) {
      return discordResponse;
    }

    const message = await request.json<any>();

    console.log(JSON.stringify(message, null, 2));

    if (message.type === InteractionType.PING) {
      return new JsonResponse({ type: InteractionResponseType.PONG });
    }

    const commandName = message.data.name.toLowerCase();

    if (
      message.type === InteractionType.APPLICATION_COMMAND &&
      commandName === UMA_COMMAND.name
    ) {
      const message = umaCommand();

      return new JsonResponse({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { content: message },
      });
    }

    return new Response('Unknown Type', {
      status: 400,
    });
  },
};
