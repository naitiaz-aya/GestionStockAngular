import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexCommandeComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
   
const routes: Routes = [
  { path: 'commande', redirectTo: 'commande/index', pathMatch: 'full'},
  { path: 'commande/index', component: IndexCommandeComponent },
  { path: 'commande/:commandeId/view', component: ViewComponent },
  { path: 'commande/create', component: CreateComponent },
  { path: 'commande/:commandeId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CommandeRoutingModule { }
