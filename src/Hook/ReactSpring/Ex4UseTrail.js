import React, { useState } from 'react'
import { useTrail } from '@react-spring/core'
import { animated } from '@react-spring/web'
const items = [
    { title: "Front End", content: "Cyber Learn1" },
    { title: "Back End", content: "Cyber Learn2" },
    { title: "Full Stack", content: "Cyber Learn3" }

]

export default function Ex4UseTrail() {

    let [status, setStatus] = useState(true)
    const [propsUseTrail, set, stop] = useTrail(items.length, () => {
        return {
            opacity: status ? 1 : 0,
            x: status ? 0 : 20,
            height: status ? 80 : 0,
            color: 'red',
            from: {
                opacity: 0, x: 20, height: 0, color: 'green'
    
            },
            config: { duration: 1000 }
    
        }
    })

    set({
        opacity: status ? 1 : 0,
        x: status ? 0 : 20,
        height: status ? 80 : 0,
        color: 'red',
        from: {
            opacity: 0, x: 20, height: 0, color: 'green'

        },
        config: { duration: 1000 }

    })

    return (
        <div>
            <button className='btn btn-success mt-5' onClick={() => {
                setStatus(!status)
            }}>Click</button>

            <button className='btn btn-success mt-5' onClick={() => {
                set({color:'purple'})
            }}>Set Color</button> 
            
            {propsUseTrail.map((propsUseSprings, index) => {
                return (
                    <animated.h1 key={index} style={propsUseSprings}>
                        {items[index].title}
                    </animated.h1>
                )
            })}

        </div>
    )
}
