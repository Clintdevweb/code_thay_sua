import React from 'react'
import { useSpring, useSprings } from '@react-spring/core'
import { animated } from '@react-spring/web'


export default function Ex3UseSpring() {
    let arrOpacity =[
        { opacity:0.1, color:'red', content:'Hanh1' , number:100},
        { opacity:0.3, color:'green', content:'Hanh2' , number:200},
        { opacity:0.5, color:'blue', content:'Hanh3' , number:300},
        { opacity:0.7, color:'orange', content:'Hanh4' , number:400},
        { opacity:1, color:'purple', content:'Hanh5', number:500 }
    ]

    let propsAnimationUseSpring = useSprings(arrOpacity.length, arrOpacity.map((item) => ({
        opacity:item.opacity,
        color:item.color,
        content:item.content,
        number:item.number,
        from:{
            opacity:0,
            color:'black',
            content:item.content,
            number:0
        },
        config:{
            duration:3000
        }
    })))

    console.log(propsAnimationUseSpring);
    let renderContent = (propsAni) => {
        let  resultAni = []
        for(let key in propsAni){
            if(key === 'content' || key==='number'){
                resultAni.push(
                    <animated.span style={propsAni} className='ml-2'>
                        {propsAni[key]}
                    </animated.span>
                )
            }
        }
        return resultAni

    }

    return (
       <div>
            {
            propsAnimationUseSpring.map((propsAni, index) => {
                return(
                    <div>
                        {renderContent(propsAni)}
                    </div>
                )
            })
        }
       </div>
    )
}
