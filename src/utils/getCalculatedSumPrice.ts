import { IShoppingCartProduct } from './../models/IShoppingCartProduct';

export const getCalculatedSumPrice = (shoppingCartItems: IShoppingCartProduct[]): number => {
    let sum = 0;
    if (shoppingCartItems.length > 0) {
        shoppingCartItems.forEach(item => {
            sum += item.amount * +item.product.price;
        });
    }
    return sum;
};