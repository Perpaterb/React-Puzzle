import { render } from 'react-dom'
import React from 'react'
import { useSpring, to, animated, config } from 'react-spring'
import { scale, dist } from 'vec-la'
import { useDrag } from 'react-use-gesture';

const DragBox = () => {
  const [{ pos }, set] = useSpring(() => ({ pos: [0, 0] }))
  const [{ angle }] = useSpring(() => ({ angle: 0 }))

  const bind = useDrag(
    ({ down, movement: pos }) => {
      set({ pos, immediate: down, decay: true })
    },
    { initial: () => pos.get() }
  )
  return (
    <animated.div
      {...bind()}
      style={{backgroundColor: "#44014c", width: "150px", height: "150px", transform: to([pos, angle], ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`) }}
    />
  )
}

export default DragBox