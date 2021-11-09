import React, {useState, useCallback} from 'react'
import ChildUseCallBack from './ChildUseCallBack';

export default function DemoUseCallBack(props) {
    let [like, setLike] = useState(1);

    const renderNotify = () => {
        return `Ban da tha  ♥ ! `
    }

    let callBackRenderNotify = useCallback(renderNotify, [like])

    return (
        <div className="m-5">
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1)
            }}>♥</span>
            <br />
            <br />
            <ChildUseCallBack  renderNotify={callBackRenderNotify}/>
        </div>
    )
}
