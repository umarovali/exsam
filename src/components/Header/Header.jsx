import React from 'react';
import { Link } from 'react-router-dom';
import useModal from '../../store/ModalStore';
import Modal from '../Modal/Modal';
import useBasketFavorite from '../../store/addStore';
// react icons
import { FiHome } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import ModalItem from '../ModalItem/ModalItem';

export default function Header() {
    const { modalBasket, setModalBasket, modalFavorite, setModalFavorite } = useModal();
    const { basket, setBasket, favorite, setFavorite } = useBasketFavorite();

    const removeFromBasket = (id) => {
        const updatedBasket = basket.filter(item => item.id !== id);
        setBasket(updatedBasket);
    };

    const removeFromFavorite = (id) => {
        const updatedFavorite = favorite.filter(item => item.id !== id);
        setFavorite(updatedFavorite);
    };

    const moveToCart = () => {
        const itemsToAddToCart = favorite.filter(favItem => !basket.some(basketItem => basketItem.id === favItem.id));
        const updatedBasket = [...basket, ...itemsToAddToCart];
        setBasket(updatedBasket);
    };

    const calculateTotalPrice = () => {
        let total = 0;
        basket.forEach(item => {
            total += item.price;
        });
        return total;
    };

    const basketItemCount = basket.length;
    const totalBasketPrice = calculateTotalPrice();
    const favoriteItemCount = favorite.length;

    return (
        <header className='header'>
            <div className="container">
                <div className="header_left_right">
                    <button className="header_logo"><FiHome className='header_logo_icon' /> Shop4Goodies</button>

                    <nav className='header_nav'>
                        <ul className='header_list'>
                            <li>
                                <Link className='header_text' to="/">Home</Link>
                            </li>
                            <li>
                                <Link className='header_text' to="/login">Admin</Link>
                            </li>
                        </ul>

                        <div className="header_buttons">
                            <div className="header_basket">
                                <button onClick={() => setModalBasket(true)} className='header_btn'><PiShoppingCartSimpleBold /> Your cart <span>({basketItemCount})</span></button>
                                <Modal ItemCount={basketItemCount} modal={modalBasket} setModal={setModalBasket} name="Cart">
                                    <ul className='modal_list'>
                                        {basket.map((e) => (
                                            <ModalItem key={e.id} e={e} removeBtn={removeFromBasket} />
                                        ))}
                                    </ul>
                                    <div className='modal_sub'>
                                        <h4 className="modal_sub_titile">Sub-total</h4>
                                        <span className='modal_sub_total'>${totalBasketPrice}</span>
                                    </div>
                                    <div className="modal_view_cart_checkout">
                                        <Link to="/cart"><button className='modal_view_cart'>View Cart</button></Link>
                                        <button className='modal_view_checkout'>Checkout</button>
                                    </div>
                                </Modal>
                            </div>
                            <div className='header_favorite'>
                                <button onClick={() => setModalFavorite(true)} className='header_btn'><MdFavoriteBorder /> Favorite <span>({favoriteItemCount})</span></button>
                                <Modal modal={modalFavorite} setModal={setModalFavorite} ItemCount={favoriteItemCount} name="Favorite">
                                    <ul className='modal_list'>
                                        {favorite.map((e) => (
                                            <ModalItem key={e.id} e={e} removeBtn={removeFromFavorite} />
                                        ))}
                                    </ul>
                                    <div className="modal_view_cart_checkout">
                                        <Link to={"/favorite"}><button className='modal_view_cart'>View Favorite</button></Link>
                                        <button className='modal_view_checkout' onClick={moveToCart}>Add Cart</button>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
