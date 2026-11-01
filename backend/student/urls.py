from knox import views as knox_views
from django.urls import path
from rest_framework import routers
from .api import StudentRegisterViewSet


router = routers.DefaultRouter()
router.register('api/register', StudentRegisterViewSet, 'student')
urlpatterns = router.urls

"""urlpatterns = [
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]"""