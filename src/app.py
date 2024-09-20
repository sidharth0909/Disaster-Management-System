from flask import Flask, request, render_template
from keras.models import load_model
from keras.preprocessing import image
from PIL import Image
import numpy as np
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
app.config['MAX_CONTENT_LENGTH'] = 50 * 1024 * 1024
# Load the saved model
cnn = load_model('./model.h5')  # Replace with the actual path

# Define class labels
class_labels = {
    0: 'Damaged Infrastructure',
    1: 'Fire Disaster',
    2: 'Human Damage',
    3: 'Land Disaster',
    4: 'Water Disaster'
}

# Define additional information about the predicted class
class_info = {
    "Damaged Infrastructure": "Damaged infrastructure during and after a disaster can create conditions of further vulnerability for people, as it may reduce access to certain resources or income-generating activities, making them less resilient to new and emerging risks¹. For instance, construction sites are at higher risk than regular commercial properties during disaster times for a number of reasons. The standard measures that would protect a building from a disaster, such as earthquake-proof structures or internal fire reduction systems, are not yet in place. \n Precautions and points to remember during and after a disaster include:- Avoid moving water, regardless of depth or speed⁴.- Do not drive through flooded roads.\n- Leave your home or building if you hear shifting or unusual noises.\n- Stay away from power lines.\n- Watch out for fallen power lines that may be hanging overhead.\n- Call the electric company to report fallen power lines.It's crucial to identify the risks prevalent in the geographic area and create an emergency plan to help reduce the risk associated with these threats. Proper training for team members on what needs to happen in a disaster is also essential. By taking these precautions, the overall cost of a natural disaster will be much lower, and everyone on the site and around it will be protected.",

    'Fire Disaster': 'Fire disasters can cause significant human damage, including injuries and loss of life. Here are some precautions and points to remember during and after a fire disaster.Before a Fire Disaster:\nKeep your workplace tidy and maintain a good standard of housekeeping1.\nRegularly remove combustible waste, including accumulations of dust1.\nKeep ignition sources away from combustible material or flammable liquids and gases1.\nPrepare an emergency plan and create a written evacuation procedure1.\nTrain your employees and ensure that they are familiar with the emergency plan1.\nTest the arrangements in the plan regularly and carry out a fire drill at least twice a year1.During a Fire Disaster:\nGetting out quickly and safely is your only goal. Do not try to “save” any objects, no matter how valuable2.\nNever use an elevator during a fire. Always take the stairs2.\nStay low to the ground. Cover your mouth and nose with a cloth or your shirt to prevent breathing in smoke or dangerous fumes2.\nWear protective clothing and make sure that you have closed all the doors and windows to keep the smoke and other flammable particles from entering your home3.\nAfter a Fire Disaster:\nGet medical help right away by calling the emergency services4.\nContact your local disaster relief service, such as The Red Cross, if you need temporary housing, food, and medicines4.\nCheck with the fire department to make sure your residence is safe to enter4.\nDO NOT attempt to reconnect utilities yourself4.',

    'Human Damage': '',

    'Land Disaster':'This class represents areas where there has been damage to human life due to a disaster.',
    'Land Disaster': 'Land disasters, such as landslides, can cause significant damage to both property and human life. Here are some precautions and points to remember during and after a land disaster:\nBefore a Land Disaster:\mAssess the soil before constructing your home or any property in a landslide-prone or hilly area\nMake buildings away from steep slopes, edge of mountains, drainage ways, or natural erosion valleys1\nBuild embankments on the gradient slopes and retaining walls1.\nFit flexible gas pipes to avoid leakage1.\nBuy insurance that covers the damage caused to your property for landslide damage1.\nImplement land-use zoning cover in areas most vulnerable to landslides or other natural hazards1.\nPrepare evacuation plans and an emergency supply kit containing all necessary items required during such hazards1.\nStay updated with the latest emergency information through radio alerts and television sources1.\nDuring a Land Disaster:\nIf you stay in a landslide-prone area, try to evacuate the place as early as possible1.\nBe aware of unusual cracking or rolling of huge stones1.\nKeep a watch on the water in the stream or channel. A rise in water level or transformation of color from clear to muddy can be alarming1.\nStay out of the path of debris or landslides1.\nKeep watch on the road for mud blocks or debris overflow1.\nAfter a Land Disaster:\nFree the head of the affected person first2.\nRemove snow and water from their mouth and nose2.\nRemove wet clothes and dry the affected person’s body2.\nWrap them in dry clothes/blankets2.\nAdminister CPR (Cardio Pulmonary Resuscitation), if needed, and give cardiac massage2.\nSeek medical attention immediately2.\nRemember, the key to minimizing human damage during a land disaster is preparedness, quick response, and immediate post-disaster actions.',

    'Water Disaster': 'Water disasters, such as floods, can cause significant damage to both property and human life. Here are some precautions and points to remember during and after a water disaster:\nBefore a Water Disaster:\nKnow your evacuation zone, know your evacuation routes and plan where you will go1.\nPrepare a small bag with essentials1.\nTune in to local media for flood watches and warnings1.\nHeed warnings from officials and evacuate when orders are given1.\nDuring a Water Disaster:\nDon’t panic1.\nAvoid moving water, regardless of depth or speed2.\nDo not drive through flooded roads. Cars can be swept away or break down2.\nFollow all warnings about water on roadways2.\nIf you have to work in or near floodwater, wear a life jacket2.\nAfter a Water Disaster:\nUse Safe Water After a Natural Disaster or Emergency3.\nDo not use water you suspect or have been told is contaminated to drink, wash dishes, brush your teeth, wash and prepare food, wash your hands, make ice, or make baby formula3.\nUse bottled, boiled, or treated water for drinking, cooking, and personal hygiene3.\nAvoid drinking alcohol. Alcohol dehydrates the body, which increases the need for drinking water3.\nBoil water before drinking or cooking4.\nKeep your surroundings clean by using disinfectants4.\nCover drain holes to prevent backflow of sewage4.\nClear debris from your premises4.\nStay inside until you receive proper information that it’s safe to move outside4.\nRemember, the key to minimizing human damage during a water disaster is preparedness, quick response, and immediate post-disaster actions.'
}

# Define a route for the home page
@app.route('/')
def home():
    return render_template('index.html')

# Define a route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the image file from the request
        file = request.files['image']

        # Open the image using Pillow (PIL)
        img = Image.open(file)
        img = img.resize((64, 64))  # Resize to the model's input size
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array = img_array / 255

        # Make a prediction
        prediction = cnn.predict(img_array)
        predicted_class = np.argmax(prediction)
        predicted_label = class_labels.get(predicted_class, 'Unknown')

        # Add the information to the result dictionary
        result = {
            'class': predicted_label,
            'info': class_info.get(predicted_label, 'No additional information available.')
        }

        # Print the result in the terminal
        print("Prediction Result:", result)

        return result

    except Exception as e:
        # Print the error in the terminal
        print("Error:", e)

        return str(e)

if __name__ == '__main__':
    app.run(debug=True)
