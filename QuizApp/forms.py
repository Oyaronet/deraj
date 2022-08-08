from ast import Str
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, SearchField
from wtforms.validators import DataRequired, Length

# Login in form
class LoginForm(FlaskForm):
    username = StringField(label="Username:", 
                validators=[DataRequired(), Length(max=8, min=4)])
    password = PasswordField(label="Password:", 
                validators=[DataRequired()])
    login = SubmitField(label="Login")


class SearchStudent(FlaskForm):
    search_value = SearchField(validators=[DataRequired()])
    submit_btn = SubmitField(label="Search")