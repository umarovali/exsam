import React, { useState } from 'react';
import Slider from "./Slider/Slider"
import Search from './Search/Search';
import Products from './Products/Products';
import Delivery from './Delivery/Delivery';
import Cutomer from './Customer/Cutomer';
import Subscribe from './Subscribe/Subscribe';

export default function Home() {
    const [value, setValue] = useState("");

    return (
        <>
            <Slider />
            <Search setValue={setValue} />
            <Products value={value} />
            <Delivery />
            <Cutomer />
            <Subscribe />
        </>
    )
}
