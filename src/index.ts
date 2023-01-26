import { InteractionResponseType, verifyKey } from 'discord-interactions';

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

    return new Response(
      JSON.stringify({
        type: InteractionResponseType.PONG,
      }),
      {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      }
    );
  },
};
