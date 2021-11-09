import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { addComment } from '../redux/actions/FakeBookAction'


export default function DemoReduxApp(props) {
    let comments = useSelector(state => state.FakeBookReducer.comments)
    // console.log(comments);

    let dispatch = useDispatch()

    // Lay thong tin nguoi dung nhap vao
    let [userComment, setUserComment] = useState({
        name: '',
        content: '',
        avatar: ''
    })

    // console.log(userComment);
    const handleChageInpunt = (e) => {
        let { value, name } = e.target
        setUserComment({
            ...userComment, [name]: value
        })
    }

    const handleComment = (e) => {
        e.preventDefault()

        let usComment = {...userComment, avatar:`https://i.pravatar.cc/150?u=${userComment.name}`}
        
        dispatch(addComment(usComment))

    }


    return (
        <div className='container'>
            <h3>Fake Book App</h3>
            <div className="card">
                <div className='card-header'>
                    {comments.map((user, index) => {
                        return (
                            <div className='row' key={index}>
                                <div className='col-2'>
                                    <img src={user.avatar} style={{ height: 60 }} alt="" />
                                </div>
                                <div className='col-10'>
                                    <h6 className='text-danger'>{user.name}</h6>
                                    <p>{user.content}</p>
                                </div>
                            </div>
                        )
                    })}

                    <form className="card-body" onSubmit={handleComment}>
                        <div className='form-group'>
                            <h4 className="card-title">Name</h4>
                            <input onChange={handleChageInpunt} type="text" className='form-control' name='name' />

                        </div>
                        <div className='form-group'>
                            <h4 className="card-title">Content</h4>
                            <input onChange={handleChageInpunt} type="text" className='form-control' name='content' />

                        </div>
                        <div className='form-group'>
                            <button className='btn btn-success' type='submit'>Gui</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

