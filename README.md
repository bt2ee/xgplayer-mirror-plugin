# xgplayer-mirror-plugin

[![npm version](https://badgen.net/npm/v/xgplayer-mirror-plugin)](https://npm.im/xgplayer-mirror-plugin) [![npm downloads](https://badgen.net/npm/dm/xgplayer-mirror-plugin)](https://npm.im/xgplayer-mirror-plugin)
## Install

via `pnpm`, `yarn` or `npm`:

```bash
pnpm add xgplayer-mirror-plugin
# or
yarn add xgplayer-mirror-plugin
# or
npm i -S xgplayer-mirror-plugin
```

## Usage
```jsx
import Player from 'xgplayer';
import { mirror, s_mirror } from 'xgplayer-mirror-plugin'

Player.installAll([mirror, s_mirror]);

new Player({

  ...

  mirror: {
    horizontal: true,
    vertical: true,
  },
});
```
