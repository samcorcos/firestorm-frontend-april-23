import 'whatwg-fetch'

const Actions = {}

Actions.userNew = function userNew(user) {
  return dispatch => fetch('http://localhost:4000/api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }).then((res) => {
    /* Save token to localStorage */
    localStorage.web_token = res.data.data.web_token
    /* If successful, dispatch to reducer */
    dispatch({
      type: 'USER_NEW',
      payload: {
        user: res.data.data
      }
    })
  }).then((err) => {
    console.log(err)
  })
}

Actions.userLogin = function userLogin(user) {
  return dispatch => fetch('http://localhost:4000/auth/identity/callback', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }).then((res) => {
    /* If success, log the user in */
    console.log(res);
    localStorage.web_token = res.data.data.web_token
    /* Then send action to reducer */
    dispatch({
      type: 'USER_LOGIN',
      payload: {
        user: res.data.data
      }
    })
  }).catch((err) => {
    console.log(err)
  })
}

export default Actions
