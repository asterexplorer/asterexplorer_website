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

// Social Feed endpoint
app.get('/api/social/feed', (req, res) => {
    const feed = [
        {
            id: 1,
            platform: "X",
            user: "@AsterSystem",
            content: "Excited to announce our new partnership with NovaTech Solutions! 🚀 #DigitalTransformation #TechNews",
            timestamp: "2h ago",
            likes: 142
        },
        {
            id: 2,
            platform: "LinkedIn",
            user: "Aster Explorer",
            content: "We've just integrated full Stripe payment support into our client portals. Scaling made simple. 💳",
            timestamp: "5h ago",
            likes: 89
        },
        {
            id: 3,
            platform: "Instagram",
            user: "@aster_sys",
            content: "Behind the scenes: Finalizing the UI for Project Nebula. Stay tuned. 🎨 #DesignSystems #UI",
            timestamp: "1d ago",
            likes: 210
        }
    ];
    res.json(feed);
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

// Files explorer endpoint
app.get('/api/explorer/files', (req, res) => {
    const files = [
        { id: 1, name: "System_Config.sys", size: "1.2 MB", type: "System", date: "2024-01-24" },
        { id: 2, name: "Neural_Network_v4.py", size: "450 KB", type: "Code", date: "2024-01-23" },
        { id: 3, name: "Deep_Space_Scan.png", size: "15 MB", type: "Image", date: "2024-01-22" },
        { id: 4, name: "Encryption_Key.key", size: "2 KB", type: "Security", date: "2024-01-24" },
        { id: 5, name: "Project_Nexus.pdf", size: "3.8 MB", type: "Document", date: "2024-01-20" },
    ];
    res.json(files);
});

// Freelancers endpoint
app.get('/api/freelancers', (req, res) => {
    const freelancers = [
        {
            id: 1,
            name: "Alex Rivera",
            role: "Full-Stack Developer",
            skills: ["React", "Node.js", "AWS"],
            rate: "$85/hr",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
            category: "Development"
        },
        {
            id: 2,
            name: "Sarah Chen",
            role: "UI/UX Designer",
            skills: ["Figma", "Webflow", "Spline"],
            rate: "$95/hr",
            rating: 5.0,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
            category: "Design"
        },
        {
            id: 3,
            name: "Marcus Thorne",
            role: "AI/ML Engineer",
            skills: ["Python", "PyTorch", "OpenAI"],
            rate: "$120/hr",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
            category: "Artificial Intelligence"
        },
        {
            id: 4,
            name: "Elena Rodriguez",
            role: "Product Manager",
            skills: ["Agile", "Jira", "Strategy"],
            rate: "$75/hr",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
            category: "Management"
        },
        {
            id: 5,
            name: "Jordan Lee",
            role: "Mobile App Developer",
            skills: ["Swift", "Kotlin", "Flutter"],
            rate: "$90/hr",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop",
            category: "Development"
        },
        {
            id: 6,
            name: "Amara Okoro",
            role: "Motion Designer",
            skills: ["After Effects", "Cinema 4D"],
            rate: "$110/hr",
            rating: 5.0,
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&auto=format&fit=crop",
            category: "Design"
        }
    ];
    res.json(freelancers);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
