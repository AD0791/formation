from django.db import models
from tastypie.resources import ModelResource
from movies.models import Movie, Genre
# Build REST API (resources)


class MovieResource(ModelResource):
    class Meta:
        # lazy loading
        queryset = Movie.objects.all()
        # will help with `/movie/api/movie`
        resource_name = "movies"
        excludes = ['date_created']


class GenreResource(ModelResource):
    class Meta:
        # lazy loading
        queryset = Genre.objects.all()
        # will help with `/movie/api/movie`
        resource_name = "genres"
