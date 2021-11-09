import React, { memo } from 'react'

function ChildUseCallBack(props) {

    let title = 'cyber learn'
    let object = {id:1, name:'Hanh'}

    console.log('title', title)
    console.log('object', object)

    return (
        <div>
        <small>{props.renderNotify()}</small>
            <textarea></textarea> <br />
            <button className='btn btn-success'>Gửi</button>
        </div>
    )
}

export default memo (ChildUseCallBack)