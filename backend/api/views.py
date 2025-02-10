from django.shortcuts import render
from .models import User
from .serializers import UserSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny 

# Create your views here.
class TestView(APIView):
    permission_classes = [AllowAny]
    
    def get(self, request):
        return Response({
            "message": "Hello from DRF!"
        })

class UserCreate(generics.CreateAPIView):
    # API endpoint that allows creation of a new user
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class UserView(generics.ListAPIView):
    # API endpoint that allows users to be viewed
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
"""class UserView(APIView):
    permission_classes = [AllowAny]
    def get(self, request, format=None, *args, **kwargs):
        queryset = User.objects.all()
        serializer_class = UserSerializer
        
        return Response(serializer_class.data)
    
    def post(self, request, format=None):
        serializer_class = UserSerializer(data=request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data, status=status.HTTP_201_CREATED)
        return Response(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)"""

class UserDetail(generics.RetrieveAPIView):
    # API endpoint that returns a single user by pk
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class UserUpdate(generics.RetrieveUpdateAPIView):
    # API endpoint that allows a user record to be updated
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class UserDelete(generics.RetrieveDestroyAPIView):
    # API endpoint that allows a user record to be deleted
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer
