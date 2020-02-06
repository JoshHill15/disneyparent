import  { 
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_START,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_RETREIVAL_START,
    USER_RETREIVAL_SUCCESS,
    USER_RETREIVAL_FAILURE,
    USER_UPDATE_START,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILURE,
    MESSAGE_POST_START,
    MESSAGE_POST_SUCCESS,
    MESSAGE_POST_FAILURE,
    MESSAGE_EDIT_START,
    MESSAGE_EDIT_SUCCESS,
    MESSAGE_EDIT_FAILURE,
    MESSAGE_DELETE_START,
    MESSAGE_DELETE_SUCCESS,
    MESSAGE_DELETE_FAILURE,
    MESSAGE_RETREIVAL_START,
    MESSAGE_RETREIVAL_SUCCESS,
    MESSAGE_RETREIVAL_FAILURE,
    MESSAGE_BYID_START,
    MESSAGE_BYID_SUCCESS,
    MESSAGE_BYID_FAILURE,
    COMMENT_POST_START,
    COMMENT_POST_SUCCESS,
    COMMENT_POST_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    error: '',
    user: {
        username: '',
        password:'',
        name:'',
        email: '',
        role: '',
        phone: '',
        noOfChildren:'',
        location:''
    },
    posts: [
        {
            id: 0,
            title: 'No Posts',
            content: 'N/A',
            postedBy: 'N/A'
        }
    ],
    allPosts: [],
    commentPost: []
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
                isLoggedIn: true,
                username: action.payload
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false
            }
        case USER_REGISTER_START:
            return {
                ...state,
                isLoading: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true
            }
        case USER_REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false
            }
        case USER_RETREIVAL_START:
            return {
                ...state,
                isLoading: true,
            }
        case USER_RETREIVAL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: {
                    ...state.user,
                    username: action.payload.username,
                    password: action.payload.password,
                    name: action.payload.name,
                    email: action.payload.email,
                    role: action.payload.role,
                    phone: action.payload.phone,
                    noOfChildren: action.payload.noOfChildren,
                    location: action.payload.location
                },
                posts: action.payload.posts
            }
        case USER_RETREIVAL_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case USER_UPDATE_START:
            return {
                ...state,
                isLoading: true
            }
        case USER_UPDATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case USER_UPDATE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case MESSAGE_POST_START:
            return {
                ...state,
                isLoading: true
            }
        case MESSAGE_POST_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case MESSAGE_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case MESSAGE_EDIT_START:
            return {
                ...state,
                isLoading: true
            }
        case MESSAGE_EDIT_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case MESSAGE_EDIT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case MESSAGE_DELETE_START:
            return {
                ...state,
                isLoading: true
            }
        case MESSAGE_DELETE_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case MESSAGE_DELETE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case MESSAGE_RETREIVAL_START:
            return {
                ...state,
                isLoading: true
            }
        case MESSAGE_RETREIVAL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allPosts: action.payload
            }
        case MESSAGE_RETREIVAL_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case MESSAGE_BYID_START:
            return {
                ...state,
                isLoading: true
            }
        case MESSAGE_BYID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                commentPost: action.payload
            }
        case MESSAGE_BYID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state
    }
};