from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class MyAccountManager(BaseUserManager):
	def create_user(self, email, username, password=None):
		if not email:
			raise ValueError('Users must have an email address')
		if not username:
			raise ValueError('Users must have a username')

		user = self.model(
			email=self.normalize_email(email),
			username=username,
		)

		user.set_password(password)
		user.save(using=self._db)
		return user

	def create_superuser(self, email, username, password):
		user = self.create_user(
			email=self.normalize_email(email),
			password=password,
			username=username,
		)
		user.is_admin = True
		user.is_staff = True
		user.is_superuser = True
		user.save(using=self._db)
		return user


class Account(AbstractBaseUser):
	email 					= models.EmailField(verbose_name="email", max_length=60, unique=True)
	username 				= models.CharField(max_length=30, unique=True)
	date_joined				= models.DateTimeField(verbose_name='date joined', auto_now_add=True)
	last_login				= models.DateTimeField(verbose_name='last login', auto_now=True)
	is_admin				= models.BooleanField(default=False)
	is_active				= models.BooleanField(default=True)
	is_staff				= models.BooleanField(default=False)
	is_superuser			= models.BooleanField(default=False)
	is_ens			        = models.BooleanField(default=False)
	is_adj         			= models.BooleanField(default=False)
	is_parent   			= models.BooleanField(default=False)


	USERNAME_FIELD = 'username'
	REQUIRED_FIELDS = ['email']

	objects = MyAccountManager()

	def __str__(self):
		return self.email

	# For checking permissions. to keep it simple all admin have ALL permissons
	def has_perm(self, perm, obj=None):
		return self.is_admin

	# Does this user have permission to view this app? (ALWAYS YES FOR SIMPLICITY)
	def has_module_perms(self, app_label):
		return True


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)



class userpasswod(models.Model):
   
    username=models.CharField(max_length=60,default='',blank=True)
    password=models.CharField(max_length=60,default='',blank=True)






from django.db import models

from datetime import date
# Create your models here.

class niveau(models.Model):
    id=models.AutoField(primary_key = True,blank=True)
    libelle=models.CharField(max_length=30,blank=True)
    capacitedeclass=models.IntegerField(blank=True,default=0)
    def __str__(self):
        return self.libelle
class maitresse(models.Model):
    user = models.OneToOneField(Account, null=True, blank=True, on_delete=models.CASCADE)
    id=models.AutoField(primary_key = True)
    nom=models.CharField(max_length=60,default='',blank=True)
    prenom=models.CharField(max_length=60,default='',blank=True)
    datenessance=models.DateField(blank=True)
    villenessance=models.CharField(max_length=60,default='',blank=True)
    nationalite=models.CharField(max_length=60,default='',blank=True)
    cin=models.CharField(max_length=8,default='',blank=True)
    #phtcin=models.ImageField(default="")
    datecin=models.DateField(blank=True)
    nvscolaire=models.CharField(max_length=60,default='',blank=True)
    specialite=models.CharField(max_length=20,default="",blank=True)
    tel=models.CharField(max_length=8,default="",blank=True)
    adresse=models.TextField(max_length=70,default="",blank=True)
    #phtmat=models.ImageField(default="")
    from datetime import datetime
    dateemb = models.DateField(blank=True,null=True)
    actif = models.BooleanField(default=False)

    def __str__(self):
        return self.nom
class anneescolaire(models.Model):
    id=models.AutoField(primary_key = True)
    date_deb=models.DateField(blank=True)
    date_fin=models.DateField(blank=True)
    def __str__(self):
      ad=str(self.date_deb)[0] + str(self.date_deb)[1]+str(self.date_deb)[2]+str(self.date_deb)[3] 
      af=str(self.date_fin)[0] + str(self.date_fin)[1]+str(self.date_fin)[2]+str(self.date_fin)[3] 
      an=ad + "-"  + af
      return an
    def model_method(self):
      ad=str(self.date_deb)[0] + str(self.date_deb)[1]+str(self.date_deb)[2]+str(self.date_deb)[3] 
      af=str(self.date_fin)[0] + str(self.date_fin)[1]+str(self.date_fin)[2]+str(self.date_fin)[3] 
      an=ad + "/"  + af
      return an
class classe(models.Model):
    id=models.AutoField(primary_key = True)
    anneescolaire=models.ForeignKey(anneescolaire,on_delete=models.CASCADE,default=None, null=True, blank=True,)
    nom=models.CharField(max_length=60,default='')
    niveau=models.ForeignKey(niveau,on_delete=models.CASCADE,default=None,null=True)
    maitresse=models.ForeignKey(maitresse,on_delete=models.CASCADE,default=None,null=True,blank=True)
    def __str__(self):
        return self.anneescolaire.__str__()+ " " +self.niveau.__str__()+ " " +str(self.nom)


        
class regimehoraire(models.Model):
    id=models.AutoField(primary_key = True)
    typeregime=models.CharField(max_length=60,default='',blank=True)
    def __str__(self):
      return  self.typeregime
class enfant(models.Model):
    id=models.AutoField(primary_key = True)
    userparent = models.ForeignKey(Account, null=True, blank=True, on_delete=models.CASCADE)
    nom=models.CharField(max_length=60,default='',blank=True)
    prenom=models.CharField(max_length=60,default='',blank=True)
    datenessance=models.DateField(default=date.today,blank=True)
    etatmedical = models.CharField(max_length=50,default='',blank=True)
    Nompere=models.CharField(max_length=30,default='',blank=True)
    Nommere=models.CharField(max_length=30,default='',blank=True)
    adresse=models.TextField(max_length=70,default='',blank=True)
    profissionpere=models.CharField(max_length=50,default='',blank=True)
    proffisionmere=models.CharField(max_length=50,default='',blank=True)
    telpere=models.CharField(max_length=8,default='',blank=True)
    telmere=models.CharField(max_length=8,default='',blank=True)
    cinparent=models.CharField(max_length=30,default='',blank=True)
    classe=models.ForeignKey(classe,on_delete=models.CASCADE,null=True,blank=True,default='')
    regimehoraire=models.ForeignKey(regimehoraire,on_delete=models.CASCADE,null=True,blank=True,default='')
    dateinscrit=models.DateField(default=date.today,blank=True)

   # emploi=models.ForeignKey(emploi,on_delete=models.CASCADE,default=None, null=True, blank=True)

    #sexe=models.CharField(max_length=1)
    #abcence_enfant=models.ForeignKey(abcence_enfant,on_delete=models.CASCADE,default=None)
    def __str__(self):
        return self.nom +" "  +self.prenom
    def model_method(self):
        return self.prenom + "  "+ self.nom


class frais(models.Model):
    id=models.AutoField(primary_key = True)
    typefrais=models.CharField(max_length=60,default='',blank=True)
    montant=models.FloatField(default=0.0,blank=True)
    regimehoraire=models.ForeignKey(regimehoraire,on_delete=models.CASCADE,null=True,blank=True,default='')

    def __str__(self):
      return  self.typefrais


class reglement(models.Model):
    montantreglemaiment=models.FloatField(blank=True,)
    datereglemaiment=models.DateField(blank=True,default=date.today)
    moisreglemaiment=models.CharField(blank=True,max_length=50)
    enfant=models.ForeignKey(enfant,on_delete=models.CASCADE,null=True,blank=True)
    frais=models.ForeignKey(frais,on_delete=models.CASCADE,null=True,blank=True)
class reglementm(models.Model):
    montantreglemaiment=models.FloatField(blank=True,)
    datereglemaiment=models.DateField(blank=True,default=date.today)
    moisreglemaiment=models.CharField(blank=True,max_length=50)
    maitresse=models.ForeignKey(maitresse,on_delete=models.CASCADE,null=True,blank=True)

class abcence_maitresse(models.Model):
    #absant=models.BooleanField(default=False)
    dateabcence=models.DateField()
    cause=models.CharField(max_length=30,blank=True)
    maitresse=models.ForeignKey(maitresse,on_delete=models.CASCADE,null=True,blank=True,default='')
class abcence_enfant(models.Model):
  #  absant=models.BooleanField(default=False)
    dateabcence=models.DateField()
    cause=models.CharField(max_length=30,blank=True)
    enfant=models.ForeignKey(enfant,on_delete=models.CASCADE,null=True,blank=True,default='')
class club(models.Model):
    id=models.AutoField(primary_key = True)
    nom=models.CharField(max_length=50,default='')
    obligatoire=models.BooleanField(default=False)
    maitresse=models.ForeignKey(maitresse,on_delete=models.CASCADE,default=None,null=True,blank=True)
    prix=models.FloatField(default=0.0,blank=True)
    def __str__(self):
      return  self.nom
class clubenf(models.Model):
  
    enfant=models.ForeignKey(enfant,on_delete=models.CASCADE,null=True,blank=True,default='')
    club=models.ForeignKey(club,on_delete=models.CASCADE,null=True,blank=True,default='')
class activite(models.Model):
    id=models.AutoField(primary_key = True)
    nom=models.CharField(max_length=30,blank=True)
    prixactivite=models.FloatField(max_length=50,blank=True,default=0.0)
    dateactivite=models.DateField(blank=True)
class charge(models.Model):
    id=models.AutoField(primary_key = True)
    nom=models.CharField(max_length=300,blank=True)
    montant=models.FloatField(max_length=50,blank=True,default=0.0)
    pycejointe=models.FileField(blank=True,null=True)
    datepaycharge=models.DateField(default=date.today,blank=True)

class documentmaitraisse(models.Model):
    id=models.AutoField(primary_key = True)
    nom=models.CharField(max_length=30,blank=True)
    pycejointe=models.FileField(blank=True)
