from django.shortcuts import render
from .models import User
from .serializers import UserSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken

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

class UserRegister(APIView):
    # API endpoint that allows to create users and issuing tokens
    permission_classes = [AllowAny]
    
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        date_of_birth = request.data.get('date_of_birth')
        
        #Check for empty fields
        if not username or not email or not password:
            return Response({
                'error': 'Please fill out all fields'
            }, status=status.HTTP_400_BAD_REQUEST)
            
        #Check if username exists
        if User.objects.filter(username=username).exists():
            return Response({
                'error': 'Username already exists'
            }, status=status.HTTP_400_BAD_REQUEST)
            
        #Check if email exists
        if User.objects.filter(email=email).exists():
            return Response({
                'error': 'Email already exists'
            }, status=status.HTTP_400_BAD_REQUEST)
            
        #Create user
        user = User.objects.create(
            username = username,
            email = email,
            date_of_birth = date_of_birth,
            password = password
        )
        
        #Generate token
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'message': 'User registered successfully',
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }, status=status.HTTP_201_CREATED)