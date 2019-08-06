from django.contrib import admin
# .models means the models module in our current folder
from .models import Genre, Movie

# customize the representation of the models in admin panel


class GenreAdmin(admin.ModelAdmin):
    list_display = ("id", "name")


class MovieAdmin(admin.ModelAdmin):

    list_display = ("title", "number_in_stock", "daily_rate")
    # specify the fields we want to show
    exclude = ('date_created', )

    # Register your models here.


admin.site.register(Genre, GenreAdmin)
admin.site.register(Movie, MovieAdmin)
