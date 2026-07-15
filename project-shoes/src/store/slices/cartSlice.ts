import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ImageSourcePropType} from "react-native";

interface Shoe {
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

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addShoesToCart: (state, action: PayloadAction<Shoe>) => {
            (state.shoes = [...state.shoes, action.payload]);
            (state.totalAmount += action.payload.price);
        }
    }
})

export const { addShoesToCart } = cartSlice.actions;
export default cartSlice.reducer;