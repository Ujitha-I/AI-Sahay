from flask import Flask, request, jsonify
from flask_cors import CORS
from ai_model import get_response

app = Flask(__name__)
CORS(app)  # Allow frontend to talk to backend

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '').strip()
    if not user_message:
        return jsonify({"reply": "Please send a valid message."})
    
    reply = get_response(user_message)
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)

