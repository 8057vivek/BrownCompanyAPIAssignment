import { products } from '../models/product.js';

export function getProducts(req, res) {
    res.json(products);
}

export function calculateCart(req, res) {
    const { productId, quantity } = req.body;
    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    if (!quantity || quantity < 1) {
        return res.status(400).json({ error: 'Invalid quantity' });
    }
    const totalPrice = product.price * quantity;
    res.json({ product: product.name, quantity, totalPrice });
}