import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth;'

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_REGISTER_START = 'USER_REGISTER_START';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';

export const MESSAGE_POST_START = 'MESSAGE_POST_START';
export const MESSAGE_POST_SUCCESS = 'MESSAGE_POST_SUCCESS';
export const MESSAGE_POST_FAILURE = 'MESSAGE_POST_FAILURE';

export const MESSAGE_RETREIVAL_START = 'MESSAGE_RETREIVAL_START';
export const MESSAGE_RETREIVAL_SUCCESS = 'MESSAGE_RETREIVAL_SUCCESS';
export const MESSAGE_RETREIVAL_FAILURE = 'MESSAGE_RETREIVAL_FAILURE';

export const MESSAGE_EDIT_START = 'MESSAGE_EDIT_START';
export const MESSAGE_EDIT_SUCCESS = 'MESSAGE_EDIT_SUCCESS';
export const MESSAGE_EDIT_FAILURE = 'MESSAGE_EDIT_FAILURE';

export const registerUser = userData => dispatch => {
    dispatch({type: USER_REGISTER_START})
    axios
        .get('https://backendci-disneyparents.herokuapp.com/api/auth/register', userData)
        .then(response => {
            dispatch({type: USER_REGISTER_SUCCESS});
            localStorage.setItem('token', response.data.payload);
        })
        .catch(error => {
            dispatch({type: USER_REGISTER_FAILURE, payload: error.data});
            console.log('Error', error);
        });
};

export const login = userData => dispatch => {
    dispatch({type: USER_LOGIN_START})
    axiosWithAuth()
        .get('/api/auth/login', userData)
        .then(response => {
            dispatch({type: USER_LOGIN_SUCCESS});
            localStorage.setItem('token', response.data.payload);
        })
        .catch(error => {
            dispatch({type: USER_LOGIN_FAILURE, payload: error.data});
            console.log('Error', error);
        });
};

export const getPosts = () => dispatch => {
    dispatch({type: MESSAGE_RETREIVAL_START});
    axiosWithAuth()
        .get('/api/user')
}