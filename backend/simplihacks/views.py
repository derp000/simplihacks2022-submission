from django.shortcuts import render
from django.http import HttpResponse
from dotenv import load_dotenv
import os
import requests
from serpapi import GoogleSearch

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
        wikiUrl = f"https://en.wikipedia.org/w/api.php?action=parse&page=Climate_change_in_{city}&format=json"
        city_weather = requests.get(url).json()
        params = {
        "q": f"{city_weather['location']['name']} relief organizations",
        "api_key": "5f87f687f7a29a67ea2ac5c1d29ef7567c5600de3c08aadbb2736bdbcd684d40"
        }

        search = GoogleSearch(params)
        results = search.get_dict()

        weather = {
        'city' : city_weather['location']['name'],
        'country': city_weather['location']['country'],
        'temperature' : city_weather['current']['temp_f'],
        'description' : city_weather['current']['condition']['text'],
        'icon' : city_weather['current']['condition']['icon'],
        'aqi' : city_weather['current']['air_quality']['us-epa-index'],
        'carbonMonoxideLevels' : str(round(city_weather['current']['air_quality']['co'], 2)),
        'website_url' : results['organic_results'][0]['link']
        }

        return render(request, "simplihacks/test.html", weather)


    else:
        return render(request, "simplihacks/home.html", weather)
    