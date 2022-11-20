/* eslint-disable linebreak-style */
import { Router } from 'express';

import { createCategories } from './app/useCases/categories/createCategories';
import { listCategories } from './app/useCases/categories/listCategories';
import { listProducts } from './app/useCases/products/listProducts';

export const router = Router();

router.get('/categories', listCategories);

router.post('/categories', createCategories);

router.get('/products', (req,res) => {
    res.send('OK');
});

router.post('/products', listProducts);

router.get('/categories/:categoryId/products', (req,res) => {
    res.send('OK');
});

router.get('/orders', (req,res) => {
    res.send('OK');
});

router.post('/orders', (req,res) => {
    res.send('OK');
});

router.patch('/orders/:orderId', (req,res) => {
    res.send('OK');
});

router.delete('/orders/:orderId', (req,res) => {
    res.send('OK');
});
