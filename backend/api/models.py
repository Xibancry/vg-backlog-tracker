from django.db import models
from datetime import date

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=20)
    email = models.EmailField()
    date_of_birth = models.DateField()
    password = models.CharField(max_length=256)
    member_since = models.DateField(default=date.today)
    
    def __str__(self):
        return self.nickname

class Collection(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    game_id = models.IntegerField()
    is_completed = models.SmallIntegerField() #0: Backlog, 1: In progress, 2: Beaten, 3:Completionist
    time_played = models.DurationField()
    
    def __str__(self):
        return self.user_id
    