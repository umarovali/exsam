import React from 'react';
// react icons
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Select({ SetSelectVal }) {

    const handleSelect = function (event) {
        SetSelectVal(event.target.value)
    }

    return (
        <div className="select_wrapper">
            <div className="select_left">
                <h2 className='select_title'>New Arrivals</h2>
                <p className="select_suptitle">Check out the latest products</p>
            </div>

            <div className="select_right">
                <select onChange={handleSelect} className='select_category'>
                    <option value={"all"}>All</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="women's clothing">Women's clothing</option>
                </select>

                <Link to="/all">
                    <button className="select_btn_all">
                        View all
                        <FaArrowRightLong />
                    </button>
                </Link>
            </div>
        </div>
    )
}
