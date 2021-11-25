import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Profiles.css'

// Make Developers Profile Card Dynamicall
const Profiles = (props) => {
    const { name, country, occupation, experience, salary, img } = props.profile;
    const iconCart = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='profiles'>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Country: {country}</p>
            <p>Occupation: {occupation}</p>
            <p>Experience: {experience}</p>
            <p>Salary: {salary}</p>
            <button
                onClick={() => props.handleAddToCart(props.profile)} className='regular-button'>{iconCart} Add to cart</button>
        </div>
    );
};

export default Profiles;