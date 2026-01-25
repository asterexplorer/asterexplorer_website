import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Stripe Configuration
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(cors());
app.use(express.json());

// Status endpoint
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        message: 'Aster Explorer Backend is operational',
        timestamp: new Date().toISOString()
    });
});

// Stripe Payment creation
app.post('/api/payments/create-checkout-session', async (req, res) => {
    try {
        const { service_name = 'Custom Project', amount = 50000 } = req.body;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: `Aster Explorer - ${service_name}`,
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

// Weather endpoint
app.get('/api/weather', (req, res) => {
    const weather_data = {
        location: "Chennai, IN",
        temperature: 31,
        condition: "Humid",
        humidity: 78,
        wind_speed: "15 km/h",
        icon: "☀️",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    res.json(weather_data);
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log(`New message from ${name} (${email}): ${message}`);

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_SERVER || 'smtp.gmail.com',
            port: parseInt(process.env.MAIL_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.MAIL_DEFAULT_SENDER,
            to: process.env.RECEIVER_EMAIL || process.env.MAIL_USERNAME,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        res.json({
            success: true,
            message: `Transmission received, {name}. We will contact you soon.`
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: "Transmission failed. Subspace interference detected."
        });
    }
});

// Trending Skills/Topics endpoint
app.get('/api/trending', (req, res) => {
    const trends = [
        { id: 1, topic: "Agentic AI Workflows", growth: "+820%", category: "AI", status: "Explosive", image: "/assets/trends/ai_agents.png" },
        { id: 2, topic: "Spatial UI Systems", growth: "+310%", category: "Mixed Reality", status: "Rising", image: "/assets/trends/spatial_ui.png" },
        { id: 3, topic: "Post-Quantum Security", growth: "+440%", category: "Cybersecurity", status: "Critical", image: "/assets/trends/quantum_security.png" },
        { id: 4, topic: "Edge Intelligence", growth: "+210%", category: "Cloud", status: "Hot", image: "/assets/trends/edge_intel.png" },
        { id: 5, topic: "Carbon-Aware Cloud", growth: "+180%", category: "Sustainability", status: "Steady", image: "/assets/trends/carbon_cloud.png" },
        { id: 6, topic: "WebGPU Applications", growth: "+290%", category: "Graphics", status: "Rising", image: "/assets/trends/webgpu.png" },
        { id: 7, topic: "Decentralized Identity", growth: "+350%", category: "Blockchain", status: "Hot", image: "/assets/trends/decentralized_id.png" },
        { id: 8, topic: "Bio-Digital Interfaces", growth: "+120%", category: "HealthTech", status: "Emerging", image: "/assets/trends/bio_digital.png" },
        { id: 9, topic: "Low-Code DevOps", growth: "+240%", category: "Development", status: "Steady", image: "/assets/trends/lowcode_devops.png" },
        { id: 10, topic: "Autonomous Supply Networks", growth: "+410%", category: "Logistics", status: "Rising", image: "/assets/trends/supply_networks.png" }
    ];
    res.json(trends);
});

// Testimonials endpoint
app.get('/api/testimonials', (req, res) => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "CTO, CloudScale",
            content: "Aster Explorer transformed our development workflow. The talent they provide is truly top-tier.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&h=100&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "David Chen",
            role: "Founder, FintechGo",
            content: "The most secure and efficient way to scale our engineering team during high-growth phases.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Elena Rossi",
            role: "Design Lead, Bloom",
            content: "Innovative design systems and seamless execution. Highly recommended for complex UI projects.",
            rating: 4,
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&h=100&auto=format&fit=crop"
        }
    ];
    res.json(testimonials);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
