import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardD } from '../authgard-d.guard';
import { DrsaGuard } from '../drsa.guard';
import { MadekhilComponent } from '../pages/directeur/gestfinance/madekhil/madekhil.component';
import { PaymentenfantComponent } from '../pages/directeur/gestfinance/paymentenfant/paymentenfant.component';

const routes: Routes = [
  {
    path:"paymentenf/:id",
    component:PaymentenfantComponent,
  //  canActivate:[DrsaGuard,AuthGuardD]
  
  },
  {
    path:"",
    component:MadekhilComponent,
   // canActivate:[DrsaGuard,AuthGuardD]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
