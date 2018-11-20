import { LOGIN_USER, REGISTER_USER, GETBYID, USER_EDIT, LOGOUT } from './actionTypes';
import { LOGIN_URL, REGISTER_URL, GETBYID_URL, EDIT_USER_URL } from '../utils/constants';
import axios from 'axios'

export const login = ({email, password}) => ({
    type: LOGIN_USER,
    payload: new Promise(async (resolve, reject) => {
        try {
            const userdata = {
                email,
                password,
            };
            const response = await axios.post(
                LOGIN_URL,
                userdata,
            );
            const {
                user, message, success
            } = response.data;

            if (user && user.api_token) {
                await localStorage.setItem('user', JSON.stringify(user));

                return resolve({
                    data: response.data,
                });
            } else { 
                return reject({
                    data: message
                })
            }
        } catch (error) {
             return reject(error.response.data.message);
        }
    }),
});

export const register = (first_name, last_name, email, password, password_confirmation, address, city, image) => ({

    type: REGISTER_USER,
    payload: new Promise(async (resolve, reject) => {
        try {
            let formData = new FormData();
            formData.append('image', image);
            formData.append('first_name', first_name);
            last_name ? formData.append('last_name', last_name) : formData.append('last_name', '');
            formData.append('address', address);
            formData.append('city', city);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('password_confirmation', password_confirmation);
           
            const response = await axios.post(
                REGISTER_URL,
                formData,
            );
            const {
                user, message, success
            } = response.data;

            if (user && user.api_token) {
                await localStorage.setItem('user', JSON.stringify(user));

                return resolve({
                    data: response.data,
                });
            } else { 
                return reject({
                    data: message
                })
            }
        } catch (error) {
            return reject(error.response.data);
        }
    }),
});

export const getById = (id) => ({

    type: GETBYID,
    payload: new Promise(async (resolve, reject) => {
        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            const response = await axios.get(
                `${GETBYID_URL}${id}?api_token=${userData.api_token}`,
            );
            const {
                user, message, success
            } = response.data;

            if (user && user.api_token) {
                await localStorage.setItem('user', JSON.stringify(user));
                return resolve({
                    data: response.data,
                });
            } else { 
                return reject({
                    data: message
                })
            }
        } catch (error) {
            return reject(error.response.data.message);
        }
    }),
});

export const update = (id, first_name, last_name, email, password, password_confirmation, address, city, image) => ({

    type: USER_EDIT,
    payload: new Promise(async (resolve, reject) => {
        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            let formData = new FormData();
            formData.append('image', image);
            formData.append('first_name', first_name);
            formData.append('last_name', last_name);
            formData.append('address', address);
            formData.append('city', city);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('password_confirmation', password_confirmation);

            const response = await axios.post(
                 `${GETBYID_URL}${id}?api_token=${userData.api_token}`,
                 formData
            );
            const {
                user, message, success
            } = response.data;

            if (user && user.api_token) {
                await localStorage.setItem('user', JSON.stringify(user));
                return resolve({
                    data: response.data,
                });
            } else { 
                return reject({
                    data: message
                })
            }
        } catch (error) {
            return reject(error.response.data.message);
        }
    }),
});

export const logout = () => ({
    type: LOGOUT,
    payload: new Promise(async (resolve, reject) => {
        try {
            localStorage.removeItem('user');
            return resolve();
        } catch (error) {
            return reject(new Error({ error: error.message ? error.message : 'An error occured. Please try again.' }));
        }
    }),
});