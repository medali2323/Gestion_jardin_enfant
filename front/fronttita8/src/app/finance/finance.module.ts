import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { PaymentenfantComponent } from '../pages/directeur/gestfinance/paymentenfant/paymentenfant.component';
import { MadekhilComponent } from '../pages/directeur/gestfinance/madekhil/madekhil.component';

import { SidebarfComponent } from '../pages2/sidebarf/sidebarf.component';
import { NavbarfComponent } from '../pages2/navbarf/navbarf.component';
import { FooterfComponent } from '../pages2/footerf/footerf.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { SidebarComponent } from '../pages/directeur/standard/sidebar/sidebar.component';

@NgModule({
  declarations: [
    PaymentenfantComponent,
    MadekhilComponent,
    SidebarfComponent,
    NavbarfComponent,
    FooterfComponent,
    PaymentenfantComponent,
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    MatTableModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
   MatButtonModule,
   MatIconModule,
   MatSortModule,  ]
})
export class FinanceModule { }
