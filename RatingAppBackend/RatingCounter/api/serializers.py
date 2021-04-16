from rest_framework import serializers
from RatingCounter.models import RatingCounterModel

class RatingCounterModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = RatingCounterModel
        fields = '__all__'
