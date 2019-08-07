from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='movies_index'),
    # we have set django to apply this behavior:
    # movies/movie_id
    # make sure it's an integer
    path('<int:movie_id>', views.detail, name='movies_detail')
]
