import { create } from "zustand";

const useAuth = create((set) => {
    const localData = JSON.parse(localStorage.getItem("token"))

    return {
        token: localData,
        setToken: (newToken) => set({ token: newToken }),
    };

})

export default useAuth;