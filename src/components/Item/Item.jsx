import React from 'react';
// react icons
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineFavorite } from "react-icons/md";
import useBasketFavorite from '../../store/addStore';

export default function Item({ item }) {

    const { basket, setBasket, favorite, setFavorite } = useBasketFavorite();
    const newBasket = basket.find(basketItem => basketItem.id === item.id);
    const isFavorite = favorite.find(favoriteItem => favoriteItem.id === item.id);  

    const handleBasketClick = () => {
        if (!newBasket) {
            const addBasket = [...basket, item];
           setBasket(addBasket);
            localStorage.setItem("basket", JSON.stringify(addBasket));
        } else {
            const updatedBasket = basket.filter(basketItem => basketItem.id !== item.id);
            setBasket(updatedBasket);
            localStorage.setItem("basket", JSON.stringify(updatedBasket));
        }
    };

    const handleFavoriteClick = () => {
        if (!isFavorite) {
            const newFavorite = [...favorite, item];
            setFavorite(newFavorite);
            localStorage.setItem("favorite", JSON.stringify(newFavorite));
        } else {
            const updatedFavorite = favorite.filter(favoriteItem => favoriteItem.id !== item.id);
            setFavorite(updatedFavorite);
            localStorage.setItem("favorite", JSON.stringify(updatedFavorite));
        }
    };

    return (
        <li className='product_item'>
            <div className='item_img'><img src={item.image} alt="" /></div>
            <div className="item_data">
                <h3 className='item_title'>{item.title}</h3>
                <p className='item_suptitle'>{item.description}</p>
                <span className='item_price'>${item.price}</span>

                <div className="item_basket_favorite">
                    <button onClick={handleBasketClick} className={(newBasket) ? "item_basket_btn_active" : "item_basket_btn"}><TiShoppingCart /></button>
                    <button onClick={handleFavoriteClick} className={(isFavorite) ? "item_favorite_btn_active" : "item_favorite_btn"}><MdOutlineFavorite /></button>
                </div>
            </div>
        </li>
    )
}
