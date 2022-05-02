export const MIRROR_DIRECTION: Record<string, number> = {
  NORMAL: 0,
  HORIZONTAL: 1,
  VERTICAL: 2
}

function mirror(this: any){
  const player = this
  if (!player.config.mirror) { return }

  function onMirrorBtnClick (direction: string = 'NORMAL') {
    player.mirror(MIRROR_DIRECTION[direction])
  }

  player.on('onMirrorBtnClick', onMirrorBtnClick)

  function onDestroy () {
    player.off('onMirrorBtnClick', onMirrorBtnClick)
    player.off('destroy', onDestroy)
  }
  player.once('destroy', onDestroy)

  player.updateDirection = function() {
    if (!player.direction) { player.direction = MIRROR_DIRECTION.NORMAL }

    const mirrorX = (player.direction & MIRROR_DIRECTION.VERTICAL) ? 180 : 0
    const mirrorY = (player.direction & MIRROR_DIRECTION.HORIZONTAL) ? 180 : 0

    player.video.style.transformOrigin = 'center center'
    player.video.style.transform = `rotateX(${mirrorX}deg) rotateY(${mirrorY}deg)`
    player.video.style.webKitTransform = `rotateX(${mirrorX}deg) rotateY(${mirrorY}deg)`
  }

  player.mirror = function (direction = MIRROR_DIRECTION.NORMAL) {
    let player = this;
    if (!player.direction) {
      player.direction = MIRROR_DIRECTION.NORMAL
    }
    player.direction ^= direction

    this.updateDirection()

    player.emit('mirror', player.direction)
  }
}

export default {
  name: 'mirror',
  method: mirror
}
