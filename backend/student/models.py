from django.db import models

class StudentRegister(models.Model):
    fullname = models.CharField(max_length = 100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    
