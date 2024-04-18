import React, {useState} from 'react';
import Slider from "./Slider/Slider"
import Search from './Search/Search';
import Products from './Products/Products';

export default function Home() {
    const [value, setValue] = useState("");

    return (
        <>
            <Slider />
            <Search setValue={setValue} />
            <Products value={value} />
        </>
    )
}
