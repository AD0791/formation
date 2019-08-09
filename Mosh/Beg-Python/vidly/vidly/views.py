from django.shortcuts import render

def home(request):
    return render(request,'home.html')


# We need to map this views to our url endpoint