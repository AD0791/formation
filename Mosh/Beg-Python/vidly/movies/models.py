from django.db import models
from django.utils import timezone
# Create your models here.


class Genre(models.Model):
    # use field
    name = models.CharField(max_length=255)
    # override the default __str__

    def __str__(self):
        return self.name


class Movie(models.Model):
    # use field
    title = models.CharField(max_length=255)
    release_year = models.IntegerField()
    number_in_stock = models.IntegerField()
    daily_rate = models.FloatField()
    # association has-many and belongs to
    # on delete will tell django how to handle
    # a delete event of a genre given the
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    # add a new
    date_created = models.DateTimeField(default=timezone.now)
    # override the default __str__

    # def __str__(self):
    #   return self.name
