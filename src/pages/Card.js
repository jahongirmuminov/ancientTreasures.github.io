import React, { useContext } from 'react'
import ModalBodyList from '../components/ModalBodyList'
import { StateContext } from '../context/GlobalState'

const Card = () => {
    
    const {total, cartItems, totalItems, resetCart, checkOutCart} = useContext(StateContext)
    return (
        <div>
            {cartItems.map((item) => <ModalBodyList key={item.id} item={item}/>)}
        </div>
    )
}

export default Card
