from knox import views as knox_views
from django.urls import path
from rest_framework import routers
from .api import TutorRegisterViewSet, TutorSubjectCategoryViewSet, TutorEducationViewSet, TutorRateViewSet, TutorLanguageViewSet


router = routers.DefaultRouter()
router.register('api/register', TutorRegisterViewSet, 'tutor')
router.register('api/subjectcategory', TutorSubjectCategoryViewSet)
router.register('api/education', TutorEducationViewSet, 'tutor')
router.register('api/hourlyrate', TutorRateViewSet, 'tutor')
router.register('api/languages', TutorLanguageViewSet, 'tutor')
urlpatterns = router.urls

"""urlpatterns = [
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]"""