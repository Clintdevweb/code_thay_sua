import { ADD_COMMENT } from "../types/FakeBookTypes"

/* eslint-disable default-case */
const stateDefault = {
    comments:[
        {name:'Yone', content:'Hi Yasuo', avatar:`https://i.pravatar.cc/150?u=yone`},
        {name:'Yasuo', content:'Hi anh trai !!!!!', avatar:`https://i.pravatar.cc/150?u=yasuo`}
    ]
}

const FakeBookReducer = (state= stateDefault, action) => {
    switch(action.type){
        case ADD_COMMENT:{
            state.comments = [...state.comments, action.userComment]

            return {...state}
        }
    }


    return {...state}
}

export default FakeBookReducer