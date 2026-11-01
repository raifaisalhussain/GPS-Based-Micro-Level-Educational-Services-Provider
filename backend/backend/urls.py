from django.contrib import admin
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from tutor import views 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tutor/', include('tutor.urls')),
    path('student/', include('student.urls')),
]
