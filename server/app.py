#!/usr/bin/env python3

from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
from flask_migrate import Migrate


from models import db, Show, Actor, User, Review, shows_actors

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
migrate = Migrate(app, db)

db.init_app(app)

# Views go here!

@app.route('/shows', methods=["GET", "POST"])
def shows():
    if request.method == "GET":
        shows = [show.to_dict() for show in Show.query.all()]
        return  make_response(jsonify(shows),   200  )
    
    elif request.method == "POST":
        data = request.get_json()
        new_show = Show(
            name=data.get('name'),
            network=data.get('network')
        )

        db.session.add(new_show)
        db.session.commit()

        new_show_dict = new_show.to_dict()

        return  make_response(jsonify(new_show_dict), 201)
    
    
@app.route('/shows/<int:id>', methods = ["GET", "PUT", "DELETE"])
def shows_by_id(id):
    show = Show.query.filter_by(id=id).first()

    if request.method == 'GET':
        show_by_id = show.to_dict()
        return make_response ( jsonify(show_by_id), 200  )
    
    elif request.method == 'PUT':
        data = request.get_json()
        if data.get('name'):
            show.name = data.get('name')
            db.session.commit()
            show_dict = show.to_dict()
            return make_response(jsonify(show_dict), 200)
        
    elif request.method =="DELETE":
        db.session.delete(show)
        db.session.commit()

        response_body = {
            "delete_successful": True,
            "message": "Show deleted."
        }

        response = make_response(
            response_body,
            200
        )

        return response

@app.route('/reviews', methods=["GET", "POST"])
def reviews():
    if request.method == "GET":
        reviews = [review.to_dict() for review in Review.query.all()]
        return  make_response(jsonify(reviews),   200  )
    
    elif request.method == "POST":
        data = request.get_json()
        show_id = data.get('show_id')
        new_review = Review(
            score=data.get('score'),
            comment=data.get('comment'),
            show_id=show_id
        )

        db.session.add(new_review)
        db.session.commit()

        new_review_dict = new_review.to_dict()

        return  make_response(jsonify(new_review_dict), 201)

@app.route('/users', methods=["GET", "POST"])
def users():
    if request.method == "GET":
        users = [user.to_dict() for user in User.query.all()]
        return  make_response(jsonify(users),   200  )
    
    elif request.method == "POST":
        data = request.get_json()
        new_user = User(
            username=data.get('username'),
            location=data.get('location')
           
        )

        db.session.add(new_user)
        db.session.commit()

        new_user_dict = new_user.to_dict()

        return  make_response(jsonify(new_user_dict), 201)
    
    
@app.route('/actors', methods=["GET", "POST"])
def actors():
    if request.method == "GET":
        actors = [actor.to_dict() for actor in Actor.query.all()]
        return  make_response(jsonify(actors),   200  )
    
    elif request.method == "POST":
        data = request.get_json()
        show_id = data.get('show_id')
        
        new_actor = Actor(
            name=data.get('name'),
            age=data.get('age'),
            show_id=show_id
           
        )


        db.session.add(new_actor)
        db.session.commit()

       
        association = shows_actors.insert().values(show_id=show_id, actor_id=new_actor.id, role=data.get('role'))
        

        db.session.execute(association)
        db.session.commit()

        new_actor_dict = new_actor.to_dict()

        return  make_response(jsonify(new_actor_dict), 201)
    

    
@app.route('/shows_actors/<int:show_id>/<int:actor_id>', methods=['GET', 'POST'])
def update_show_actor_role(show_id, actor_id):
  if request.method == 'GET':
    show_actor = db.session.query(shows_actors).filter_by(show_id=show_id, actor_id=actor_id).first()
    if show_actor:
      return jsonify({'role': show_actor.role}), 200
    else:
      return jsonify({'message': 'Show-actor relationship not found'}), 404
  else:
    data = request.get_json()
    role = data.get('role')

    show_actor = db.session.query(shows_actors).filter_by(show_id=show_id, actor_id=actor_id).first()

    if show_actor:
      show_actor.role = role
      db.session.commit()
      return jsonify({'message': 'Role updated successfully'}), 200
    else:
      return jsonify({'message': 'Show-actor relationship not found'}), 404

