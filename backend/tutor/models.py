from django.db import models

class TutorRegister(models.Model):
    fullname = models.CharField(max_length = 100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fullname
    

class TutorSubject(models.Model):
    tutorName = models.OneToOneField(TutorRegister, on_delete=models.CASCADE, primary_key = True,)
    subjectCategory = models.CharField(max_length=100)
    subjectSubCategory = models.CharField(max_length=100)


class TutorEducation(models.Model):
    tutorName = models.OneToOneField(TutorRegister, on_delete=models.CASCADE)
    instituteName = models.CharField(max_length=150)
    areaOfStudy = models.CharField(max_length=100)
    DegreeLevel = models.CharField(max_length=50)
    startDate = models.DateField()
    endDate = models.DateField()
    description = models.CharField(max_length=200)

class TutorRate(models.Model):
    tutorName = models.OneToOneField(TutorRegister, on_delete=models.CASCADE)
    hourlyRate = models.IntegerField()

class TutorLanguage(models.Model):
    tutorName = models.OneToOneField(TutorRegister, on_delete=models.CASCADE)
    language1 = models.CharField(max_length=15)
    proficiency1 = models.CharField(max_length=20)
    language2 = models.CharField(max_length=15)
    proficiency2 = models.CharField(max_length=20)

    
    
