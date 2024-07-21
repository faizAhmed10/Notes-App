from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import *
from rest_framework import status
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    return Response(routes)

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all().order_by('-updated') 
    serializer = NoteSerializer(notes, many = True)
    return Response(serializer.data)


@api_view(['GET'])
def getNote(request, pk):
    try:
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(note)
        return Response(serializer.data)
    except Note.DoesNotExist:
        return Response({"error": "Note not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

@api_view(['POST'])
def createNote(request):
    try:
        data = request.data
        body = data['body']
        note = Note.objects.create(
            body=body
        )
        
        notes = Note.objects.all().order_by('-updated') 
        return Response({"response": "done"})
    except Exception as e:
        return Response(str(e))

@api_view(['PUT'])
def updateNote(request, pk):
    try:
        data = request.data
        body = data['body']
        note = Note.objects.get(id=pk)
        note.body = body
        note.save()
        notes = Note.objects.all().order_by('-updated') 
        return Response({"response": "DONE"})
    except Exception as e:
        return Response(str(e))

    

@api_view(['DELETE'])
def deleteNote(request, pk):
    try:
        note = Note.objects.get(id=pk)
        note.delete()
        return Response("Note deleted")
    except Exception as e:
        return Response("Error" + str(e))


