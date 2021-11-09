import React, { useContext } from 'react'
import { context } from './Context/ContextProvider'
let arrProduct = [
    { id: 1, name: 'Logitech G903', price: 500 },
    { id: 2, name: 'Logitech G103', price: 200 },
    { id: 3, name: 'Logitech G603', price: 700 },
]


export default function DemoUserContext(props) {

    // let store = useContext(context)
    let { cartReducer } = useContext(context)
    // console.log(cartReducer);
    let [cart, dispatch] = cartReducer
    return (

        <div className="container">
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
                                    <button onClick={() => {
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
            <h3>Cart detail</h3>
            <table className="table">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>price</td>
                        <td>quantity</td>
                        <td>total</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price * item.quantity}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
