import React, { useEffect, useState } from 'react';
import Search from '../Home/Search/Search';
import axios from 'axios';
import Item from '../../components/Item/Item';
// img
import Loading from "../../assets/images/Loading.svg"

export default function All() {

    const [value, setValue] = useState("");

    const [product, setProduct] = useState({
        isLoading: true,
        isError: false,
        datas: [],
    });
    const [selectVal, SetSelectVal] = useState("all");

    useEffect(() => {
        if (selectVal !== "all") {
            axios.get(`https://fakestoreapi.com/products/category/${selectVal}`)
                .then(function (response) {
                    setProduct({
                        isLoading: false,
                        isError: false,
                        datas: response.data,
                    })
                })
                .catch(function () {
                    setProduct({
                        isLoading: false,
                        isError: true,
                        datas: {},
                    })
                });
        } else {
            axios.get('https://fakestoreapi.com/products')
                .then(function (response) {
                    setProduct({
                        isLoading: false,
                        isError: false,
                        datas: response.data,
                    })
                })
                .catch(function () {
                    setProduct({
                        isLoading: false,
                        isError: true,
                        datas: {},
                    })
                })
        }

    }, [])

    const filteredProducts = product.datas.filter((product) => {
        return product.title.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <section className='all'>
            <Search setValue={setValue} />
            <div className="container">
                <ul className="product_wrapper">
                    {product.isLoading && <li className='product_loading'><img src={Loading} alt='Loading...' /></li>}
                    {product.isError && <li>Error...</li>}
                    {filteredProducts.length > 0 ?

                        filteredProducts.map(item => (
                            <Item key={item.id} item={item} />
                        ))

                        : <li style={{ display: product.isLoading || product.isError ? 'none' : 'initial' }} className='product_none_found'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMQbZ7d0oYxzcpValjHJ9gU1cNTyb8tfKz2ppI_YItA&s" alt="" />
                        </li>
                    }
                </ul>
            </div>
        </section>
    )
}
