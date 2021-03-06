import { actionTyes } from '../actions/register.action'

const initialState = {
    user: {
        'name': '',
        'email': '',
        'password': ''
    },
    success: false,
    error: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTyes.CHANGE:
        return { ...state,
                 user: {
                    ...state.user,
                    ...payload
                }
            }

    case actionTyes.SUCCESS:
        return {
            ...state,
            success: payload
        }
    
    case actionTyes.ERROR:
        return {
            ...state,
            error: payload
        }

    default:
        return state
    }
}
