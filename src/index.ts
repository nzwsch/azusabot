import {
  InteractionResponseType,
  InteractionType,
  verifyKey,
} from 'discord-interactions';
import { AWW_COMMAND } from './commands';
import { JsonResponse } from './JsonResponse';

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
    const rawBody = await request.text();

    if (request.method === 'POST') {
      const signature = request.headers.get('X-Signature-Ed25519');
      const timestamp = request.headers.get('X-Signature-Timestamp');
      const pubKey = env.DISCORD_PUBLIC_KEY;

      if (signature == null || timestamp == null) {
        return new Response('Sorry, you have supplied an invalid key.', {
          status: 403,
        });
      }

      const isValidRequest = verifyKey(rawBody, signature, timestamp, pubKey);

      if (!isValidRequest) {
        return new Response('Bad request signature', {
          status: 401,
        });
      }
    }

    const message = JSON.parse(rawBody);
    const command = message.data.name.toLowerCase();

    if (message.type === InteractionType.PING) {
      return new JsonResponse({ type: InteractionResponseType.PONG });
    }

    if (
      message.type === InteractionType.APPLICATION_COMMAND &&
      command === AWW_COMMAND.name
    ) {
      return new JsonResponse({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { content: 'hello world!' },
      });
    }

    return new Response('Unknown Type', {
      status: 400,
    });
  },
};
