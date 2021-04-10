from django.db.models import F

from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.response import Response

from RatingCounter.models import RatingCounterModel
from .serializers import RatingCounterModelSerializer

class RatingCounterModelListAPIView(ListAPIView):
    
    serializer_class = RatingCounterModelSerializer

    def get_queryset(self) : 
        return RatingCounterModel.objects.all()

class RatingCounterCreateAPIView(CreateAPIView):
    serializer_class = RatingCounterModelSerializer

    def post(self, request):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            album= serializer.validated_data['album']
            rating= serializer.validated_data['rating']            
            
            instance, created = RatingCounterModel.objects.get_or_create(album=album, defaults={'rating': rating})
            if not created:
                
                RatingCounterModel.objects.filter(album=album).update(rating=F('rating')+rating, updates_number=F('updates_number')+1)

                return Response({'message': 'Rating added correctly'}, status = status.HTTP_201_CREATED)

            return Response({'message': 'Rating added correctly'}, status = status.HTTP_201_CREATED)
        return Response({'message': 'The rating could not be added. Please try later'}, status= status.HTTP_400_BAD_REQUEST)