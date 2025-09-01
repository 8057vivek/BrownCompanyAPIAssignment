import { Router } from 'express';
import { getProducts, calculateCart } from '../controllers/productsController.js';

const router = Router();

router.get('/products', getProducts);
router.post('/cart', calculateCart);

export default router;