const axios = require('axios');
const api_config = require('../config/index');

if (process.env.PRODUCTION) {
    var API_URL = api_config.production.API_URL;
}
else {
    var API_URL = api_config.development.API_URL;
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
            console.log(response);
            if (response['message']) {
                return reject(response['message']);
            }
            return resolve(response['success']);
        })
        .catch(err => {
            return reject(false);
        })
    })
}

module.exports = {
    signup
}