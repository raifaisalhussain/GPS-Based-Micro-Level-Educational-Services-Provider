from django.contrib import admin
from .models import TutorRegister, TutorSubject, TutorEducation, TutorRate, TutorLanguage

# Register your models here.
admin.site.register(TutorRegister)
admin.site.register(TutorSubject)
admin.site.register(TutorEducation)
admin.site.register(TutorRate)
admin.site.register(TutorLanguage)
