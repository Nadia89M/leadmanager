from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('*', views.handler404),
    path('*', views.handler500)
]
