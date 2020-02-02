import  { 
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_START,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    MESSAGE_POST_START,
    MESSAGE_POST_SUCCESS,
    MESSAGE_POST_FAILURE,
    MESSAGE_RETREIVAL_START,
    MESSAGE_RETREIVAL_SUCCESS,
    MESSAGE_RETREIVAL_FAILURE,
    MESSAGE_EDIT_START,
    MESSAGE_EDIT_SUCCESS,
    MESSAGE_EDIT_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    user: {
        firstName:'',
        lastName:'',
        password:'',
        noOfChildren:'',
        location:'',
        role: ''
    },
    posts: {
        
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        default: 
            return state
    }
};