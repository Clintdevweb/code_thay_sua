/* eslint-disable default-case */
import React, { useReducer } from 'react'

const initalCart = [
    { id: 1, name: 'iphone', price: 1000, quanity: 1 }
]

const cartReducer = (state, action) => {
    switch (action.type) {
        case "addToCart": {
            let cartUpdate = [...state]
            let product = cartUpdate.find(product => product.id === action.product.id)
            if (product) {
                product.quanity += 1
            } else {
                cartUpdate.push({...action.product, quanity:1})
            }

            return cartUpdate
        }
    }

    return [...state]
}

let arrProduct = [
    { id: 1, name: 'Logitech G903', price: 500 },
    { id: 2, name: 'Logitech G103', price: 200 },
    { id: 3, name: 'Logitech G603', price: 700 },
]


export default function DemoUserReducer(props) {

    let [cart, dispatch] = useReducer(cartReducer, initalCart)
    return (
        <div className='container'>
            <h3 className="display-4 text-center">Product List</h3>
            <div className="row">
                {
                    arrProduct.map((item, index) => {
                        return <div className="col-4" key={index}>
                            <div className="card text-left">
                                <img className="card-img-top" src="http://picsum.photos/100/50" alt={index} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text">{item.price}</p>
                                    <button className='btn btn-success' onClick={() => {
                                        dispatch({
                                            type: 'addToCart',
                                            product: item
                                        })
                                    }}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <h3>Gio Hang</h3>
            <table className='table'>

                <thead>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>quanity</th>
                    <th>total</th>
                    <th></th>
                </thead>
                <tbody>
                    {cart.map((product, index) => {
                        return <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quanity}</td>
                            <td>{product.quanity * product.price}</td>
                            <td><button className='btn-danger btn'>X</button></td>
                        </tr>
                    })

                    }
                </tbody>
            </table>
        </div>
    )
}
