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
    let price = [2332, 3183, 9392, 7387, 91822, 82823, 8281, 1123, 9283, 1098, 4323, 8764, 87387, 5746, 8492]
    // let newPrice = Object.assign(price)
    // let newObj = {
    //     ...user,
    //     ...newPrice
    // }
    let arrayShuffle = function (arr) {
        let newPos,
        temp;

        for (let i = arr.length - 1; i > 0; i--) {
            newPos = Math.floor(Math.random() * (i + 1));
            temp = arr[i]
            arr[i] = arr[newPos]
            arr[newPos] = temp
        }
        return arr
    }
    let newArr = arrayShuffle(price)
    const newPrice = {
        ...user,
        ...newArr
    }
    return (
        <div className='row mt-5'>
            <div className="col-lg-8 col-md-12">
                {
                    user.map(el => <User price={newArr} cartHandler={cartHandler} user={el}></User>)
                }
            </div>
            <div className="col-lg-4 col-md-12">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Userbody;