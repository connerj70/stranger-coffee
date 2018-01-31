import axios from 'axios';

const initialState = {
    user: {id: 1, username: 'connerj70', name: 'Conner Jensen', city: 'Bountiful', state: "UT", bio: 'the best bio ever', hobby: 'coding', nickname: 'convict'}
}

const GET_USER_INFO = "GET_USER_INFO";

export function getUserInfo() {
    const userData = axios.get('/auth/me')
    .then( res => {
        console.log(res);
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }
}