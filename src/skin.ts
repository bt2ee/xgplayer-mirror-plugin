import { createDom } from 'xgplayer/src/utils/util';
import MirrorXIcon from './../assets/mirror-x.svg';
import MirrorYIcon from './../assets/mirror-y.svg';
import './mirror.css'

const MIRROR_LANG: Record<string, string> = {
  HORIZONTAL: '水平翻转',
  VERTICAL: '垂直翻转'
}

const MIRROR_ICON: Record<string, SVGAElement> = {
  HORIZONTAL: MirrorXIcon,
  VERTICAL: MirrorYIcon
}

let s_mirror = function (this: any) {
  let player = this
  if (!player.config.mirror) { return }
  const mirrorArr = []
  if(player.config.mirror.horizontal) {
    mirrorArr.push('HORIZONTAL')
  }
  if(player.config.mirror.vertical) {
    mirrorArr.push('VERTICAL')
  }
  if(!mirrorArr.length) { return }

  mirrorArr.forEach((direction: string) => {
    let btn = createDom('xg-mirror', `<xg-icon class="xgplayer-icon">${MIRROR_ICON[direction]}</xg-icon>`, {}, 'xgplayer-mirror')

    let tips = createDom('xg-tips', `<span class="xgplayer-tip-mirror">${MIRROR_LANG[direction]}</span>`, {}, 'xgplayer-tips')
    btn.appendChild(tips)

    player.once('ready', () => {
      player.controls.appendChild(btn)
    });

    ['click', 'touchend'].forEach(item => {
      btn.addEventListener(item, function (e: MouseEvent) {
        e.preventDefault()
        e.stopPropagation()
        player.userGestureTrigEvent('onMirrorBtnClick', direction)
      })
    })
  })
}

export default {
  name: 's_mirror',
  method: s_mirror
}
