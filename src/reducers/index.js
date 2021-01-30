const initialState = {
    menu: [],
    loading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "MENU_LOADED":
            return {
                menu: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;