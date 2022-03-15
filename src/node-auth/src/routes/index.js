const { testRoute } = require('./testRoute');
const { signUpRoute } = require('./signUpRoute');
const { logInRoute } = require('./logInRoute');
const { updateUserInfoRoute } = require('./updateUserInfoRoute');

exports.routes = [
    testRoute,
    signUpRoute,
    logInRoute,
    updateUserInfoRoute,
];
