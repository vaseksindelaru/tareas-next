from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/postgres.py' )
def generate_random_number():
    random_number = random.randint(1,2)
    return jsonify({'random_number': random_number})

if __name__ == '__main__':
    app.run(debug=True, port=8080)