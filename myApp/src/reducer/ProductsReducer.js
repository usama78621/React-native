
export const addToCartProdcut = (restaurant, state) => {
    const updateItem = [...state.cart]
    const newItems = updateItem.findIndex((item) => item.id === restaurant.id
    );
    console.log(restaurant);
    if (newItems < 0) {
        updateItem.push({
            ...restaurant, quantity: 1
        });

    } else {
        const updatedItem = {
            ...updateItem[newItems],
        };
        updatedItem.quantity++;
        updateItem[newItems] = updatedItem;
    }
    return { ...state, cart: updateItem };

}

export const filter_reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        return addToCartProdcut(action.payload, state)
    } if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload)
        }
    } if (action.type === "CART_CLEAR") {
        return { ...state, cart: [] }
    } if (action.type === "INCREASE") {
        const tempcart = state.cart.map((item) => {
            if (item.id === action.payload) {
                return { ...item, quantity: cart.quantity + 1 }
            }
            return { ...item }
        })
        return { ...state, cart: tempcart }
    }
    if (action.type === "DESCEASE") {
        const tempcart = state.cart.map((item) => {
            if (item.id === action.payload) {
                return { ...item, quantity: cart.quantity - 1 }
            }
            return { ...item }
        }).filter((item) => item.quantity !== 0);
        return { ...state, cart: tempcart }
    }

}