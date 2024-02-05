import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { adjoinguard } from './adjoin.guard';
import { AuthGuardD } from './authgard-d.guard';
import { AuthmaitresseGuard } from './authmaitresse.guard';
import { DrsaGuard } from './drsa.guard';
import { AjtanneescolaireComponent } from './pages/directeur/anneescolaire/ajtanneescolaire/ajtanneescolaire.component';
import { AjtnivauComponent } from './pages/directeur/anneescolaire/ajtnivau/ajtnivau.component';
import { DetailanneeComponent } from './pages/directeur/anneescolaire/detailannee/detailannee.component';
import { DetailniveauComponent } from './pages/directeur/anneescolaire/detailniveau/detailniveau.component';
import { ListniveauComponent } from './pages/directeur/anneescolaire/listniveau/listniveau.component';
import { ModifieranneescolaireComponent } from './pages/directeur/anneescolaire/modifieranneescolaire/modifieranneescolaire.component';
import { ModifierniveauComponent } from './pages/directeur/anneescolaire/modifierniveau/modifierniveau.component';
import { AjoutclubComponent } from './pages/directeur/club/ajoutclub/ajoutclub.component';
import { AjoutmaitrsseComponent } from './pages/directeur/club/ajoutmaitrsse/ajoutmaitrsse.component';
import { AjtactivitespecialComponent } from './pages/directeur/club/ajtactivitespecial/ajtactivitespecial.component';
import { DetailclubComponent } from './pages/directeur/club/detailclub/detailclub.component';
import { ListeclubComponent } from './pages/directeur/club/listeclub/listeclub.component';
import { ModifieractiviteComponent } from './pages/directeur/club/modifieractivite/modifieractivite.component';
import { ModifierclubComponent } from './pages/directeur/club/modifierclub/modifierclub.component';
import { DashboardComponent } from './pages/directeur/dashboard/dashboard.component';
import { ForbiddenComponent } from './pages/directeur/forbidden/forbidden.component';
import { ListfraisComponent } from './pages/directeur/frais/listfrais/listfrais.component';
import { ModiffraisComponent } from './pages/directeur/frais/modiffrais/modiffrais.component';
import { AbsanceclasseComponent } from './pages/directeur/gestabssance/absanceclasse/absanceclasse.component';
import { AbsancemaitraisseComponent } from './pages/directeur/gestabssance/absancemaitraisse/absancemaitraisse.component';
import { AbsclasseComponent } from './pages/directeur/gestabssance/absclasse/absclasse.component';
import { ListabsComponent } from './pages/directeur/gestabssance/listabs/listabs.component';
import { PrintabsancebyclasseComponent } from './pages/directeur/gestabssance/printabsancebyclasse/printabsancebyclasse.component';
import { PrintabsancemaitresseComponent } from './pages/directeur/gestabssance/printabsancemaitresse/printabsancemaitresse.component';
import { AffectermaitresseComponent } from './pages/directeur/gestclasse/affectermaitresse/affectermaitresse.component';
import { AjtclasseComponent } from './pages/directeur/gestclasse/ajtclasse/ajtclasse.component';
import { DetailclasseComponent } from './pages/directeur/gestclasse/detailclasse/detailclasse.component';
import { ListclasseComponent } from './pages/directeur/gestclasse/listclasse/listclasse.component';
import { ModifierclasseComponent } from './pages/directeur/gestclasse/modifierclasse/modifierclasse.component';
import { PrintclasseeComponent } from './pages/directeur/gestclasse/printclassee/printclassee.component';
import { DetailcompteComponent } from './pages/directeur/gestcompte/detailcompte/detailcompte.component';
import { ListecomptesComponent } from './pages/directeur/gestcompte/listecomptes/listecomptes.component';
import { ListdocumentComponent } from './pages/directeur/gestdocument/listdocument/listdocument.component';
import { AfffecterclasseComponent } from './pages/directeur/gestenf/afffecterclasse/afffecterclasse.component';
import { AjoutcubforenfComponent } from './pages/directeur/gestenf/ajoutcubforenf/ajoutcubforenf.component';
import { AjoutenfComponent } from './pages/directeur/gestenf/ajoutenf/ajoutenf.component';
import { ChoixrhComponent } from './pages/directeur/gestenf/choixrh/choixrh.component';
import { DetailenfComponent } from './pages/directeur/gestenf/detailenf/detailenf.component';
import { ListenfComponent } from './pages/directeur/gestenf/listenf/listenf.component';
import { ModifenfComponent } from './pages/directeur/gestenf/modifenf/modifenf.component';
import { PrintComponent } from './pages/directeur/gestenf/print/print.component';
import { AjoutensComponent } from './pages/directeur/gestens/ajoutens/ajoutens.component';
import { DetailensComponent } from './pages/directeur/gestens/detailens/detailens.component';
import { ListensComponent } from './pages/directeur/gestens/listens/listens.component';
import { ModifierensComponent } from './pages/directeur/gestens/modifierens/modifierens.component';
import { PrintensComponent } from './pages/directeur/gestens/printens/printens.component';
import { AjtreglementactiviteComponent } from './pages/directeur/gestfinance/ajtreglementactivite/ajtreglementactivite.component';
import { AjtreglementenfantComponent } from './pages/directeur/gestfinance/ajtreglementenfant/ajtreglementenfant.component';
import { AjtreglementmaitraisseComponent } from './pages/directeur/gestfinance/ajtreglementmaitraisse/ajtreglementmaitraisse.component';
import { FinanceComponent } from './pages/directeur/gestfinance/finance/finance.component';
import { MadekhilComponent } from './pages/directeur/gestfinance/madekhil/madekhil.component';
import { MdfreglementComponent } from './pages/directeur/gestfinance/mdfreglement/mdfreglement.component';
import { PaymentenfantComponent } from './pages/directeur/gestfinance/paymentenfant/paymentenfant.component';
import { PaymentmairaisseComponent } from './pages/directeur/gestfinance/paymentmairaisse/paymentmairaisse.component';
import { PrintreglementComponent } from './pages/directeur/gestfinance/printreglement/printreglement.component';
import { PrintreglementactComponent } from './pages/directeur/gestfinance/printreglementact/printreglementact.component';
import { PrintresumeComponent } from './pages/directeur/gestfinance/printresume/printresume.component';
import { ResumeComponent } from './pages/directeur/gestfinance/resume/resume.component';
import { AjouterchargeComponent } from './pages/directeur/gestrecource/ajoutercharge/ajoutercharge.component';
import { ModifchargeComponent } from './pages/directeur/gestrecource/modifcharge/modifcharge.component';
import { RecouceComponent } from './pages/directeur/gestrecource/recouce/recouce.component';
import { InscritComponent } from './pages/directeur/inscrit/inscrit.component';
import { LoginComponent } from './pages/directeur/login/login.component';
import { AbsclassemComponent } from './pages/maitresse/absclassem/absclassem.component';
import { DashboardmComponent } from './pages/maitresse/dashboardm/dashboardm.component';
import { ListdocumentsComponent } from './pages/maitresse/document/listdocuments/listdocuments.component';
import { ModifierdocumentComponent } from './pages/maitresse/document/modifierdocument/modifierdocument.component';
import { UploadComponent } from './pages/maitresse/document/upload/upload.component';
import { ListeclassemComponent } from './pages/maitresse/listeclassem/listeclassem.component';
import { LoginMComponent } from './pages/maitresse/login-m/login-m.component';
import { ModifiercomptemComponent } from './pages/maitresse/modifiercomptem/modifiercomptem.component';
import { PrintabsclasseComponent } from './pages/maitresse/printabsclasse/printabsclasse.component';
import { PrintclasseComponent } from './pages/maitresse/printclasse/printclasse.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AbsenceenfComponent } from './pages/parents/absenceenf/absenceenf.component';
import { DashboardpComponent } from './pages/parents/dashboardp/dashboardp.component';
import { EnfantdetailComponent } from './pages/parents/enfantdetail/enfantdetail.component';
import { ListenfantComponent } from './pages/parents/listenfant/listenfant.component';
import { ModifiercompteComponent } from './pages/parents/modifiercompte/modifiercompte.component';
import { PayementenfComponent } from './pages/parents/payementenf/payementenf.component';
import { PrinforparentComponent } from './pages/parents/prinforparent/prinforparent.component';
import { ParentguardGuard } from './parentguard.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
 
  {
    path:'forbidden',
    component:ForbiddenComponent
  },
  {
    path:'directeur/inscrit',
    component:InscritComponent
  },
  {
    path:"ajoutanneescolaire",
    component:AjtanneescolaireComponent,
     // canActivate:[DrsaGuard,AuthGuardD]
    
  
  }, {
    path:"detailanneescolaire/:id",
    component:DetailanneeComponent,
     // canActivate:[DrsaGuard,AuthGuardD]
  
  }, {
    path:"modifieranneescolaire/:id",
    component:ModifieranneescolaireComponent,
     // canActivate:[DrsaGuard,AuthGuardD]
  
  },
  {
    path:"ajouterniveau",
    component:AjtnivauComponent,
     // canActivate:[DrsaGuard,AuthGuardD]
  
  },
  {
    path:"listniveau",
    component:ListniveauComponent,
   //  // canActivate:[DrsaGuard,AuthGuardD]
  
  },
  {
    path:"detailniveau/:id",
    component:DetailniveauComponent,
     // canActivate:[DrsaGuard,AuthGuardD]
  
  },
  {
    path:"modifierniveau/:id",
    component:ModifierniveauComponent,
     // canActivate:[DrsaGuard,AuthGuardD]
  
  },{
    path:"ajouterclasse",
    component:AjtclasseComponent,
     // canActivate:[DrsaGuard,AuthGuardD]
  
  },
{
  path:"ajouterenfant",
  component:AjoutenfComponent,
   // canActivate:[AuthGuardD,adjoinguard]

},
{
  path:"detailenfant/:id",
  component:DetailenfComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"print/:id",
  component:PrintComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},

{
  path:"modifierenfant/:id",
  component:ModifenfComponent,
   // canActivate:[AuthGuardD,adjoinguard]

},
{
  path:"affecterclasse/:id/:b",
  component:AfffecterclasseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
/*
{
  path:'loginmaitresse',
  component:LoginmaitresseComponent

},
{
path:'homemaitresse',
component:HomemaitresseComponent
},
{path:'inscritmaitresse',
component:InscritmaitresseComponent}, */
{
  path:'listeenfants',
  component:ListenfComponent,
   // canActivate:[AuthGuardD,adjoinguard]

},
{
  path:'choixregime/:id/:b',
  component:ChoixrhComponent,
   // canActivate:[AuthGuardD,adjoinguard]
},
{
  path:"",
  component:DashboardComponent,
 //  // canActivate:[AuthGuardD]
  // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"listens",
  component:ListensComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"ajoutens",
  component:AjoutensComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"detailens/:id",
  component:DetailensComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"printens/:id",
  component:PrintensComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"modifierens/:id",
  component:ModifierensComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"affecterens/:id",
  component:ModifierensComponent,
   // canActivate:[DrsaGuard,AuthGuardD]
}
,{
  path:"gestclasse",
  component:ListclasseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"gestclasse",
  component:ListclasseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},{
  path:"detailclaase/:id",
  component:DetailclasseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"printclasse/:id",
  component:PrintclasseeComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"modifierclasse/:id",
  component:ModifierclasseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"affectemait/:id",
  component:AffectermaitresseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"gestabssance",
  component:ListabsComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"gestabssanceclasse",
  component:AbsclasseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"absanceclasse/:id",
  component:AbsanceclasseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"printabsanceclasse/:id/:idc",
  component:PrintabsancebyclasseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"absancemaitresse",
  component:AbsancemaitraisseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"printabsancemait/:idc",
  component:PrintabsancemaitresseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"gestressource",
  component:RecouceComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"ajoutercharge",
  component:AjouterchargeComponent,
   // canActivate:[DrsaGuard,AuthGuardD]
  
},{
  path:"modifierercharge/:id",
  component:ModifchargeComponent,
   // canActivate:[DrsaGuard,AuthGuardD]
  
},{
  path:"payment",
  loadChildren:'./finance/finance.module#FinanceModule'

},
{
  path:"ajoutreglementenf/:id/:m/:c",
  component:AjtreglementenfantComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"ajoutreglementenfac/:id/:m",
  component:AjtreglementactiviteComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"mdfreglementenf/:id",
  component:MdfreglementComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"paymentens/:id",
  component:PaymentmairaisseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"ajoutreglementens/:id/:c/:m",
  component:AjtreglementmaitraisseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"printreglementens/:id",
  component:PrintreglementComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"printreglement/:id",
  component:PrintreglementactComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"gestionfinance",
  component:FinanceComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"resume",
  component:ResumeComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"printresume/:d1/:d2",
  component:PrintresumeComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},

{
  path:"frais",
  component:ListfraisComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"modifierfrais/:id",
  component:ModiffraisComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"gestdocument",
  component:ListdocumentComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"listcub",
  component:ListeclubComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},

{
  path:"ajoutclub",
  component:AjoutclubComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"ajoutactivitespecial",
  component:AjtactivitespecialComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"modifieractivite/:id",
  component:ModifieractiviteComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},

{
  path:"modifierclub/:id",
  component:ModifierclubComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"detailclub/:id",
  component:DetailclubComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},{
  path:"affectertoclub/:id",
  component:AjoutcubforenfComponent,
   // canActivate:[DrsaGuard,adjoinguard]

},
{
  path:"affectermaitraissetoclub/:id",
  component:AjoutmaitrsseComponent,
   // canActivate:[DrsaGuard,AuthGuardD]

},
{
  path:"listecompte",
  component:ListecomptesComponent,
   // canActivate:[DrsaGuard,AuthGuardD] 
},
{
  path:"modifiercomtes/:id",
  component:DetailcompteComponent,
   // canActivate:[DrsaGuard,AuthGuardD] 
},
{
  path:"maitresse/dashboard",
  component:DashboardmComponent,
   // canActivate:[AuthGuardD,AuthmaitresseGuard]

},
{
  path:"maitresse/ajoutdocument",
  component:UploadComponent,
   // canActivate:[AuthGuardD,AuthmaitresseGuard]

},
{
  path:"maitresse/listdocument",
  component:ListdocumentsComponent,
   // canActivate:[AuthGuardD,AuthmaitresseGuard]

},
{
  path:"maitresse/modierdoument/:id",
  component:ModifierdocumentComponent,
   // canActivate:[AuthGuardD,AuthmaitresseGuard]

},
{
  path:"parent/dashboard",
  component:DashboardpComponent,
   // canActivate:[AuthGuardD,ParentguardGuard]

},
{
path:"parent/listenfant",
component:ListenfantComponent,
 // canActivate:[AuthGuardD,ParentguardGuard]

},
{
  path:"parent/detailenfant/:id",
  component:EnfantdetailComponent,
   // canActivate:[AuthGuardD,ParentguardGuard]

},
{
  path:"parent/printdetailenfant/:id",
  component:PrinforparentComponent,
   // canActivate:[AuthGuardD,ParentguardGuard]

},
{
  path:"parent/Absenceenf/:id",
  component:AbsenceenfComponent,
   // canActivate:[AuthGuardD,ParentguardGuard]

},
{
  path:"parent/Payementenf/:id",
  component:PayementenfComponent,
   // canActivate:[AuthGuardD,ParentguardGuard]

},
{
  path:"parent/modifierciompte",
  component:ModifiercompteComponent,
   // canActivate:[AuthGuardD,ParentguardGuard]

},{
  path:"maitresse/modierdoument/:id",
  component:ModifierdocumentComponent,
   // canActivate:[AuthGuardD]

},{
  path:"maitresse/modierdoument/:id",
  component:ModifierdocumentComponent,
   // canActivate:[AuthGuardD,AuthmaitresseGuard]

},
{
  path:"maitresse/modifiercompte",
  component:ModifiercomptemComponent,
   // canActivate:[AuthGuardD,AuthmaitresseGuard]

},
{
  path:"maitresse/classe",
  component:ListeclassemComponent,
   // canActivate:[AuthGuardD,AuthmaitresseGuard]

},
{
  path:"maitresse/absclassem/:id",
  component:AbsclassemComponent,
   // canActivate:[AuthGuardD,AuthmaitresseGuard]

},
{
  path:"maitresse/printabsclassem/:id/:idc",
  component:PrintabsclasseComponent,
   // canActivate:[AuthGuardD,AuthmaitresseGuard]

},
{
  path:"maitresse/printclasse/:id",
  component:PrintclasseComponent,
   // canActivate:[AuthGuardD,AuthmaitresseGuard]

},
{
  path:'**',
  component:NotfoundComponent
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
