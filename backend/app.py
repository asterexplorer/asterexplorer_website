from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import datetime
import stripe
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Stripe Configuration
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')
FRONTEND_URL = os.getenv('FRONTEND_URL', 'http://localhost:5173')

@app.route('/api/payments/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        data = request.json
        service_name = data.get('service_name', 'Custom Project')
        amount = data.get('amount', 50000) # Amount in cents

        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[
                {
                    'price_data': {
                        'currency': 'usd',
                        'product_data': {
                            'name': f"Aster Explorer - {service_name}",
                        },
                        'unit_amount': amount,
                    },
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=FRONTEND_URL + '/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url=FRONTEND_URL + '/cancel',
        )
        return jsonify({'id': checkout_session.id, 'url': checkout_session.url})
    except Exception as e:
        print(f"Stripe Error: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/weather', methods=['GET'])
def get_weather():
    # Simulation of a weather provider response
    weather_data = {
        "location": "Chennai, IN",
        "temperature": 31,
        "condition": "Humid",
        "humidity": 78,
        "wind_speed": "15 km/h",
        "icon": "☀️",
        "timestamp": datetime.datetime.now().strftime("%H:%M %p")
    }
    return jsonify(weather_data)

@app.route('/api/social/feed', methods=['GET'])
def get_social_feed():
    feed = [
        {
            "id": 1,
            "platform": "X",
            "user": "@AsterSystem",
            "content": "Excited to announce our new partnership with NovaTech Solutions! 🚀 #DigitalTransformation #TechNews",
            "timestamp": "2h ago",
            "likes": 142
        },
        {
            "id": 2,
            "platform": "LinkedIn",
            "user": "Aster Explorer",
            "content": "We've just integrated full Stripe payment support into our client portals. Scaling made simple. 💳",
            "timestamp": "5h ago",
            "likes": 89
        },
        {
            "id": 3,
            "platform": "Instagram",
            "user": "@aster_sys",
            "content": "Behind the scenes: Finalizing the UI for Project Nebula. Stay tuned. 🎨 #DesignSystems #UI",
            "timestamp": "1d ago",
            "likes": 210
        }
    ]
    return jsonify(feed)

# Email Configuration
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'True').lower() == 'true'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER')

mail = Mail(app)

@app.route('/api/status', methods=['GET'])
def get_status():
    return jsonify({
        "status": "online",
        "message": "Aster Explorer Backend is operational",
        "timestamp": datetime.datetime.now().isoformat()
    })

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    # In a real app, you'd save this to a database or send an email
    print(f"New message from {name} ({email}): {message}")

    try:
        msg = Message(
            subject=f"New Contact Form Submission from {name}",
            recipients=[os.getenv('RECEIVER_EMAIL', os.getenv('MAIL_USERNAME'))],
            body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        )
        mail.send(msg)
        return jsonify({
            "success": True,
            "message": f"Transmission received, {name}. We will contact you soon."
        })
    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({
            "success": False,
            "message": "Transmission failed. Subspace interference detected."
        }), 500

@app.route('/api/explorer/files', methods=['GET'])
def get_files():
    # Mock file data for "Aster Explorer"
    files = [
        {"id": 1, "name": "System_Config.sys", "size": "1.2 MB", "type": "System", "date": "2024-01-24"},
        {"id": 2, "name": "Neural_Network_v4.py", "size": "450 KB", "type": "Code", "date": "2024-01-23"},
        {"id": 3, "name": "Deep_Space_Scan.png", "size": "15 MB", "type": "Image", "date": "2024-01-22"},
        {"id": 4, "name": "Encryption_Key.key", "size": "2 KB", "type": "Security", "date": "2024-01-24"},
        {"id": 5, "name": "Project_Nexus.pdf", "size": "3.8 MB", "type": "Document", "date": "2024-01-20"},
    ]
    return jsonify(files)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
