import React from 'react';
import './Cart.css'

// Set Cart activity dynamically 
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let name = [];
    for (const profile of cart) {
        total = total + profile.salary;
        name = name + profile.name;
    }
    return (
        <div className='cart'>
            <h2>Our Team</h2>
            <h4>Developer Added: {props.cart.length}</h4>
            <h5>Total Salary: {total}</h5>
            <h5>{name}</h5>
            <button>Buy Now</button>
        </div>
    );
};

export default Cart;