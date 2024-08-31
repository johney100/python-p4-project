#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, request
from flask_restful import Resource
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Local imports
from config import db, api
# Add your model imports


# Views go here!

@app.route('/')
def index():
    return '<h1>TV Show App</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

