import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";

export default function CartFvoritItem({ e, remove  }) {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        if (quantity < 10) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        } else {
            remove(e.id);
        }
    };

    const itemTotal = e.price * quantity;


    return (
        <li className='cart_item'>
            <img className='item_img' src={e.image} alt={e.title} />

            <div className="item_right">
                <div className="item_data">
                    <span className='item_price'>${itemTotal.toFixed(2)}</span>
                    <h3 className='item_title'>{e.title}</h3>
                    <p className='item_suptitle'>{e.description}</p>
                </div>

                <div className="item_count_delete">
                    <div className="item_countries">
                        <button className='imte_plus' onClick={increaseQuantity}><FaPlus /></button>
                        <span>{quantity}</span>
                        <button className='imte_plus' onClick={decreaseQuantity}><FaMinus /></button>
                    </div>

                    <button onClick={() => remove(e.id)} className="item_delete"><LuTrash2 /></button>
                </div>
            </div>
        </li>
    )
}
