# azusabot

> A bot for the Cloudflare Workers Discord server

## Setup

```
npm install -g wrangler
```

### Environment Variables

```
DISCORD_TOKEN
DISCORD_PUBLIC_KEY
DISCORD_APPLICATION_ID
```

## Usage

### Slash Commands

#### `/awww`

Embed a script from [cloudflareworkers.com](https://cloudflareworkers.com).

| Option  | Description                                    |
| ------- | ---------------------------------------------- |
| `url`   | The URL of the Worker on cloudflareworkers.com |
| `title` | An optional title for the Worker script        |

#### `/docs`

Search the [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/).

| Option | Description     |
| ------ | --------------- |
| `term` | The search term |
