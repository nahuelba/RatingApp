from django.db import models

# Create your models here.


class RatingCounterModel(models.Model):
    album = models.CharField('Album',max_length=400 , blank=False, null=False)
    rating = models.IntegerField(default=0)
    updates_number= models.IntegerField(default=1, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.album + " " + str(self.rating)

    class Meta:
        verbose_name = 'Ratings'
        ordering = ['-rating']
        