from rest_framework import serializers
from student.models import StudentRegister

# TutorRegister Serializer
class StudentRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentRegister
        fields = ('id', 'fullname', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    