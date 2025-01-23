import { create } from "zustand";

interface IGeneratedQR {
    link: string
    timestamp?: Date
}

interface IQRStore {
    history: IGeneratedQR[]
    appendHistory: (newQR: IGeneratedQR) => void;
}

const useQRStore = create<IQRStore>((set) => ({
    history: [],
    appendHistory: (newQR) => set((state) => ({history: [...state.history, newQR] })),
}))

export default useQRStore;
