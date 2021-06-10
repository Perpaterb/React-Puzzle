import { render } from 'react-dom'
import React from 'react'
import { useSpring, to, animated, config } from 'react-spring'
import { scale, dist } from 'vec-la'
import { useDrag } from 'react-use-gesture';

const DragBox = () => {
  const [{ pos }, set] = useSpring(() => ({ pos: [0, 0] }))
  const [{ angle }, setAngle] = useSpring(() => ({ angle: 0, config: config.wobbly }))
  // direction calculates pointer direction
  // memo is like a cache, it contains the values that you return inside "set"
  // this way we can inject the springs current coordinates on the initial event and
  // add movement to it for convenience

  const bind = useDrag(
    ({ xy, previous, down, movement: pos, velocity, direction }) => {
      set({ pos, immediate: down, config: { velocity: scale(direction, velocity), decay: true } })
      if (dist(xy, previous) > 10 || !down) setAngle({ angle: Math.atan2(direction[0], -direction[1]) })
    },
    { initial: () => pos.get() }
  )
  return (
    <animated.div
      {...bind()}
      style={{backgroundColor: "#44014c", width: "100px", height: "100px", transform: to([pos, angle], ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`) }}
    />
  )
}

export default DragBox