import { verifyKey } from 'discord-interactions';
import { Env } from '.';

export async function verifyDiscordRequest(request: Request, env: Env) {
  if (request.method === 'POST') {
    const rawBody = await request.clone().text();
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
}
