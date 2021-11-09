
import { config, useTransition } from '@react-spring/core'
import { animated } from '@react-spring/web'
import React, { useState } from 'react'

export default function Ex5UseTransition(props) {

    const [arrItem, setArrItem] = useState([
        { id: 1, title: "Front End", content: "Cyber Learn1" },
        { id: 2, title: "Back End", content: "Cyber Learn2" },
        { id: 3, title: "Full Stack", content: "Cyber Learn3" },
    ])


    const propsUseTransition = useTransition(arrItem, {
        from: { transform: 'translate3d(0, -40px, 0)' },
        enter: { transform: 'translate3d(0, 40px, 0)' },
        leave: { transform: 'translate3d(0, -40px, 0)' },
        config: { duration: 500 }

    })

    console.log(typeof propsUseTransition);

    // let renderItem = () => {
    //     return propsUseTransition.map(({ item, key, props }, index) => {
    //         return <animated.div key={index} style={props} className='bg-dark text-white p-3 mt-2'>
    //             <h1>{item.title}</h1>
    //             <p>{item.content}</p>
    //         </animated.div>

    //     })

    // }

    return (
        <div className='container'>
            {/* {renderItem()} */}
            {propsUseTransition((propsAni, item,) => {
                return <animated.div style={propsAni} className='bg-dark text-white p-3 mt-2'>
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                </animated.div>

            })}

        </div>
    )
}
