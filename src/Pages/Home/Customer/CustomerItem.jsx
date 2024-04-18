import React from 'react';
// react icons
import { FaStar } from "react-icons/fa";

export default function CustomerItem({ name, suptitle }) {
    return (
        <li className='customer_item'>
            <div className="item_left">
                <div className="item_avatar_name">
                    <img className='avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9QWp-qNkrYtNAE_qPnCOOeGm5BIrc3_5OKfdmV0jjAQ&s" alt="" />
                    <h4 className='item_name'>{name}</h4>
                </div>

                <div className="item_suptitle">{suptitle}</div>
            </div>

            <div className="item_stars">
                <FaStar className='item_star' />
                <FaStar className='item_star' />
                <FaStar className='item_star' />
                <FaStar className='item_star' />
                <FaStar className='item_star' />
            </div>
        </li>
    )
}
