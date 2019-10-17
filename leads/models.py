from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    company = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    region = models.CharField(max_length=100, blank=True)
    district = models.CharField(max_length=100, blank=True)
    address = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=100)
    number = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    status = models.CharField(max_length=100, default="NEW")
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
