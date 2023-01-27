import { InteractionResponseType } from "discord-interactions";

interface JsonBody {
  type: InteractionResponseType;
  data?: {
    content: string;
  };
}

export class JsonResponse extends Response {
  constructor(body: JsonBody, init?: ResponseInit) {
    const jsonBody = JSON.stringify(body);
    init = init || {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    };
    super(jsonBody, init);
  }
}
