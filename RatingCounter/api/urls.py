from django.urls import path
from .api import RatingCounterModelListAPIView, RatingCounterCreateAPIView

urlpatterns = [
    path("ratings/", RatingCounterModelListAPIView.as_view(), name="ratings"),
    path("ratings/create", RatingCounterCreateAPIView.as_view(), name="Ratings_create")
]