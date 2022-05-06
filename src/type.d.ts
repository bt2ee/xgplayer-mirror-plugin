declare module 'xgplayer/src/utils/util';
declare module '*.svg'
declare module 'xgplayer-mirror-plugin';

declare module 'xgplayer' {
  interface IPlayerOptions {
    mirror?: boolean | { horizontal?: boolean; vertical?: boolean }
  }
}
