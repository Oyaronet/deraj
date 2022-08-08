from distutils.log import Log
from QuizApp import app
from flask import render_template, url_for, redirect, flash, request
from QuizApp.forms import LoginForm, SearchStudent
from QuizApp.database import db, Student

@app.route("/")
def home():
    form = LoginForm()
    return render_template("home.html", form=form)


@app.route("/admin_login", methods=["GET", "POST"])
def admin_login():
    form = LoginForm()
    if form.validate_on_submit():
        user_info = {
            "username" : form.username.data,
            "password" : form.password.data
        }
        if user_info['username'] == "Oyaro" and user_info['password'] == "code":
             # load to the admin dashboard #
             return render_template("admindashboardhome.html", 
                    username=user_info['username'])
             pass
        else:
            flash('Invalid username or password!', 'danger')
            return redirect("/admin_login")

    return render_template("adminlogin.html", form=form)


# Register New Student in the System
@app.route("/register_student", methods=['POST', 'GET'])
def register_student():
    student_data = {
        'firstname': request.form.get('firstname'),
        'secondname': request.form.get('secondname'),
        'adm': request.form.get('adm'),
        'upi': request.form.get('upi')
    }
    # Insert data into the database
    student = Student(
            firstname=student_data['firstname'],
            secondname = student_data['secondname'],
            adm = student_data['adm'],
            upi = student_data['upi']
        )
    try:
       db.create_all()
       db.session.add(student)
       db.session.commit()
    except:
        db.session.add(student)
        db.session.commit()
    return 'Student added successfully!'


# Search Student
@app.route("/get_student", methods=['POST', 'GET'])
def get_student():
    search_value = request.form.get('search-value')
    data = Student.query.filter_by(adm=search_value).first()
    # data2 = Student.query.all()
    return str(data)

