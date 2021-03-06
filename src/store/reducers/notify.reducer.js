import { actionTypes } from '../actions/notify.action'

const initialState = {
    open: false,
    horizontal: 'center',
    vertical: 'top',
    class: 'success',
    time: 2000,
    msg: '',

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.CHANGE:
        return { ...state, ...payload }

    default:
        return state
    }
}
