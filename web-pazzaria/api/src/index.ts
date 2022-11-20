/* eslint-disable linebreak-style */
import express from 'express';
import mongoose from 'mongoose';

import {router} from './routes';


mongoose.connect('mongodb://localhost:27017')
    .then(() => {

        const app = express();

        app.use(express.json());
        app.use(router);

        app.listen(3001, () => {

            console.log('http://localhost:3001');

        });

    })
    .catch(() => console.log('Erro ao conectar ao mongodb! '));

