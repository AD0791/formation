from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    path('', views.index, name='index'),
    # we have set django to apply this behavior:
    # movies/movie_id
    # make sure it's an integer
    # no need for movies_index and movies_detail
    # the app_name property insure that django will
    # know our to deals with these urls.
    path('<int:movie_id>', views.detail, name='detail')
]
