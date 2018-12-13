const axios = require('axios');

const api_config = require('config/index');

const API_URL = process.env.PROD
  ? api_config.production.API_URL
  : api_config.development.API_URL;

const job_instance = axios.create({
  baseURL: API_URL + '/works',
});

const users_instance = axios.create({
  baseURL: API_URL + '/users',
});

var signup = (username, password, email, name, role) => {
  return new Promise((resolve, reject) => {
    users_instance
      .post('/signup', {
        username: username,
        password: password,
        email: email,
        name: name,
        role: role,
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
        return resolve(response['data']['data']);
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

var getlistjob = () => {
  return new Promise((resolve, reject) => {
    let header = 'Bearer' + sessionStorage.getItem('jwt');
    job_instance.header['Authorizationn'] = header;
    job_instance
      .get('/')
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

var getWork = id => {
  return new Promise((resolve, reject) => {
    let header = 'Bearer' + sessionStorage.getItem('jwt');
    job_instance.header['Authorization'] = header;
    job_instance
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

var getuser = id => {
  return new Promise((resolve, reject) => {
    let header = 'Bearer' + sessionStorage.getItem('jwt');
    users_instance.header['Authorization'] = header;
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

var chooseWork = (userId, workId) => {
  return new Promise((resolve, reject) => {
    let header = 'Bearer' + sessionStorage.getItem('jwt');
    job_instance.header['Authorization'] = header;
    job_instance
      .put('/' + workId,{
        userId: userId,
        workId: workId,
      })
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

var createWork = (typeList, description, time, location, salary, userId) => {
  return new Promise((resolve, reject) => {
    let header = 'Bearer' + sessionStorage.getItem('jwt');
    job_instance.header['Authorization'] = header;
    job_instance
      .post('/', {
        typeList: typeList,
        description: description,
        time: time,
        location: location,
        salary: salary,
        userId: userId,
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
  getuser,
  changepassword,
  getWork,
  getlistjob,
  chooseWork,
  createWork,
};
