from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/ai', methods=['POST'])
def ai_response():
    data = request.json
    text = data['text']
    
    # Dummy AI logic
    return jsonify({"response": text[::-1]})

if __name__ == '__main__':
    app.run(debug=True)