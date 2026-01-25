from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime

app = Flask(__name__)
CORS(app)

@app.route('/api/status', methods=['GET'])
def get_status():
    return jsonify({
        "status": "online",
        "message": "Aster Systems Backend is operational",
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
    
    return jsonify({
        "success": True,
        "message": f"Transmission received, {name}. We will contact you soon."
    })

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
