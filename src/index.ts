import { InteractionResponseType, verifyKey } from 'discord-interactions';

/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
  DISCORD_APPLICATION_ID: string
  DISCORD_PUBLIC_KEY: string
  DISCORD_TOKEN: string
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const rawBody = await request.text()
    const signature = request.headers.get('X-Signature-Ed25519')
    const timestamp = request.headers.get('X-Signature-Timestamp')
    const pubKey = env.DISCORD_PUBLIC_KEY

    if (signature == null || timestamp == null) {
      return new Response('Sorry, you have supplied an invalid key.', {
        status: 403
      })
    }

    const isValidRequest = verifyKey(rawBody, signature, timestamp, pubKey)

    if (!isValidRequest) {
      return new Response('Bad request signature', {
        status: 401
      })
    }

    return new Response(
      JSON.stringify({
        type: InteractionResponseType.PONG
      }),
      {
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        }
      }
    );
  },
};
