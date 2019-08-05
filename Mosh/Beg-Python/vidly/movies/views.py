from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def index(request):
    return HttpResponse("Hello World, This is django in action")

# create a urls.py to mapp this index
