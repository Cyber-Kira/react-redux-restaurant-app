const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "MENU_LOADED":
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case "MENU_REQUESTED":
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        case "MENU_ERROR":
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: true
            };
        case "ITEM_ADD_TO_CART":
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            if (state.items.find(munuItem => id === munuItem.id)) {
                const itemIndex = state.items.findIndex(item => item.id === id);
                const newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    qtty: state.items[itemIndex].qtty + 1
                }
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIndex),
                        newItem,
                        ...state.items.slice(itemIndex + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }
            }

            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qtty: 1
            }
            return {
                ...state,
                items: [
                    ...state.items
                    ,newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            };
        case "ITEM_REMOVE_FROM_CART":
            const index = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === index);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                totalPrice: +state.totalPrice - +(state.items[itemIndex].price * state.items[itemIndex].qtty)
            };
        default:
            return state;
    }
};

export default reducer;