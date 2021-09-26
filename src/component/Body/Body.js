import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Profiles from '../Profiles/Profiles';
import './Body.css'


const Body = () => {
    const [profiles, setProfiles] = useState([]);
    const [cart, setCart] = useState([]);

    // Fetch data from fake data... 
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setProfiles(data))
    }, []);

    const handleAddToCart = (profile) => {
        const newCart = [...cart, profile];
        setCart(newCart);
    }

    return (
        <div className="body">
            <div className='product-container'>
                {
                    profiles.map(profile => <Profiles
                        key={profile.key}
                        profile={profile}
                        handleAddToCart={handleAddToCart}
                    >
                    </Profiles>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Body;