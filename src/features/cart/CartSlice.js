import { createSlice } from "@reduxjs/toolkit";
import shopItems from "../../shopItems";

//買い物かごの初期化
const initialState = {
    shopItems: shopItems,
    amount: 4,
    total: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            return { ...state, shopItems: [], amount: 0, total: 0 };
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.shopItems = state.shopItems.filter((item) => item.id !== itemId); //選択した商品以外を残す。
        },
        increase: (state, action) => {
            const shopItem = state.shopItems.find(
                (item) => item.id === action.payload
            );
            shopItem.amount = shopItem.amount + 1;
        },
        decrease: (state, action) => {
            const shopItem = state.shopItems.find(
                (item) => item.id === action.payload
            );
            shopItem.amount = shopItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.shopItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
});

console.log(cartSlice);


export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
