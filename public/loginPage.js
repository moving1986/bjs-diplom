'use strict';

const { response } = require("express");

const userForm  = new UserForm;

function loginFormAction(data) {
    
    ApiConnector.login(data, () => response);
}

userForm.loginFormCallback = data => loginFormAction(data);

userForm.registerFormCallback = data => ApiConnector.register(data, () => response);