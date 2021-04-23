import {post} from './FetchAPI/FetchAPI'

export const loginFetch = (email, password) => post('Auth/Login', {email, password}, {});

export const RegisterFetch = (request) => post('Auth/Register', request, {});