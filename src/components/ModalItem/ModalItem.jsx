import React from 'react';
// react icons
import { LuTrash2 } from "react-icons/lu";

export default function ModalItem({ e, removeBtn }) {
    return (
        <li className='modal_item'>
            <img className='item_img' src={e.image} alt={e.title} />
            <div className="modal_item_data">
                <span className='item_price'>${e.price}</span>
                <h3 className='item_title'>{e.title}</h3>
                <p className='item_suptitle'>{e.description}</p>
                <p className='item_quanity'>Quantity: 1</p>
                <button className='item_delete' onClick={() => removeBtn(e.id)}><LuTrash2 /></button>
            </div>
        </li>
    )
}
