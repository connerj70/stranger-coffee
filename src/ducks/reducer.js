import axios from "axios";

const initialState = {
  //deploy branch
  user: {},
  currentMatch: { username: "" },
  notifications: []
};

const GET_USER_INFO = "GET_USER_INFO";
const GET_CURRENT_MATCH = "GET_CURRENT_MATCH";
const UPDATE_MATCH = "UPDATE_MATCH";
const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";
const DELETE_NOTIFICATION = "DELETE_NOTIFICATION";
const DELETE_MATCH = "DELETE_MATCH";

export function getUserInfo() {
  const userData = axios.get("/auth/me").then(res => {
    return res.data;
  });
  return {
    type: GET_USER_INFO,
    payload: userData
  };
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
  let match = axios.delete("/api/match/" + id).then(resp => {
    return resp.data;
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
  };
}

export function deleteNotification(id, userId) {
  const notifications = axios
    .delete(`/api/notifications/${id}?userid=${userId}`)
    .then(resp => {
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

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO + "_FULFILLED":
      return Object.assign({}, state, { user: action.payload });

    case GET_CURRENT_MATCH + "_FULFILLED":
      return Object.assign({}, state, { currentMatch: action.payload });

    case GET_NOTIFICATIONS + "_FULFILLED":
      return Object.assign({}, state, { notifications: [...action.payload] });

    case DELETE_NOTIFICATION + "_FULFILLED":
      return Object.assign({}, state, { notifications: [...action.payload] });

    case DELETE_MATCH + "_FULFILLED":
      return Object.assign({}, state, { currentMatch: { username: "" } });
    case UPDATE_MATCH + "_FULFILLED":
      return Object.assign({}, state, { currentMatch: action.payload });
    default:
      return state;
  }
}
