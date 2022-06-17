'use strict';

module.exports = {
    fileSize: 1000000,
    mongodb: {
        url: 'mongodb://localhost/node-mongodb'
    },
    session: {
        name: '',
        keys: ['', '']
    },
    mail: {
      from: 'noreply@express.localhost',  
      settings: {  
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
              user: '',
              pass: ''
            }
      }      
    }
};