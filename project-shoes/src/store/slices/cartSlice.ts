import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ImageSourcePropType} from "react-native";

export interface Shoe {
    id: string;
    name: string;
    image: ImageSourcePropType;
    size: number;
    price: number;
    quantity: number;
}

interface CartState {
    shoes: Shoe[];
    totalAmount: number;
}


const initialState: CartState = {
    shoes: [],
    totalAmount: 0
}

const isSameLine = (a: Shoe, b: Shoe) => a.id === b.id && a.size === b.size;

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addShoesToCart: (state, action: PayloadAction<Shoe>) => {
            (state.shoes = [...state.shoes, action.payload]);
            (state.totalAmount += action.payload.price);
        },
        removeShoesFromCart: (state, action: PayloadAction<Shoe>) => {
            const shoesToRemove = state.shoes.find(
                (shoes) => isSameLine(shoes, action.payload)
            );
            if (!shoesToRemove) return;
            state.totalAmount -= shoesToRemove.price * shoesToRemove.quantity;
            state.shoes = state.shoes.filter((item) => !isSameLine(item, action.payload));
        },
        increaseQuantity: (state, action: PayloadAction<Shoe>) => {
            const shoe = state.shoes.find((s) => isSameLine(s, action.payload));
            if (!shoe) return;
            shoe.quantity += 1;
            state.totalAmount += shoe.price;
        },
        decreaseQuantity: (state, action: PayloadAction<Shoe>) => {
            const shoe = state.shoes.find((s) => isSameLine(s, action.payload));
            if (!shoe) return;
            if (shoe.quantity > 1) {
                shoe.quantity -= 1;
                state.totalAmount -= shoe.price;
            }
        },
    }
})

export const { addShoesToCart, removeShoesFromCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;