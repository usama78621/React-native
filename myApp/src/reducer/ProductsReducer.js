export const addToCartProdcut = ({ restaurant, amount }, state) => {
    const updateItem = [...state.cart]
    const newItems = updateItem.findIndex((item) => item.id === restaurant.id
    );
    if (newItems < 0) {
        updateItem.push({
            ...restaurant, quantity: amount
        });

    } else {
        const updatedItem = {
            ...updateItem[newItems],
        };
        updatedItem.quantity = amount
        updateItem[newItems] = updatedItem;
    }
    return { ...state, cart: updateItem };

}
export const filter_reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        return addToCartProdcut(action.payload, state,)
    } if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload)
        }
    } if (action.type === "CART_CLEAR") {
        return { ...state, cart: [] }
    } if (action.type === "TOGGLE_CART_ITEM_AMOUNT") {
        const { id, value } = action.payload;
        let tempCart = state.cart.map((item) => {
            if (item.id === id) {
                if (value === "inc") {
                    let newAmount = item.quantity + 1
                    return { ...item, quantity: newAmount }
                }
                if (value === "dec") {
                    let newAmount = item.quantity - 1
                    if (newAmount < 1) {
                        newAmount = 1
                    }
                    return { ...item, quantity: newAmount }
                }
            }
            return item
        })
        return { ...state, cart: tempCart }
    } if (action.type === "COUNT_CART_TOTALS") {
        let { quantity, total } = state.cart.reduce((total, cartItem) => {
            const { quantity, price } = cartItem
            total.quantity += quantity
            total.total += price * quantity
            return total
        },
            { quantity: 0, total: 0 }
        )
        return { ...state, quantity, total }
    }
    return state;
}