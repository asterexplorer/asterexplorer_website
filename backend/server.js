
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

let stripe;
try {
    if (process.env.STRIPE_SECRET_KEY) {
        stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    } else {
        console.warn('STRIPE_SECRET_KEY missing. Payment endpoints will be restricted.');
    }
} catch (e) {
    console.error('Stripe initialization failure:', e.message);
}

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(cors());
app.use(express.json());

// Status endpoint
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        message: 'Aster Technologies Backend is operational',
        timestamp: new Date().toISOString()
    });
});

// Stripe Payment creation
app.post('/api/payments/create-checkout-session', async (req, res) => {
    if (!stripe) {
        return res.status(503).json({ error: 'Payment service unavailable' });
    }

    try {
        const { service_name = 'Custom Project', amount = 50000 } = req.body;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: `Aster Technologies - ${service_name}`,
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${FRONTEND_URL}/cancel`,
        });

        res.json({ id: session.id, url: session.url });
    } catch (error) {
        console.error('Stripe Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
