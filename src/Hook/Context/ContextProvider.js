import React, {useReducer} from 'react'

export const context = React.createContext()
let initialCart = [];
let cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart': {
            let index = state.findIndex(item => item.id === action.product.id);
            if (index !== -1) {
                state[index].quantity += 1;
                return [...state];
            }
            return [...state, { ...action.product, quantity: 1 }]
        };
        default: return state;
    }
}


export default function ContextProvider(props) {
    let [cart, dispatch] = useReducer(cartReducer, initialCart);
    //Có thể kết hợp useState hoặc useReducer
    const store = {
        cartReducer: [cart, dispatch], //Tạo ra store giống như rootReducer
    };


    return (
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    )
}
