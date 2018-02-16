import axios from 'axios';

const initialState = {
<<<<<<< HEAD
    //deploy branch
    user: {}, currentMatch: {username: ""}, notifications: []
=======
    user: {id: 9, username: 'connerj70', name: {familyName: "Jensen", givenName: "Conner"}, city: 'los angeles', state: "UT", bio: 'the best bio ever', hobby: 'coding', nickname: 'convict', profile_pic: 'data:image/jpeg;base64,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'}, currentMatch: {username:""}, notifications: []
    // user: {}, currentMatch: {username: ""}, notifications: []
>>>>>>> master
};

const GET_USER_INFO = "GET_USER_INFO";
const GET_CURRENT_MATCH = "GET_CURRENT_MATCH";
const UPDATE_MATCH = "UPDATE_MATCH";
const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";
const DELETE_NOTIFICATION = "DELETE_NOTIFICATION";
const DELETE_MATCH = "DELETE_MATCH";

export function getUserInfo() {
    const userData = axios.get('/auth/me')
    .then( res => {
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getCurrentMatch(id, city) {
    const currentMatch = axios.get(`/api/match/${id}`).then(resp => {
        return resp.data[0];
    });

    return {
        type: GET_CURRENT_MATCH,
        payload: currentMatch
    };
}

export function deleteMatch(id) {
    let match = axios.delete('/api/match/' + id).then(resp => {
        console.log('RESPPPP',resp);
        return resp.data
    });
    return {
        type: DELETE_MATCH,
        payload: match
    };
}

export function getNotifications(id) {
    const notifications = axios.get(`/api/notifications/${id}`).then(resp => {
        return resp.data;
    });

    return {
        type: GET_NOTIFICATIONS,
        payload: notifications
    }
}

export function deleteNotification(id, userId) {
    console.log("USERID",userId);
    const notifications = axios.delete(`/api/notifications/${id}?userid=${userId}`).then(resp => {
        console.log("DELETE",resp);
        return resp.data;
    });

    return {
        type: DELETE_NOTIFICATION,
        payload: notifications
    };
}

export function updateMatchPending(id) {
    const match = axios.put(`/api/match${id}`).then(resp => {
        return resp.data;
    });

    return {
        type: UPDATE_MATCH,
        payload: match
    };
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload});

        case GET_CURRENT_MATCH + "_FULFILLED":
            return Object.assign({}, state, {currentMatch: action.payload});

        case GET_NOTIFICATIONS + "_FULFILLED":
            return Object.assign({}, state, {notifications: [...action.payload]});

        case DELETE_NOTIFICATION + "_FULFILLED":
            return Object.assign({}, state, {notifications: [...action.payload]});

        case DELETE_MATCH + "_FULFILLED": 
            return Object.assign({}, state, {currentMatch: {username: ''}});
        case UPDATE_MATCH + "_FULFILLED":
            return Object.assign({}, state, {currentMatch: action.payload});
        default:
            return state;
    }
}