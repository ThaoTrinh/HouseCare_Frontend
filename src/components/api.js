const axios = require('axios');

const api_config = require('config/index');

const API_URL = process.env.PROD
  ? api_config.production.API_URL
  : api_config.development.API_URL;

const helper_instance = axios.create({
  baseURL: API_URL + '/helpers',
});

const owner_instance = axios.create({
  baseURL: API_URL + '/owners',
});

const users_instance = axios.create({
  baseURL: API_URL + '/users',
});

var signup = (username, password, email, name, type) => {
  return new Promise((resolve, reject) => {
    users_instance
      .post('/signup', {
        username: username,
        password: password,
        email: email,
        name: name,
        type: type,
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
    users_instance
      .post('/signin', {
        username: username,
        password: password,
      })
      .then(response => {
        if (response['data']['success'] != true) {
          return reject(response['data']['message']);
        }
        const jwt = response['data']['data']['jwt'];
        sessionStorage.setItem('jwt', jwt);
        return resolve(response['data']['success']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

var changepassword = (username, password, new_password) => {
  return new Promise((resolve, reject) => {
    users_instance
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
    let header = 'Bearer' + sessionStorage.getItem('jwt');
    users_instance.header = header;
    users_instance
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

var getuser = id => {
  return new Promise((resolve, reject) => {
    users_instance
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

var acceptjob = id => {
  return new Promise((resolve, reject) => {
    helper_instance
      .put('/jobs/' + id)
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

var createjob = (time, place, duration, type) => {
  return new Promise((resolve, reject) => {
    owner_instance
      .post('/jobs', {
        time: time,
        place: place,
        duration: duration,
        type: type,
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

module.exports = {
  signup,
  signin,
  changepassword,
  getjob,
  getuser,
  acceptjob,
  createjob,
};
