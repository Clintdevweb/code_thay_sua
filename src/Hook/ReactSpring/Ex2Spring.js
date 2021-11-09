import React from 'react'
import { useSpring, animated } from 'react-spring'


export default function Ex2Spring() {

    let propsUseSpring = useSpring({
        color: [131, 111, 255],
        from: {
            color: [238, 99, 99]
        },
        config: { duration: 3000, delay: 0 }
    })

    // tang do dai 
    let propsAnimation = useSpring({
        from: {
            width: "0%",
            height: "0%",
            fontSize: "10px"
        },
        to: async (next, cancel) => {
            await next({ width: '100%', height: '100%', fontSize: '50px' })
            await next({ width: '50%', height: '50%', fontSize: '10px' })
            await next({ width: "50%", height: '100%', fontSize: '50px' })

        },
        config: {
            duration: 5000
        }
    })


    return (
        <div>

            <animated.div style={{
                color: propsUseSpring.color.to((r, g, b) => { return `rgb(${r},${g},${b})` })
            }}>
                Hello Hanh
            </animated.div>


            <animated.div style={ propsAnimation }>
                <h6>hello cyberlearn</h6>
                <p>KHoa hoc duoc thuc hien tai cyber learn</p>
            </animated.div>
        </div>
    )
}
