import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct } from '../models/IProduct';
import { IShoppingCartProduct } from './../models/IShoppingCartProduct';

interface ShoppingCartState {
    shoppingCartItems: IShoppingCartProduct[]
}

const saveShoppingCartInSessionStorage = (state: IShoppingCartProduct[]): void => {
    sessionStorage.setItem('shopvibeShoppingCart', JSON.stringify(state));
};

const loadShoppingCartFromSessionStorage = (): IShoppingCartProduct[] => {
    return JSON.parse(sessionStorage.getItem('shopvibeShoppingCart') || '[]');
};

const initialState: ShoppingCartState = {
    shoppingCartItems: loadShoppingCartFromSessionStorage()
};

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: initialState,
    reducers: {
        addProductToShoppingCart: (state, action: PayloadAction<IProduct>) => {
            const productIndex = state.shoppingCartItems.map(item => item.product.id).indexOf(action.payload.id);
            if (productIndex > -1) {
                state.shoppingCartItems[productIndex].amount++;
                state.shoppingCartItems = [...state.shoppingCartItems];
            } else {
                state.shoppingCartItems = [...state.shoppingCartItems, { product: action.payload, amount: 1 }];
            }
            saveShoppingCartInSessionStorage(state.shoppingCartItems);
        },
        increaseProductAmountInShoppingCart(state, action: PayloadAction<IProduct>) {
            const productIndex = state.shoppingCartItems.map(item => item.product.id).indexOf(action.payload.id);
            state.shoppingCartItems[productIndex].amount++;
            state.shoppingCartItems = [...state.shoppingCartItems];
            saveShoppingCartInSessionStorage(state.shoppingCartItems);
        },
        decreaseProductAmountInShoppingCart(state, action: PayloadAction<IProduct>) {
            const productIndex = state.shoppingCartItems.map(item => item.product.id).indexOf(action.payload.id);
            state.shoppingCartItems[productIndex].amount--;
            if (state.shoppingCartItems[productIndex].amount === 0) {
                state.shoppingCartItems.splice(productIndex, 1);
            }
            state.shoppingCartItems = [...state.shoppingCartItems];
            saveShoppingCartInSessionStorage(state.shoppingCartItems);
        },
        deleteProductFromShoppingCart: (state, action: PayloadAction<IProduct>) => {
            const { id } = action.payload;
            const productIndex = state.shoppingCartItems.map(item => item.product.id).indexOf(id);
            state.shoppingCartItems.splice(productIndex, 1);
            state.shoppingCartItems = [...state.shoppingCartItems];
            saveShoppingCartInSessionStorage(state.shoppingCartItems);
        },
    }
});

export const { addProductToShoppingCart, increaseProductAmountInShoppingCart, decreaseProductAmountInShoppingCart, deleteProductFromShoppingCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;