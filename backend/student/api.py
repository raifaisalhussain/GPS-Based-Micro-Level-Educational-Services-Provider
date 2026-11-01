from student.models import StudentRegister
from rest_framework import viewsets, permissions
from .serializers import StudentRegisterSerializer

#Load Viewsets

class StudentRegisterViewSet(viewsets.ModelViewSet):
    queryset = StudentRegister.objects.all()
    serializer_class = StudentRegisterSerializer
    permission_classes = [
        permissions.AllowAny
    ]