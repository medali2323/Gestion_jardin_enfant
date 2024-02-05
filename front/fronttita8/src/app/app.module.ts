import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/directeur/login/login.component';
import { InscritComponent } from './pages/directeur/inscrit/inscrit.component';
import { DashboardComponent } from './pages/directeur/dashboard/dashboard.component';
import { AjoutenfComponent } from './pages/directeur/gestenf/ajoutenf/ajoutenf.component';
import { ModifenfComponent } from './pages/directeur/gestenf/modifenf/modifenf.component';
import { DetailenfComponent } from './pages/directeur/gestenf/detailenf/detailenf.component';
import { ListenfComponent } from './pages/directeur/gestenf/listenf/listenf.component';
import { AfffecterclasseComponent } from './pages/directeur/gestenf/afffecterclasse/afffecterclasse.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { SidebarComponent } from './pages/directeur/standard/sidebar/sidebar.component';
import { NavbarComponent } from './pages/directeur/standard/navbar/navbar.component';
import { FooterComponent } from './pages/directeur/standard/footer/footer.component';
import { AjoutensComponent } from './pages/directeur/gestens/ajoutens/ajoutens.component';
import { DetailensComponent } from './pages/directeur/gestens/detailens/detailens.component';
import { ListensComponent } from './pages/directeur/gestens/listens/listens.component';
import { ListabsComponent } from './pages/directeur/gestabssance/listabs/listabs.component';
import { RecouceComponent } from './pages/directeur/gestrecource/recouce/recouce.component';
import { FinanceComponent } from './pages/directeur/gestfinance/finance/finance.component';
import { ListdocumentComponent } from './pages/directeur/gestdocument/listdocument/listdocument.component';
import { DashboardmComponent } from './pages/maitresse/dashboardm/dashboardm.component';
import { LoginMComponent } from './pages/maitresse/login-m/login-m.component';
import { AjtanneescolaireComponent } from './pages/directeur/anneescolaire/ajtanneescolaire/ajtanneescolaire.component';
import { AjtnivauComponent } from './pages/directeur/anneescolaire/ajtnivau/ajtnivau.component';
import { ListclasseComponent } from './pages/directeur/gestclasse/listclasse/listclasse.component';
import { ListeclubComponent } from './pages/directeur/club/listeclub/listeclub.component';
import { AjoutclubComponent } from './pages/directeur/club/ajoutclub/ajoutclub.component';
import { ModifierensComponent } from './pages/directeur/gestens/modifierens/modifierens.component';
import { DetailclasseComponent } from './pages/directeur/gestclasse/detailclasse/detailclasse.component';
import { ModifieranneescolaireComponent } from './pages/directeur/anneescolaire/modifieranneescolaire/modifieranneescolaire.component';
import { DetailanneeComponent } from './pages/directeur/anneescolaire/detailannee/detailannee.component';
import { AjtclasseComponent } from './pages/directeur/gestclasse/ajtclasse/ajtclasse.component';
import { ChoixrhComponent } from './pages/directeur/gestenf/choixrh/choixrh.component';
import { ModifierclasseComponent } from './pages/directeur/gestclasse/modifierclasse/modifierclasse.component';
import { AffectermaitresseComponent } from './pages/directeur/gestclasse/affectermaitresse/affectermaitresse.component';
import { ForbiddenComponent } from './pages/directeur/forbidden/forbidden.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModifierclubComponent } from './pages/directeur/club/modifierclub/modifierclub.component';

import { UploadComponent } from './pages/maitresse/document/upload/upload.component';
import { AjouterchargeComponent } from './pages/directeur/gestrecource/ajoutercharge/ajoutercharge.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailclubComponent } from './pages/directeur/club/detailclub/detailclub.component';
import { ListcubforenfComponent } from './pages/directeur/gestenf/listcubforenf/listcubforenf.component';
import { AjoutcubforenfComponent } from './pages/directeur/gestenf/ajoutcubforenf/ajoutcubforenf.component';
import { ListdocumentsComponent } from './pages/maitresse/document/listdocuments/listdocuments.component';
import { ListniveauComponent } from './pages/directeur/anneescolaire/listniveau/listniveau.component';
import { DetailniveauComponent } from './pages/directeur/anneescolaire/detailniveau/detailniveau.component';
import { ModifierniveauComponent } from './pages/directeur/anneescolaire/modifierniveau/modifierniveau.component';
import { SidebarmComponent } from './pages/maitresse/standard/sidebarm/sidebarm.component';
import { NavebarmComponent } from './pages/maitresse/standard/navebarm/navebarm.component';
import { FootermComponent } from './pages/maitresse/standard/footerm/footerm.component';
import { PaymentenfantComponent } from './pages/directeur/gestfinance/paymentenfant/paymentenfant.component';
import { ModifchargeComponent } from './pages/directeur/gestrecource/modifcharge/modifcharge.component';
import { MadekhilComponent } from './pages/directeur/gestfinance/madekhil/madekhil.component';
import { PaymoienfantComponent } from './pages/dirrecteur/gestfinance/paymoienfant/paymoienfant.component';
import { AjtreglementenfantComponent } from './pages/directeur/gestfinance/ajtreglementenfant/ajtreglementenfant.component';
import { AjoutmaitrsseComponent } from './pages/directeur/club/ajoutmaitrsse/ajoutmaitrsse.component';
import { PaymentmairaisseComponent } from './pages/directeur/gestfinance/paymentmairaisse/paymentmairaisse.component';
import { AjtreglementmaitraisseComponent } from './pages/directeur/gestfinance/ajtreglementmaitraisse/ajtreglementmaitraisse.component';
import { ModifierdocumentComponent } from './pages/maitresse/document/modifierdocument/modifierdocument.component';
import { AbsanceclasseComponent } from './pages/directeur/gestabssance/absanceclasse/absanceclasse.component';
import { AbsancemaitraisseComponent } from './pages/directeur/gestabssance/absancemaitraisse/absancemaitraisse.component';
import { AbsclasseComponent } from './pages/directeur/gestabssance/absclasse/absclasse.component';
import { ListfraisComponent } from './pages/directeur/frais/listfrais/listfrais.component';
import { ModiffraisComponent } from './pages/directeur/frais/modiffrais/modiffrais.component';
import { MdfreglementComponent } from './pages/directeur/gestfinance/mdfreglement/mdfreglement.component';
import { AjtactivitespecialComponent } from './pages/directeur/club/ajtactivitespecial/ajtactivitespecial.component';
import { ListecomptesComponent } from './pages/directeur/gestcompte/listecomptes/listecomptes.component';
import { DetailcompteComponent } from './pages/directeur/gestcompte/detailcompte/detailcompte.component';
import { AbsenceenfComponent } from './pages/parents/absenceenf/absenceenf.component';
import { PayementenfComponent } from './pages/parents/payementenf/payementenf.component';
import { ModifiercompteComponent } from './pages/parents/modifiercompte/modifiercompte.component';
import { DashboardpComponent } from './pages/parents/dashboardp/dashboardp.component';
import { FooterpComponent } from './pages/parents/standard/footerp/footerp.component';
import { SidebarpComponent } from './pages/parents/standard/sidebarp/sidebarp.component';
import { NavbarpComponent } from './pages/parents/standard/navbarp/navbarp.component';
import { ModifiercomptemComponent } from './pages/maitresse/modifiercomptem/modifiercomptem.component';
import { EnfantdetailComponent } from './pages/parents/enfantdetail/enfantdetail.component';
import { ResumeComponent } from './pages/directeur/gestfinance/resume/resume.component';
import { PrintComponent } from './pages/directeur/gestenf/print/print.component';
import { PrintresumeComponent } from './pages/directeur/gestfinance/printresume/printresume.component';
import { PrintreglementComponent } from './pages/directeur/gestfinance/printreglement/printreglement.component';
import { ListeclassemComponent } from './pages/maitresse/listeclassem/listeclassem.component';
import { AbsclassemComponent } from './pages/maitresse/absclassem/absclassem.component';
import { PrintabsclasseComponent } from './pages/maitresse/printabsclasse/printabsclasse.component';
import { PrintclasseComponent } from './pages/maitresse/printclasse/printclasse.component';
import { PrintclasseeComponent } from './pages/directeur/gestclasse/printclassee/printclassee.component';
import { PrintabsancebyclasseComponent } from './pages/directeur/gestabssance/printabsancebyclasse/printabsancebyclasse.component';
import { PrintabsancemaitresseComponent } from './pages/directeur/gestabssance/printabsancemaitresse/printabsancemaitresse.component';
import { PrinforparentComponent } from './pages/parents/prinforparent/prinforparent.component';
import { ModifieractiviteComponent } from './pages/directeur/club/modifieractivite/modifieractivite.component';
import {  DataTablesModule } from 'angular-datatables';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule, } from '@angular/material';
import { AbsclubComponent } from './pages/directeur/club/absclub/absclub.component';
import { ListenfantComponent } from './pages/parents/listenfant/listenfant.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule, ToastrService } from 'ngx-toastr';
import { DialogComponent } from './pages/directeur/standard/dialog/dialog.component';
import { PayementenfantactiviteComponent } from './pages/directeur/tabsulumentaire/payementenfantactivite/payementenfantactivite.component';
import { ListactiviteComponent } from './pages/directeur/tabsulumentaire/listactivite/listactivite.component';
import { ListclasstowComponent } from './pages/directeur/tabsulumentaire/listclasstow/listclasstow.component';
import { CompteparentsComponent } from './pages/directeur/tabsulumentaire/compteparents/compteparents.component';
import { ComptemaitresseComponent } from './pages/directeur/tabsulumentaire/comptemaitresse/comptemaitresse.component';
import { Listenf2Component } from './pages/directeur/tabsulumentaire/listenf2/listenf2.component';
import { Listens2Component } from './pages/directeur/tabsulumentaire/listens2/listens2.component';
import { PrintensComponent } from './pages/directeur/gestens/printens/printens.component';
import { AjtreglementactiviteComponent } from './pages/directeur/gestfinance/ajtreglementactivite/ajtreglementactivite.component';
import { SidebarfComponent } from './pages2/sidebarf/sidebarf.component';
import { NavbarfComponent } from './pages2/navbarf/navbarf.component';
import { FooterfComponent } from './pages2/footerf/footerf.component';
import { PrintreglementactComponent } from './pages/directeur/gestfinance/printreglementact/printreglementact.component';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscritComponent,
    DashboardComponent,
    AjoutenfComponent,
    ModifenfComponent,
    DetailenfComponent,
    ListenfComponent,
    AfffecterclasseComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    AjoutensComponent,
    DetailensComponent,
    ListensComponent,
    ListabsComponent,
    RecouceComponent,
    FinanceComponent,
    ListdocumentComponent,
    DashboardmComponent,
    LoginMComponent,
    AjtanneescolaireComponent,
    AjtnivauComponent,
    ListclasseComponent,
    ListeclubComponent,
    AjoutclubComponent,
    ModifierensComponent,
    DetailclasseComponent,
    ModifieranneescolaireComponent,
    DetailanneeComponent,
    AjtclasseComponent,
    ChoixrhComponent,
    ModifierclasseComponent,
    AffectermaitresseComponent,
    ForbiddenComponent,
    ModifierclubComponent,
    UploadComponent,
    AjouterchargeComponent,
    NotfoundComponent,
    DetailclubComponent,
    ListcubforenfComponent,
    AjoutcubforenfComponent,
    ListdocumentsComponent,
    ListniveauComponent,
    DetailniveauComponent,
    ModifierniveauComponent,
    SidebarmComponent,
    NavebarmComponent,
    FootermComponent,
  
    ModifchargeComponent,
    PaymoienfantComponent,
    AjtreglementenfantComponent,
    AjoutmaitrsseComponent,
    PaymentmairaisseComponent,
    AjtreglementmaitraisseComponent,
    ModifierdocumentComponent,
    AbsanceclasseComponent,
    AbsancemaitraisseComponent,
    AbsclasseComponent,
    ListfraisComponent,
    ModiffraisComponent,
    MdfreglementComponent,
    AjtactivitespecialComponent,
    ListecomptesComponent,
    DetailcompteComponent,
    AbsenceenfComponent,
    PayementenfComponent,
    ModifiercompteComponent,
    DashboardpComponent,
    FooterpComponent,
    SidebarpComponent,
    NavbarpComponent,
    ModifiercomptemComponent,
    EnfantdetailComponent,
    ResumeComponent,
    PrintComponent,
    PrintresumeComponent,
    PrintreglementComponent,
    ListeclassemComponent,
    AbsclassemComponent,
    PrintabsclasseComponent,
    PrintclasseComponent,
    PrintclasseeComponent,
    PrintabsancebyclasseComponent,
    PrintabsancemaitresseComponent,
    PrinforparentComponent,
    ModifieractiviteComponent,
    AbsclubComponent,
    ListenfantComponent,
    DialogComponent,
    PayementenfantactiviteComponent,
    ListactiviteComponent,
    ListclasstowComponent,
    CompteparentsComponent,
    ComptemaitresseComponent,
    Listenf2Component,
    Listens2Component,
    AjtclasseComponent,
    PrintensComponent,
    AjtreglementactiviteComponent,
    PrintreglementactComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule  ,  
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    DataTablesModule,
    MatTableModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
   MatButtonModule,
   MatIconModule,
   MatSortModule,
   BrowserAnimationsModule, // required animations module
   ToastrModule.forRoot(), // ToastrModule add
   //MatDialogModule

  ],
  providers: [DatePipe,
  ],
  bootstrap: [AppComponent],
      entryComponents:[DialogComponent],
      exports: [
        MatPaginatorModule,
        MatIconModule,
        MatTableModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
       MatButtonModule,
       MatIconModule,
       MatSortModule,
        NavbarComponent,
        SidebarComponent,
        FooterComponent
      ]
})
export class AppModule { }
