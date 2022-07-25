export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
    .then((response) => {
      if(response.status === 400 || !response.ok){
        return Promise.reject(`Что-то пошло не так!`);
      }else{
        return response.json();
      }
    })
    .then((res) => {
      return res;
    });
}

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
  .then((response) => {
    if(response.status === 400 || response.status === 401 || !response.ok){
      return Promise.reject(`Что-то пошло не так! Попробуйте ещё раз.: ${response.status} ${response.statusText}`);
    }else{
      return response.json();
    }
  })
  .then((res) => {
    return res;
  });
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так! Попробуйте ещё раз.: ${res.status} ${res.statusText}`);
  })
  .then(data => data);
}
