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
      if(response.status === 400){
        throw new Error('Что-то пошло не так! Попробуйте ещё раз.');
      }else{
        return response.json();
      }
    })
    .then((res) => {
      return res;
    })
    .catch(err => {
      return {error: err.message};
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
    if(response.status === 400 || response.status === 401){
      throw new Error('Что-то пошло не так! Попробуйте ещё раз.');
    }else{
      return response.json();
    }
  })
  .then((res) => {
    return res;
  })
  .catch(err => {
    console.log(err);
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
  .then(res => res.json())
  .then(data => data)
  .catch(err => {
    console.log(err);
  });
}
