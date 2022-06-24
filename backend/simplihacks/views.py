from django.shortcuts import render
from django.http import HttpResponse
from dotenv import load_dotenv
import os
import requests

# Create your views here.
def index(request):
    load_dotenv()
    api = os.getenv("API_KEY")
    url = f"http://api.weatherapi.com/v1/current.json?key={api}&q=London&aqi=no"
    
    print(requests.get(url).json())

    return render(request, "simplihacks/index.html")