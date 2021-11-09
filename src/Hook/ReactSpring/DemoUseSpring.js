import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function DemoUseSpring(props) {

    const propsAnimation = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config:{duration:1000} })

    const propsAnimaNumber = useSpring({
            to:{num:50, color:'red'}, from:{num:5, color:'green'}, config:{duration:3000}
    })

    const propsScroll = useSpring({
        to:{scroll:100}, from:{scroll:0} 
    })

    return (
        <div>
            <h1>An hien</h1>
            <animated.div style={propsAnimation}>I will fade in</animated.div>
            <hr />

            <h1>Change number</h1>
            <animated.h1 style={{color:propsAnimaNumber.color}}>
                {propsAnimaNumber.num}
            </animated.h1>

            <animated.p style={{fontSize:propsAnimaNumber.num}}>Hon ga</animated.p>
        </div>
    )
}
