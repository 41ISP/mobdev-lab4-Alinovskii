import { Link } from "react-router-dom";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import QRCode from "../../components/QRCode";

interface IGeneratedQR {
    link: string
    timestamp?: number
}

interface IQRStore {
    history: IGeneratedQR[]
    appendHistory: (newQR: IGeneratedQR) => void;
}

export const useQRStore = create<IQRStore>()(
    persist(
      (set, get) => ({
        history: [],
        appendHistory: (QRCode) => set((state) => ({...state, history: [...state.history, QRCode]}))
      }),
      {
        name: 'food-storage',
        storage: createJSONStorage(() => sessionStorage), 
      },
    ),
  )

export default useQRStore;
