const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'lastAction':
            return Object.assign({}, state, {
                action: action.type
            })
        case 'data':
            return Object.assign({}, state, {
                data: action.payload
            })
        default:
            return state;
    }
}
export default reducer;