from flask_sqlalchemy import SQLAlchemy
from QuizApp import app

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(30), nullable=False)
    secondname = db.Column(db.String(30), nullable=False)
    adm = db.Column(db.Integer, nullable=False, unique=True)
    upi = db.Column(db.String(10), nullable=False, unique=True)

    def __repr__(self):
        return f'First tName: {self.firstname} Second Name: {self.secondname}: Adm: {self.adm}'


