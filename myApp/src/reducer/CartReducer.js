
export const filter_reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        const { restaurantItem, amount } = action.payload
        const tempItem = state.cart.find((item) => item.id === restaurantItem.id);
        if (tempItem) {
            const tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === restaurantItem.id) {
                    let newAmount = cartItem.amount + amount
                    return { ...cartItem, amount: newAmount }
                } else {
                    return cartItem
                }
            })
            return { ...state, cart: tempCart }
        } else {
            const newItem = {
                id: restaurantItem.id,
                nameProduct: restaurantItem.nameProduct,
                amount: amount,
                images: restaurantItem.images,
                price: restaurantItem.price,
            }
            return { ...state, cart: [...state.cart, newItem] }
        }
    }

    if (action.type === "REMOVE_ITEM") {
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
                    let newAmount = item.amount + 1
                    return { ...item, amount: newAmount }
                }
                if (value === "dec") {
                    let newAmount = item.amount - 1
                    if (newAmount < 1) {
                        newAmount = 1
                    }
                    return { ...item, amount: newAmount }
                }
            }
            return item
        })

        return { ...state, cart: tempCart }
    }
    if (action.type === 'COUNT_CART_TOTALS') {
        const { total_items, total_amount } = state.cart.reduce(
            (total, cartItem) => {
                const { amount, price } = cartItem
                total.total_items += amount
                total.total_amount += price * amount
                return total
            },
            { total_items: 0, total_amount: 0 }
        )
        return { ...state, total_items, total_amount }
    }

    return state;
}