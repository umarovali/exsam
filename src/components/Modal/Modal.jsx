import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// react icons
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Modal({ children, modal, setModal, name, ItemCount }) {

    return (
        <div className={`modal_bg ${!modal && "modal_close"}`}>
            <div className="header">
                <h1 className='header_title'>My {name},<span> {ItemCount} items</span></h1>
                <button onClick={() => setModal(false)} className='header_close'><AiOutlineCloseCircle /></button>
            </div>
            {children}
            <div className='footer'>
                <Link className="footer_title">Free Shipping on Orders over €49</Link>
                <button className='footer_delivery'>Explore More Treasures</button>
            </div>
        </div>
    )
}
