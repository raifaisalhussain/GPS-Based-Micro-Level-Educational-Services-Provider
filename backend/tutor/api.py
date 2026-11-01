from tutor.models import TutorRegister, TutorSubject, TutorEducation, TutorRate, TutorLanguage
from rest_framework import viewsets, permissions
from .serializers import TutorRegisterSerializer, TutorSubjectSerializer, TutorEducationSerializer, TutorRateSerializer, TutorLanguageSerializer

#Load Viewsets

class TutorRegisterViewSet(viewsets.ModelViewSet):
    queryset = TutorRegister.objects.all()
    serializer_class = TutorRegisterSerializer
    permission_classes = [
        permissions.AllowAny
    ]

class TutorSubjectCategoryViewSet(viewsets.ModelViewSet):
    queryset = TutorSubject.objects.all()
    serializer_class = TutorSubjectSerializer
    permission_classes = [
        permissions.AllowAny
    ]

class TutorEducationViewSet(viewsets.ModelViewSet):
    queryset = TutorEducation.objects.all()
    serializer_class = TutorEducationSerializer
    permission_classes = [
        permissions.AllowAny
    ]

class TutorRateViewSet(viewsets.ModelViewSet):
    queryset = TutorRate.objects.all()
    serializer_class = TutorRateSerializer
    permission_classes = [
        permissions.AllowAny
    ]

class TutorLanguageViewSet(viewsets.ModelViewSet):
    queryset = TutorLanguage.objects.all()
    serializer_class = TutorLanguageSerializer
    permission_classes = [
        permissions.AllowAny
    ]