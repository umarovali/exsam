import React, { useState } from 'react';
import useBasketFavorite from '../../store/addStore';
import CartItem from '../../components/CartFavoriteItem/CartFvoritItem';
import CartFvoritItem from '../../components/CartFavoriteItem/CartFvoritItem';

export default function Cart() {
    const { basket, setBasket } = useBasketFavorite();

    const removeFromBasket = (id) => {
        const updatedBasket = basket.filter(item => item.id !== id);
        setBasket(updatedBasket);
    };

    const subBasket = basket.reduce((total, item) => total + item.price, 0);
    const shipping = 3.98;
    const tax = 4.66;

    const total = subBasket + shipping + tax;

    const clearBasket = () => {
        setBasket([]); 
    };
    return (
        <section className='cart'>
            <div className="container">
                <div className="cart_left_right">
                    <div className="cart_left_list">
                        <ul className="cart_left">
                            <li>
                                <h3 className='cart_title'>Shopping cart</h3>
                            </li>
                            {basket.map((e) => (
                                <CartFvoritItem key={e.id} e={e} remove={removeFromBasket} />
                            ))}
                        </ul>
                        <div className="cart_chekout_clear">
                            <button className='cart_checkout'>Checkout</button>
                            <button className='cart_clear' onClick={clearBasket}>Cancel all</button>
                        </div>
                    </div>
                    <div className="cart_right">
                        <h3 className='cart_title'>Summary</h3>
                        <button className='cart_btn'>Enter Discount Coupon Here</button>
                        <div className='cart_hr'></div>
                        <div className="cart_data_wrapper">
                            <div className='cart_data_left_right'>
                                <p className="cart_data_left">Sub-total</p>
                                <span className='cart_data_sub'>${subBasket.toFixed(2)}</span>
                            </div>
                            <div className='cart_data_left_right'>
                                <p className="cart_data_left">Shipping</p>
                                <span className='cart_data_sub'>${shipping.toFixed(2)}</span>
                            </div>
                            <div className='cart_data_left_right'>
                                <p className="cart_data_left">TAX</p>
                                <span className='cart_data_sub'>${tax.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className='cart_hr'></div>
                        <div className="crt_sub_totla">
                            <h5 className='cart_totla_title'>TOTAL</h5>
                            <span className='cart_totla_num'>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
