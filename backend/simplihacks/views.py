from django.shortcuts import render
from django.http import HttpResponse
from dotenv import load_dotenv
import os
import requests

# Create your views here.
def index(request):
    load_dotenv()
    api = os.getenv("API_KEY")

    weather = {
        'city' : "City: ?",
        'temperature' : "?",
        'description' : "Condition: ?",
        'icon' : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png",
        'aqi' : "?"
    }

    if request.method == "POST":
        city = request.POST['city']
        url = f"http://api.weatherapi.com/v1/current.json?key={api}&q={city}&aqi=yes"
        city_weather = requests.get(url).json()

        weather = {
        'city' : city_weather['location']['name'],
        'temperature' : city_weather['current']['temp_f'],
        'description' : city_weather['current']['condition']['text'],
        'icon' : city_weather['current']['condition']['icon'],
        'aqi' : city_weather['current']['air_quality']['us-epa-index']
        }

        return render(request, "simplihacks/index.html", weather)

    else:
        return render(request, "simplihacks/index.html", weather)
    