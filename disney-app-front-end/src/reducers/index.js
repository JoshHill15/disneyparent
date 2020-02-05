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
        username: '',
        password:'',
        name:'',
        email: '',
        role: '',
        phone: '',
        noOfChildren:'',
        location:'',
        
    },
    posts: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false
            }
        default: 
            return state
    }
};