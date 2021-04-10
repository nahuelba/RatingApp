from django.contrib import admin
from .models import RatingCounterModel

# Register your models here.
class RatingCounterAdmin(admin.ModelAdmin):
    readonly_fields = (['created', 'modified'])


admin.site.register(RatingCounterModel, RatingCounterAdmin)
