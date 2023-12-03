# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask,jsonify,request
from joblib import load
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

model = load('Model.joblib')
features = ["age", "hours-per-week", "workclass_Federal-gov", "workclass_Local-gov",
            "workclass_Private", "workclass_Self-emp-inc", "workclass_Self-emp-not-inc", "workclass_State-gov", "workclass_Without-pay",
            "education_10th", "education_11th", "education_12th", "education_1st-4th", "education_5th-6th", "education_7th-8th", "education_9th",
            "education_Assoc-acdm", "education_Assoc-voc", "education_Bachelors", "education_Doctorate", "education_HS-grad", "education_Masters",
            "education_Preschool", "education_Prof-school", "education_Some-college", "occupation_Adm-clerical", "occupation_Armed-Forces",
            "occupation_Craft-repair", "occupation_Exec-managerial", "occupation_Farming-fishing", "occupation_Handlers-cleaners",
            "occupation_Machine-op-inspct", "occupation_Other-service", "occupation_Priv-house-serv", "occupation_Prof-specialty",
            "occupation_Protective-serv", "occupation_Sales", "occupation_Tech-support", "occupation_Transport-moving", "gender_Female",
            "race_Amer-Indian-Eskimo", "race_Asian-Pac-Islander", "race_Black", "race_Other", "race_White", "gender_Male","native-country_United-States"]

# Flask constructor takes the name of 
# current module (__name__) as argument.
app = Flask(__name__)
 
# The route() function of the Flask class is a decorator, 
# which tells the application which URL should call 
# the associated function.
@app.route('/')
# ‘/’ URL is bound with hello_world() function.
def hello_world():
    return 'Payscale prediction server!'

@app.route('/predict',methods=['POST'])
def predict():
    json_data = request.json
    df = pd.DataFrame([json_data])
    # print(df)
    y_pred = model.predict(df)
    if y_pred[0] == 0:
        return 'Less than 50K'
    return 'More than 50K'

 
# main driver function
if __name__ == '__main__':
 
    # run() method of Flask class runs the application 
    # on the local development server.
    app.run()
