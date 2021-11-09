/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react'
import ChildEffect from './ChildEffect'

export default function DemoHookUseEffect(props) {

    let [number, setNumber] = useState(1)

    const handleIncrease = () => {
        setNumber(number+1)
    }

    // Chay moi truong hop
    // useEffect(() => {
    //     console.log('abc')

    // })

    //Cach viet thay the componentdidmount
    useEffect(() => {
        console.log('abc');  
    },[])

    //Cach viet thay the componentdidupdate

    useEffect(() => {
        console.log('abc');  
    },[number]) 

    console.log('render')

    return (
        <div className=''>
            <img className="card-img-top img-fluid" style={{width:'200px', height:'200px'}} src="https://picsum.photos/200/200" alt />
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text" style={{color:'red'}}>{number} ❤ </p>
            </div>
            <button className='btn btn-success mb-5' onClick={handleIncrease}>+</button>

            {number === 1 ? <ChildEffect /> : ''}
        </div>
    )
}

