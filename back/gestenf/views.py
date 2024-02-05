from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import RegistrationSerializer,userpasswodSerializer
from rest_framework.authtoken.models import Token

# Register
# Response: https://gist.github.com/mitchtabian/c13c41fa0f51b304d7638b7bac7cb694
# Url: https://<your-domain>/api/account/register
@api_view(['POST', ])
def registration_view(request):

	if request.method == 'POST':
        
		serializer = RegistrationSerializer(data=request.data)
		data = {}
		if serializer.is_valid():
			account = serializer.save()
			data['response'] = 'successfully registered new user.'
			data['email'] = account.email
			data['username'] = account.username
			token = Token.objects.get(user=account).key
			data['token'] = token
           
		else:
			data = serializer.errors
		return Response(data)
from rest_framework import status
from rest_framework import generics
from rest_framework.views import APIView

from rest_framework.response import Response
from .serializers import ChangePasswordSerializer
from rest_framework.permissions import IsAuthenticated   
from .models import *
class ChangePasswordView(generics.UpdateAPIView):
    """
    An endpoint for changing password.
    """
    serializer_class = ChangePasswordSerializer
    model = Account
    permission_classes = (IsAuthenticated,)

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj


    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                    return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Password updated successfully',
                'data': []
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from .enfants_serializer import *

# LOGIN
# Response: https://gist.github.com/mitchtabian/8e1bde81b3be342853ddfcc45ec0df8a
# URL: http://127.0.0.1:8000/api/account/login


from django.shortcuts import render,get_object_or_404
from django.http import JsonResponse,HttpResponse
from rest_framework.parsers import JSONParser
from .enfants_serializer import *
from django.views.decorators.csrf import csrf_exempt

from .models import enfant
# Create your views here.
from rest_framework import generics
class userlist2(generics.ListCreateAPIView):
    queryset = userpasswod.objects.all()
    serializer_class = userpasswodSerializer
class userDetail2(generics.RetrieveUpdateDestroyAPIView):
    queryset = userpasswod
    serializer_class = userpasswodSerializer
class userlist(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = UserSerializer
class userDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Account
    serializer_class = UserSerializer
class Enfantlist(generics.ListCreateAPIView):
    queryset = enfant.objects.all()
    serializer_class = enfants_serializer
class EnfantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = enfant
    serializer_class = enfants_serializer

class nivaulist(generics.ListCreateAPIView):
    queryset = niveau.objects.all()
    serializer_class = niveau_serializer
class niveauDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = niveau
    serializer_class = niveau_serializer

class maitresselist(generics.ListCreateAPIView):
    queryset = maitresse.objects.all()
    serializer_class = maitresse_serializer
class maitresseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = maitresse
    serializer_class = maitresse_serializer

class anneescolairelist(generics.ListCreateAPIView):
    queryset = anneescolaire.objects.all()
    serializer_class = anneescolaire_serializer
class anneescolaireDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = anneescolaire
    serializer_class = anneescolaire_serializer
    
class classelist(generics.ListCreateAPIView):
    queryset = classe.objects.all()
    serializer_class = classe_serializer
class classeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = classe
    serializer_class = classe_serializer
class abcence_enfant_list(generics.ListCreateAPIView):
    queryset = abcence_enfant.objects.all()
    serializer_class = abcence_enfant_serializer
class abcence_enfant_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = abcence_enfant
    serializer_class = abcence_enfant_serializer
class abcence_maitresse_list(generics.ListCreateAPIView):
    queryset = abcence_maitresse.objects.all()
    serializer_class = abcence_maitresse_serializer
class abcence_maitresse_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = abcence_maitresse
    serializer_class = abcence_maitresse_serializer



class regimehoraire_list(generics.ListCreateAPIView):
    queryset = regimehoraire.objects.all()
    serializer_class = regimehoraire_serializer
class regimehoraire_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = regimehoraire
    serializer_class = regimehoraire_serializer
class frais_list(generics.ListCreateAPIView):
    queryset = frais.objects.all()
    serializer_class = frais_serializer
class frais_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = frais
    serializer_class = frais_serializer
class reglement_list(generics.ListCreateAPIView):
    queryset = reglement.objects.all()
    serializer_class = reglement_serializer
class getregbyenf(APIView):
    def get(self,request,ide):
            regs = reglement.objects.filter(enfant=ide)
            data = reglement_serializer(regs,many=True).data
            return Response (data)

class reglement_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = reglement
    serializer_class = reglement_serializer
class club_list(generics.ListCreateAPIView):
    queryset = club.objects.all()
    serializer_class = club_serializer
class club_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = club
    serializer_class = club_serializer
class clubenf_list(generics.ListCreateAPIView):
    queryset = clubenf.objects.all()
    serializer_class = clubenf_serializer
class getclubbyenf(APIView):
    def get(self,request,ide):
            regs = clubenf.objects.filter(enfant=ide)
            data = clubenf_serializer(regs,many=True).data
            return Response (data)    
class clubenf_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = clubenf
    serializer_class = clubenf_serializer
class activite_list(generics.ListCreateAPIView):
    queryset = activite.objects.all()
    serializer_class = activite_serializer
class activite_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = activite
    serializer_class = activite_serializer

class chargelist(generics.ListCreateAPIView):
    queryset = charge.objects.all()
    serializer_class = chage_serializer
class chargeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = charge
    serializer_class = chage_serializer
class documentmaitraisselist(generics.ListCreateAPIView):
    queryset = documentmaitraisse.objects.all()
    serializer_class = documentmaitraisse_serializer
class documentmaitraisseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = documentmaitraisse
    serializer_class = documentmaitraisse_serializer