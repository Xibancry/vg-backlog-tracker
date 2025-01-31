from django.db import models

# Create your models here.
class User(models.Model):
    nickname = models.CharField(max_length=20)
    email = models.EmailField()
    date_of_birth = models.DateField()
    password = models.CharField(max_length=256)