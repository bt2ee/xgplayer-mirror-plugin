import Player from "xgplayer";
import "./../.xgplayer/skin/index.js";

let pluginName=function(player){

  function mirrorBtnClick () {
    player.mirror(rotateConfig.clockwise, rotateConfig.innerRotate)
  }

  // 插件逻辑
  player.on('mirrorBtnClick', mirrorBtnClick)

  function onDestroy () {
    player.off('mirrorBtnClick', mirrorBtnClick)
  }

  player.updateMirrorDeg = function() {
    if (!player.mirrorDeg) {
      player.mirrorDeg = 0
    }
  }

  player.mirror = function (clockwise = true, innerRotate = true, times = 1) {
    if (!player.mirrorDeg) {
      player.mirrorDeg = 0
    }
    let factor = clockwise ? 1 : -1

    player.mirrorDeg = (player.mirrorDeg + 1 + factor * 0.25 * times) % 1
    this.updateMirrorDeg()

    player.emit('rotate', player.mirrorDeg * 360)
  }
}

Player.install('pluginName',pluginName);

let player = new Player({
  id: 'mse',
  // url: 'http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4'
  url:'//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4',
  poster: "//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
  playbackRate: [0.5, 0.75, 1, 1.5, 2], //传入倍速可选数组,
  rotate: {
    // 只旋转内部video(默认false)
    innerRotate: true,
    // 旋转方向是否为顺时针(默认false)
    clockwise: true
  }
});

// player.poster = 'new poster url'
