import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import UserRegisterController from './adapter/api/UserRegisterController';
import RegisterUser from './core/user/service/RegisterUser';
import UserPgRepository from './adapter/database/UserPgRepository';
import PasswordCripto from './adapter/auth/PasswordCripto';
import UserLogin from './core/user/service/UserLogin';
import UserLoginController from './adapter/api/UserLoginController';
import GetProductByIdController from './adapter/api/GetProductByIdController';
import GetProductById from './core/product/service/GetProductById';
import UserMiddleware from './adapter/api/UserMiodddleware';

const app = express();
const port = process.env.API_PORT ?? 4000;

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.listen(port, () => {
    console.log(`Server executing: port ${port}`)
});


const userRepository = new UserPgRepository();
const criptoProvider = new PasswordCripto();
const registerUser = new RegisterUser(userRepository, criptoProvider);

const userLogin = new UserLogin(
    userRepository,
    criptoProvider
);

// -------------------------------------------- open routes

new UserRegisterController(app, registerUser);
new UserLoginController(app, userLogin);


// -------------------------------------------- protected routes

const userMiddleware = UserMiddleware(userRepository);

const getProductById = new GetProductById()
new GetProductByIdController(app, getProductById, userMiddleware);