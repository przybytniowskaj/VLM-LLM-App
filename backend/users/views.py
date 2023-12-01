from django.contrib.auth import authenticate
from django.shortcuts import render
from rest_framework import generics, status
from .serializers import SignUpSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.views import APIView
# Create your views here.


class SignUpView(generics.GenericAPIView):
    serializer_class = SignUpSerializer
    permission_classes = []

    def post(self, request: Request):
        data = request.data

        serializer = self.serializer_class(data=data)

        if serializer.is_valid():
            serializer.save()

            response = {"message": "User Created Successfully", "data": serializer.data}

            return Response(data=response, status=status.HTTP_201_CREATED)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class LoginView(APIView):

    def post(self, request:Request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(email=email, password=password)

        if user is not None:

            response = {"message": "Login Successfull", "username": user.username, "token": user.auth_token.key }
            
            return Response(data=response, status=status.HTTP_200_OK)

        else:
            return Response(data={"message": "Invalid email or password"})

    def get(self, request:Request):
        content={
            "user":str(request.user),
            "auth":str(request.auth)

        }

        return Response(data= content, status=status.HTTP_200_OK)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import get_user_model
from .serializers import SignUpSerializer

User = get_user_model()


class UserProfileAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = SignUpSerializer(user)
        return Response(serializer.data)

    def post(self, request):
        try:
            user = request.user
            uploaded_photos = request.data.get('uploaded_photos', [])

            # Update the uploaded_photos field
            user.uploaded_photos.extend(uploaded_photos)
            user.save()

            return Response({'message': 'Uploaded photos updated successfully.'})
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


