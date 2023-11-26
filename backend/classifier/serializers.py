from rest_framework import serializers
from .models import Classifier, SemanticImageSearch, Image


class ClassifierSerializer(serializers.ModelSerializer):
  class Meta:
    model = Classifier
    fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['image']

class SemanticImageSearchSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = SemanticImageSearch
        fields = ['query', 'result', 'date_uploaded', 'images', 'image_features']

