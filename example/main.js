import Player from 'xgplayer';
import { createDom } from 'xgplayer/src/utils/util';
import MirrorXIcon from './../assets/mirror-x.svg';

let player = new Player({
  id: 'mse',
  // url: 'http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4'
  url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4',
  poster: '//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
  playbackRate: [0.5, 0.75, 1, 1.5, 2], //传入倍速可选数组,
  rotate: {
    // 只旋转内部video(默认false)
    innerRotate: true,
    // 旋转方向是否为顺时针(默认false)
    clockwise: true,
  },
});

let btn = createDom(
  'xg-rotate',
  `<xg-icon class="xgplayer-icon" style="display: flex;justify-content: center;align-items: center;width: 40px;height: 40px;font-size: 63px;margin-top: unset;">${MirrorXIcon}</xg-icon>`,
  {},
  'xgplayer-rotate'
);

let tipsText = '左右翻转';
let tips = createDom(
  'xg-tips',
  `<span class="xgplayer-tip-rotate">${tipsText}</span>`,
  {},
  'xgplayer-tips'
);

btn.appendChild(tips);
player.once('ready', () => {
  player.controls.appendChild(btn);
});

const onclick = () => {
  console.log('click', '==== 1234');
};

['click', 'touchend'].forEach((item) => {
  btn.addEventListener(item, function (e) {
    e.preventDefault();
    e.stopPropagation();
    onclick();
  });
});

// player.poster = 'new poster url'
