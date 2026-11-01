from rest_framework import serializers
from tutor.models import TutorRegister, TutorSubject, TutorEducation, TutorRate, TutorLanguage

class TutorRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorRegister
        fields = ('id', 'fullname', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

class TutorSubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorSubject
        fields = ('__all__')

class TutorEducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorEducation
        fields = ('__all__')       

class TutorRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorEducation
        fields = ('__all__')  

class TutorLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorLanguage
        fields = ('__all__')  