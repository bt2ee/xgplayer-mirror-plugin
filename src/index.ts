import { createDom } from 'xgplayer/src/utils/util';
import MirrorXIcon from './../assets/mirror-x.svg';

function MirrorPlugin(player: any){
  // 插件逻辑
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

  player.on('onMirrorBtnClick', onMirrorBtnClick)

  function onDestroy () {
    player.off('onMirrorBtnClick', onMirrorBtnClick)
    player.off('destroy', onDestroy)
  }
  player.once('destroy', onDestroy)

  function onMirrorBtnClick() {
    player.video.style.transform = `rotate(${180}deg)`
    player.video.style.webKitTransform = `rotate(${180}deg)`
  }

  ['click', 'touchend'].forEach((item) => {
    btn.addEventListener(item, function (e: Event) {
      e.preventDefault();
      e.stopPropagation();
      onMirrorBtnClick();
    });
  });
}

export default MirrorPlugin
