import React from 'react';
import { FiSearch } from "react-icons/fi";

export default function Search({ setValue }) {
    return (
        <section className='search'>
            <div className='search_input_btn'>
                <input className='search_input' onChange={(evt) => setValue(evt.target.value)} type="text" placeholder='Search for products' />
                <button className='seacrh_btn'><FiSearch className='search_icon' /></button>
            </div>
        </section>
    )
}
