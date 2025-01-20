from django.urls import path
from .views import TestView

#Create urls here
urlpatterns = [
    path('test/', TestView.as_view(), name='test'),
]