import React, {useState} from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';

const Draggable = () => {
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))
    const bind = useDrag(({ offset: [x, y] }) => api.start({ x, y }))
    return <animated.div {...bind()} style={{ x, y }} />
}

export default Draggable;