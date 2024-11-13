from logging import debug
import os
from fastapi import FastAPI
from pydantic import BaseModel
from flask import Flask, request, jsonify,send_from_directory
from flask_cors import CORS, cross_origin
# from dotenv import main
# from  import load_env
from dotenv import load_dotenv
import openai

app = Flask(__name__)
# app = FastAPI()
CORS(app)
load_dotenv()
openai.api_key = os.getenv("OPEN_AI_KEY")
# os.getenv("OPENAI_API_KEY")
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SERVER_NAME'] = 'localhost:5000'
# app.config['SERVER_NAME'] = '0.0.0.0:5000'
@app.route("/")
def index():
    # return "Hello World!"
     return send_from_directory('/build', 'index.html')

@app.route("/data")
def get_data():
    return {
        "Name":"test",
        "Age":"24"
    }
@app.route('/api/generate', methods=['GET','POST'])
@cross_origin()
def generate_text():
    data = request.get_json()
    prompt = data.get('prompt')

    completion = openai.chat.completions.create(
        # engine="text-davinci-003",
        # prompt=prompt,
        # max_tokens=150,
        # temperature=0.7,
        model="gpt-4-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant. Be extremely concise."},
            {"role": "user", "content": prompt},
        ],
    )
    response = completion.choices[0].message.content
    return jsonify({'data':response})
    # return jsonify({'text': response.choices[0].text.strip()})
@app.after_request
def add_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')

    return response

if __name__ == '__main__':
    # app.run(host='127.0.0.1', port=8080, debug=True)
    app.run(debug=True,host="localhost",port=5000)