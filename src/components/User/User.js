import React from 'react';
import './User.css'
import { useState } from 'react';


const User = (props) => {
    const { name, gender, location, email, phone, picture } = props.user
    const { title, first, last } = name
    const { city, state, country } = location
    const { large } = picture
    // const [newPrice, setNewPrice] = useState([]);
    // const singlePrice = props.price.map(p => setNewPrice(p))

    return (
        <div className="row shadow my-4 rounded py-4">
            <div className="col-md-3 my-3 text-center text-md-right">
                <img className="round" src={large} />
            </div>
            <div className="col-md-9 text-left">
                <div className="row">
                    <div className="col-md-7 col-12 text-center text-md-left">
                        <h5> {`${title} ${first} ${last}`} </h5>
                        <h6> {email} </h6>
                        <p className='badge bg-danger text-white'> {gender.toUpperCase()} </p>
                        <br />
                        <p className='badge'>Phone: {phone} </p>
                        <p> {`${city}, ${state}, ${country}`} </p>
                    </div>
                    <div className="col-md-5 col-12 border-left pt-5 pr-4 text-center text-md-right">
                        <h5>$ {} </h5>
                        <button onClick={() => props.cartHandler(props.user)} className="btn btn-info">Add member</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;