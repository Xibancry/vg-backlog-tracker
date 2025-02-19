from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['pk', 'username', 'email', 'date_of_birth', 'password', 'member_since']
        
class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    date_of_birth = serializers.DateField()
    password = serializers.CharField()
    confirmPassword = serializers.CharField()