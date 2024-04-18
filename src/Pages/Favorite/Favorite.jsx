import React from 'react';
import useBasketFavorite from '../../store/addStore';
import CartFvoritItem from '../../components/CartFavoriteItem/CartFvoritItem';

export default function Favorite() {
  const { favorite, setFavorite } = useBasketFavorite();

  const removeFromBasket = (id) => {
    const updatedBasket = favorite.filter(item => item.id !== id);
    setFavorite(updatedBasket);
  };

  return (
    <section className='favorite'>
      <div className="container">
        <ul className="favorite_wrapper">
          {favorite.map((e) => (
            <CartFvoritItem key={e.id} e={e} remove={removeFromBasket} />
          ))}
        </ul>
      </div>
    </section>
  )
}
