from django.urls import path
from .views import *
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
	path('register', registration_view, name="register"),
	path('login', obtain_auth_token, name="login"), # -> see accounts/api/views.py for response and url info
    path('changepassword/', ChangePasswordView.as_view(), name='change-password'),


      path('userlist/',userlist.as_view()),
    path('userlist/getbyid/<int:pk>/',userDetail.as_view(), name='enfantgetbyid'),

      path('compte2/',userlist2.as_view()),
    path('compte2/getbyid/<int:pk>/',userDetail2.as_view(), name='enfantgetbyid'),

     path('enfant/',Enfantlist.as_view()),
    path('enfant/getbyid/<int:pk>/',EnfantDetail.as_view(), name='enfantgetbyid'),

    path('mairesse/',maitresselist.as_view()),
    path('mairesse/getbyid/<int:pk>/',maitresseDetail.as_view(), name='mairessegetbyid'),

    path('niveau/',nivaulist.as_view()),
    path('niveau/getbyid/<int:pk>/',niveauDetail.as_view(), name='niveaugetbyid'),

    path('anneescolaire/',anneescolairelist.as_view()),
    path('anneescolaire/getbyid/<int:pk>/',anneescolaireDetail.as_view(), name='anneescolairegetbyid'),

    path('classe/',classelist.as_view()),
    path('classe/getbyid/<int:pk>/',classeDetail.as_view(), name='classegetbyid'),
   

    path('abcenceenfant/',abcence_enfant_list.as_view()),
    path('abcenceenfant/getbyid/<int:pk>/',abcence_enfant_Detail.as_view(), name='niveaugetbyid'),
    
    path('abcencemaitresse/',abcence_maitresse_list.as_view()),
    path('abcencemaitresse/getbyid/<int:pk>/',abcence_maitresse_Detail.as_view(), name='niveaugetbyid'),
    

  path('regimehoraire/',regimehoraire_list.as_view()),
  path('regimehoraire/getbyid/<int:pk>/',regimehoraire_Detail.as_view(), name='niveaugetbyid'),

path('regimehoraire/',regimehoraire_list.as_view()),
path('regimehoraire/getbyid/<int:pk>/',regimehoraire_Detail.as_view(), name='niveaugetbyid'),


  path('clubs/',club_list.as_view()),
  path('clubs/getbyid/<int:pk>/',club_Detail.as_view(), name='niveaugetbyid'),

 path('clubenf/',clubenf_list.as_view()),
  path('clubenf/getbyid/<int:pk>/',clubenf_Detail.as_view(), name='niveaugetbyid'),
    path('getclubbyenf/<int:ide>/',getclubbyenf.as_view(), name='niveaugetbyid'),


 path('activite/',activite_list.as_view()),
  path('activite/getbyid/<int:pk>/',activite_Detail.as_view(), name='niveaugetbyid'),
  
    path('frais/',frais_list.as_view()),
    path('frais/getbyid/<int:pk>/',frais_Detail.as_view(), name='niveaugetbyid'),


path('reglement/',reglement_list.as_view()),
    path('reglement/getbyid/<int:pk>/',reglement_Detail.as_view(), name='niveaugetbyid'),
    path('reglementenfant/<int:ide>/',getregbyenf.as_view(), name='niveaugetbyid'),

 path('charge/',chargelist.as_view()),
 path('charge/getbyid/<int:pk>/',chargeDetail.as_view(), name='niveaugetbyid'),

 path('documentmaitraisse/',documentmaitraisselist.as_view()),
 path('documentmaitraisse/getbyid/<int:pk>/',documentmaitraisseDetail.as_view(), name='niveaugetbyid'),


]

