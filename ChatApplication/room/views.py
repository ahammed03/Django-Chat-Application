from django.shortcuts import render,HttpResponse
from django.contrib.auth.decorators import login_required
from .models import Room


# Create your views here.
@login_required
def rooms(request):
    rooms_list=Room.objects.all()

    return render(request,'rooms.html',{'rooms':rooms_list})
def room(request,slug):
    room_details =Room.objects.get(slug=slug)


    return render(request,'each-room.html',{'room':room_details})