from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze_text():
    data = request.get_json()
    user_input = data.get("message", "")
    blob = TextBlob(user_input)
    sentiment = blob.sentiment.polarity

    if sentiment > 0.2:
        mood = "positive"
    elif sentiment < -0.2:
        mood = "negative"
    else:
        mood = "neutral"

    return jsonify({"sentiment": mood})

if __name__ == '__main__':
    app.run(debug=True)
