import React from 'react';
import './Userbody.css';
import { useState, useEffect } from 'react';
import User from '../User/User';
import Cart from '../Cart/Cart';


const Userbody = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=15')
            .then(res => res.json())
            .then(data => setUser(data.results))
    }, [])
    const [cart, setCart] = useState([]);
    const cartHandler = (user) => {
        const newCart = [...cart, user]
        setCart(newCart)
    }
    return (
        <div className='row mt-5 user-body'>
            <div className="col-lg-8 col-md-12">
                {
                    user.map(el => <User cartHandler={cartHandler} user={el}></User>)
                }
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-12 fixed rounded p-5 mt-4 shadow">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Userbody;