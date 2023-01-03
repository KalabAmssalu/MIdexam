from django.db import models

# Create your models here.
class Employee(models.Model):
    name=models.CharField(max_length=50)
    def str(self):
        return self.name