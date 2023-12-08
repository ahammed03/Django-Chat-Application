from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('',views.rooms,name='rooms'),
    path('<slug:slug>',views.room_chat,name='room_chat'),

    
]
