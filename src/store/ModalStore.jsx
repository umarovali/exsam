import { create } from "zustand";

const useModal = create((set) => {
    return {
        modalBasket: false,
        setModalBasket: (newModlal) => set({ modalBasket: newModlal }),
        modalFavorite: false,
        setModalFavorite: (newModlal) => set({ modalFavorite: newModlal }, ),
    }
})

export default useModal;