import React from 'react'

function Order({ order }) {
    
    return (
        <div className='orders-container'>
            <div className='user-card'>
                <h2>{order.name} </h2>
                <h2>Pizza Size: {order.size}</h2>
                <h2>Pizza Toppings:
                    <span>{order.pepperoni ? 'Pepperoni' : ''}</span>
                    <span>{order.broccoli ? 'Broccoli' : ''}</span>
                    <span>{order.Sausage ? 'Sausage' : ''}</span>
                    <span>{order.mushroom ? 'Mushroom' : ''}</span>
                    <span>{order.pineapple ? 'Pineapple' : ''}</span>
                </h2>
                <p>{order.instruction}</p>
                

                
            </div>
        </div>
    )
}

export default Order