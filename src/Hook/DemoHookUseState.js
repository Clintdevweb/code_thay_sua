
import React, { useState } from 'react'

export default function DemoHookUseState() {

    let [state, setState] = useState({ like: 1 })

    const handleLike = () => {
        setState({
            like:state.like + 1
        })
    }

    return (
        <div  className="card text-white " style={{width:"300px"}}>
            <img className="card-img-top img-fluid" style={{width:'200px', height:'200px'}} src="https://picsum.photos/200/200" alt />
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text" style={{color:'red'}}>{state.like} ❤ </p>
            </div>

            <div className='btn btn-danger' onClick={handleLike}>Like</div>
        </div>


    )
}
