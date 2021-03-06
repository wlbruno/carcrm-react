import { Http } from '../../config/Http'
import { changeLoading } from './loading.action'
import { changeNotify } from './notify.action'

export const actionTyes = {
    CHANGE: 'REGISTER_CHANGE',
    ERROR: 'REGISTER_ERROR',
    SUCCESS: 'REGISTER_SUCCESS'
}

export const change = (payload) => ({
    type: actionTyes.CHANGE,
    payload
})

export const errors = (payload) => ({
    type: actionTyes.ERROR,
    payload
})

export const success = (payload) => ({
    type: actionTyes.SUCCESS,
    payload
})

export const setUserToken = token => dispatch => {
    localStorage.setItem('access_token', token);
    dispatch( change({
        name: '',
        email: '',
        password: ''
    }))

    dispatch(success(true))
}

export const register = data => dispatch => {
    dispatch(changeLoading({
        open: true,
        msg: 'Cadastrando Usuário...'
    }))

    return Http.post('/register', data)
    .then(res => {
        dispatch( changeLoading({open:false}))
        if(typeof res !== 'undefined'){
            if(res.data.access_token){
                dispatch(changeNotify({
                    open: true,
                    class: 'success',
                    msg: 'Usuário cadastrado com sucesso.'
                }))

                dispatch(setUserToken(res.data.access_token))

            }
        }
    })
    .catch(error => {
        dispatch( changeLoading({open:false}))

        if(error.response) {
            dispatch(errors(error.response.data.errors))
        }
    })
}
