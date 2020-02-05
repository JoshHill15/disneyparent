import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { push } from 'react-router-redux';

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_REGISTER_START = 'USER_REGISTER_START';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';

export const USER_RETREIVAL_START = 'USER_RETREIVAL_START';
export const USER_RETREIVAL_SUCCESS = 'USER_RETREIVAL_SUCCESS';
export const USER_RETREIVAL_FAILURE = 'USER_RETREIVAL_FAILURE';

export const USER_UPDATE_START = 'USER_UPDATE_START';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_START';
export const USER_UPDATE_FAILURE =  'USER_UPDATE_FAILURE';
    
export const MESSAGE_POST_START = 'MESSAGE_POST_START';
export const MESSAGE_POST_SUCCESS = 'MESSAGE_POST_SUCCESS';
export const MESSAGE_POST_FAILURE = 'MESSAGE_POST_FAILURE';

export const MESSAGE_RETREIVAL_START = 'MESSAGE_RETREIVAL_START';
export const MESSAGE_RETREIVAL_SUCCESS = 'MESSAGE_RETREIVAL_SUCCESS';
export const MESSAGE_RETREIVAL_FAILURE = 'MESSAGE_RETREIVAL_FAILURE';

export const MESSAGE_EDIT_START = 'MESSAGE_EDIT_START';
export const MESSAGE_EDIT_SUCCESS = 'MESSAGE_EDIT_SUCCESS';
export const MESSAGE_EDIT_FAILURE = 'MESSAGE_EDIT_FAILURE';

export const MESSAGE_DELETE_START = 'MESSAGE_DELETE_START';
export const MESSAGE_DELETE_SUCCESS = 'MESSAGE_DELETE_SUCCESS';
export const MESSAGE_DELETE_FAILURE = 'MESSAGE_DELETE_FAILURE';

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
        .post('/api/users/login', userData)
        .then(response => {
            dispatch({type: USER_LOGIN_SUCCESS, payload: userData.username});
            localStorage.setItem('token', response.data.token);
            dispatch(push('/profile'))
        })
        .catch(error => {
            dispatch({type: USER_LOGIN_FAILURE, payload: error.data});
            console.log('Error', error);
        });
};

export const getUserData = () => dispatch => {
    dispatch({type: USER_RETREIVAL_START});
    axiosWithAuth()
        .get('/api/users')
        .then(response => {
            console.log(response);
            dispatch({type: USER_RETREIVAL_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: USER_RETREIVAL_FAILURE, payload: error.data})
        })
};

export const updateUserData = userData => dispatch => {
    dispatch({type: USER_UPDATE_START})
    axiosWithAuth()
        .put('/api/users', userData)
        .then(response => {
            console.log(response)
            dispatch({type: USER_UPDATE_SUCCESS})
        })
        .catch (error => {
            dispatch({type: USER_UPDATE_FAILURE, payload: error.data})
        })
};

export const postMessage = message => dispatch => {
    dispatch({type: MESSAGE_POST_START})
    axiosWithAuth()
        .post('/api/posts', message)
        .then(response => {
            console.log(response.data)
            dispatch({type: MESSAGE_POST_SUCCESS})
        })
        .catch(error => {
            dispatch({type: MESSAGE_POST_FAILURE, payload: error.data})
        })
}

export const updateMessage = (messageID, newMessage) => dispatch => {
    dispatch({type: MESSAGE_EDIT_START})
    axiosWithAuth()
        .put(`/api/posts/${messageID}`, newMessage)
        .then(response => {
            response.log(response.data)
            dispatch({type: MESSAGE_EDIT_SUCCESS})
        })          
        .catch(error => {
            dispatch({type: MESSAGE_EDIT_FAILURE, payload: error})
        })
};

export const deleteMessage = messageID => dispatch => {
    dispatch({type: MESSAGE_DELETE_START})
    axiosWithAuth()
        .put(`/api/posts/${messageID}`)
        .then(response => {
            response.log(response.data)
            dispatch({type: MESSAGE_DELETE_SUCCESS})   
        })       
        .catch(error => {
            dispatch({type: MESSAGE_DELETE_FAILURE, payload: error})
        })    
};

export const retreiveMessages = () => dispatch => {
    dispatch({type: MESSAGE_RETREIVAL_START})
    axiosWithAuth()
        .get('/api/users')
        .then(response => {
            console.log(response)
            dispatch({type: MESSAGE_RETREIVAL_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: MESSAGE_RETREIVAL_FAILURE, payload: error.data})
        })
};