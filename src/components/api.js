const axios = require('axios');

const api_config = require('config/index');

const API_URL = process.env.PROD
  ? api_config.production.API_URL
  : api_config.development.API_URL;

const helper_instance = axios.create({
  baseURL: API_URL + '/helpers',
});

var signup = (username, password, email, name) => {
  return new Promise((resolve, reject) => {
    helper_instance
      .post('/signup', {
        username: username,
        password: password,
        email: email,
        name: name,
      })
      .then(response => {
        if (response['data']['success'] != true) {
          return reject(response['data']['message']);
        }
        return resolve(response['data']['success']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

var signin = (username, password) => {
  return new Promise((resolve, reject) => {
    helper_instance
      .post('/signin', {
        username: username,
        password: password,
      })
      .then(response => {
        if (response['data']['success'] != true) {
          return reject(response['data']['message']);
        }
        return resolve(response['data']['success']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

var changepassword = (username, password, new_password) => {
  return new Promise((resolve, reject) => {
    helper_instance
      .post('/reset_password', {
        username: username,
        password: password,
        new_password: new_password,
      })
      .then(response => {
        if (response['data']['success'] != true) {
          return reject(response['data']['message']);
        }
        return resolve(response['data']['success']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

var getjob = id => {
  return new Promise((resolve, reject) => {
    helper_instance
      .get('/jobs/' + id)
      .then(response => {
        if (response['data']['success'] != true) {
          return reject(response['data']['message']);
        }
        return resolve(response['data']['data']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

var gethelper = id => {
  return new Promise((resolve, reject) => {
    helper_instance
      .get('/' + id)
      .then(response => {
        if (response['data']['success'] != true) {
          return reject(response['data']['message']);
        }
        return resolve(response['data']['data']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

module.exports = {
  signup,
  signin,
  changepassword,
  getjob,
  gethelper,
};
