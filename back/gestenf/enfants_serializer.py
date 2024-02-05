
from rest_framework import serializers
from .models  import *
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'
class enfants_serializer(serializers.ModelSerializer):
    #full_name = serializers.Field(source='full_name')
    fn = serializers.CharField(source='model_method',read_only=True)

    class Meta:
        model = enfant
        fields ='__all__'
        read_only_fields = (
        'fn',
        )
  
class abcence_enfant_serializer(serializers.ModelSerializer):
    
    class Meta:
        model = abcence_enfant
        fields = '__all__'
class abcence_maitresse_serializer(serializers.ModelSerializer):
    
    class Meta:
        model = abcence_maitresse
        fields = '__all__'    

class regimehoraire_serializer(serializers.ModelSerializer):
    
    class Meta:
        model = regimehoraire
        fields = '__all__'
class frais_serializer(serializers.ModelSerializer):
    
    class Meta:
        model = frais
        fields = '__all__'
class reglement_serializer(serializers.ModelSerializer):
    
    class Meta:
        model = reglement
        fields = '__all__'
class niveau_serializer(serializers.ModelSerializer):
    class Meta:
        model = niveau
        fields = '__all__'
class anneescolaire_serializer(serializers.ModelSerializer):
    an = serializers.CharField(source='model_method',read_only=True)
    class Meta:

        model = anneescolaire
        fields = '__all__'
        read_only_fields = (
        'fn',
        )
class maitresse_serializer(serializers.ModelSerializer):
    class Meta:
        model = maitresse
        fields = '__all__'
class classe_serializer(serializers.ModelSerializer):
    class Meta:
        model = classe
        fields = '__all__'
class club_serializer(serializers.ModelSerializer):
    class Meta:
        model = club
        fields = '__all__'
class clubenf_serializer(serializers.ModelSerializer):
    class Meta:
        model = clubenf
        fields = '__all__'
class activite_serializer(serializers.ModelSerializer):
    class Meta:
        model = activite
        fields = '__all__'

class chage_serializer(serializers.ModelSerializer):
    
    class Meta:
        model = charge
        fields = '__all__'
class documentmaitraisse_serializer(serializers.ModelSerializer):
    
    class Meta:
        model = documentmaitraisse
        fields = '__all__'
 