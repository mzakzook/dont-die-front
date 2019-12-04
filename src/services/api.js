const API_ROOT = `http://localhost:3001/api/v1`;
const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
};

// const getPaintings = () => {
//   return fetch(`${API_ROOT}/paintings/`, { headers: headers }).then(res =>
//     res.json()
//   );
// };

const create = (fullname, username, password) => {
  return fetch(`${API_ROOT}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    },
    body: JSON.stringify({name: fullname, username: username, password: password })
  })
  .then(resp => resp.json())
  .then(json => console.log(json))
}

const login = (username, password) => {
  return fetch(`${API_ROOT}/auth/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({user:{ username, password }})
  }).then(res => res.json())
    
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers
  }).then(res => res.json());
};

export default {
  auth: {
    create,
    login,
    getCurrentUser
  }
};
