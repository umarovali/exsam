import { create } from "zustand";

const useBasketFavorite = create((set) => {
    return {
        basket: JSON.parse(localStorage.getItem("basket")) || [],
        favorite: JSON.parse(localStorage.getItem("favorite")) || [],
        setBasket: (newBasket) => {
            localStorage.setItem("basket", JSON.stringify(newBasket));
            set({ basket: newBasket });
        },
        setFavorite: (newFavorite) => {
            localStorage.setItem("favorite", JSON.stringify(newFavorite));
            set({ favorite: newFavorite });
        },
    }
})


export default useBasketFavorite;
