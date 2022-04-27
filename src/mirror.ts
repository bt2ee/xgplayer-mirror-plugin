export const MIRROR_DIRECTION = {
  NORMAL: 0,
  HORIZONTAL: 1,
  VERTICAL: 2
}

function mirror(){
  const player = this
  if (!player.config.mirror) { return }

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
