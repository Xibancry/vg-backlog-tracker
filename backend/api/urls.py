from django.urls import path
from .views import TestView, UserCreate, UserView, UserDetail, UserUpdate, UserDelete, UserRegister
from rest_framework_simplejwt import views as jwt_views

#Create urls here
urlpatterns = [
    path('test/', TestView.as_view(), name='test'),
    path('db/usercreate', UserCreate.as_view(), name='create-user'),
    path('db/usercreationtest', UserRegister.as_view(), name='create-user-test'),
    path('db/userview', UserView.as_view(), name='view-users'),
    path('db/userdetail/<int:pk>', UserDetail.as_view(), name='retrieve-user'),
    path('db/userupdate/<int:pk>', UserUpdate.as_view(), name='update-user'),
    path('db/userdelete/<int:pk>', UserDelete.as_view(), name='delete-user'),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]