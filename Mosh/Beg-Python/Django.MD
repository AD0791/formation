# Python Mastery

## : Beginner Grid-3

DJANGO Framework

### First Django project

```bash
$ pipenv install django
# activate the VENV
#To activate this project's virtualenv, run pipenv shell.
#Alternatively, run a command inside the virtualenv with pipenv run.
$ pipenv shell
```

Now the VENV is active we need to create the django project.

```bash
Alexandros-MacBook-Pro:vidly alexandrodisla$ pipenv shell
Launching subshell in virtual environment…
 . /Users/alexandrodisla/.local/share/virtualenvs/vidly-xhLcunrD/bin/activate
bash-3.2$  . /Users/alexandrodisla/.local/share/virtualenvs/vidly-xhLcunrD/bin/activate
(vidly) bash-3.2$ django-admin startproject vidly .
```

Create a boiler plate file system in our directory to start our project.

#### IMportant

Set the vscode pythonPath to path of the virtual environment.

#### Start Server (default port)

```bash
 python3 manage.py runserver
```

### First App

**The django app can be breakdown into multiple small apps handeling a specific functionality.**

```bash
(vidly) Alexandros-MacBook-Pro:vidly alexandrodisla$ python3 manage.py startapp movies
```

### Views

Classic Pattern :

- MVC

Django pattern:

- MTV

#### SHow : "Hello World"

> In the movies app `((vidly) Alexandros-MacBook-Pro:vidly alexandrodisla$ python3 manage.py startapp movies)`:

1. we work in the views.py
2. we created urls.py

- movies/views

```python
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def index(request):
    return HttpResponse("Hello World")

# create a urls.py to mapp this index
```

- movies/urls

```python
from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index')
]
```

> WE go out the movies directory, (inside the vidly`_djangcreated_dir`)

- `V`idly/vidly/urls

```python
"""vidly URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('movies/', include('movies.urls'))
]
```
