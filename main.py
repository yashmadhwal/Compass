from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root@localhost/compass'
db = SQLAlchemy(app)

class Response(db.Model):  #This should be as same as the table in database but with capital letters
    '''
    sno,name,email,phone_num,msg,date
    '''

    sno = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.String(120), unique=True, nullable=False)
    message = db.Column(db.String(120), unique=True, nullable=False)
    # date = db.Column(db.String(120), nullable=True) # from Date time module

@app.route("/",methods=['GET','POST'])
def home():
    if(request.method == 'POST'):
        name = request.form.get('name')
        phone = request.form.get('phone')
        message = request.form.get('text')
        entry = Response(name = name, phone=phone, message =message)
        db.session.add(entry)
        db.session.commit()

    return render_template("index.html")




if __name__ == "__main__":
    app.run(debug=True)
