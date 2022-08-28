const products_reducer = (state, action) => {
    if (action.type === "GET_PRODUCTS_BEGIN") {
        return { ...state, products_loading: true }
    }
    if (action.type === "ALL_PRODUCTS") {
        return { ...state, products_loading: false, products: action.payload, }
    }
    if (action.type === "GET_PRODUCT_ERROR") {
        return { ...state, products_loading: false, products_error: true }
    }
    return state
}




export default products_reducer