import React, {useState, useEffect} from 'react'

export default function ChildEffect() {

    console.log('render ChildEffect');
    let [number, setNumber] = useState(1)


    useEffect(() => {
        
        return () => {
            console.log('willInMount');
        }
    }, [number])
    return (
        <div>
            <textarea name="" id="" cols="30" rows="2"></textarea> <br/> <br />
            <button className='btn-success btn'>Gui</button>
        </div>
    )
}
