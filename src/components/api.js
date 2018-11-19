const axios = require('axios');
const api_config = require('../config/index');

var API_URL;
if (process.env.PRODUCTION) {
  API_URL = api_config.production.API_URL;
}
else {
  API_URL = api_config.development.API_URL;
}

var user_instance = axios.create({
  baseURL: API_URL + '/users'
});

var signup = (username, password, email, name) => {
  return new Promise((resolve, reject) => {
    user_instance.post(
      '/signup',
      {
        'username': username,
        'password': password,
        'email': email,
        'name': name
      })
      .then(response => {
        // console.log(response);
        if (response['message']) {
          return reject(response['message']);
        }
        return resolve(response['success']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

var signin = (username, password) => {
  return new Promise((resolve, reject) => {
    user_instance.post(
      '/signin',
      {
        'username': username,
        'password': password
      })
      .then(response => {
        // console.log(response);
        if (response['message']) {
          return reject(response['message']);
        }
        return resolve(response['success']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

module.exports = {
  signup,
  signin
};