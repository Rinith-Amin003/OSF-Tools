const initialState = {};

const appRepository = (state = initialState, action) => {
    switch (action.type) {
        case 'credentials':
            return Object.assign({}, state, {
                credentials: action.payload
            })
        case 'accessToken':
            return Object.assign({}, state, {
                credentials: {...state.credentials, accessToken: action.payload}
            })
        case 'data':
            return Object.assign({}, state, {
                data: action.payload
            })
        default:
            return state;
    }
}
export default appRepository;