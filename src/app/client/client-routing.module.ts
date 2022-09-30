import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexClientComponent } from './index/index.component'
import { ViewComponent } from './view/view.component'
import { CreateComponent } from './create/create.component'
import { EditComponent } from './edit/edit.component'
const routes: Routes = [
	{ path: 'client', redirectTo: 'client/index', pathMatch: 'full'},
	{ path: 'client/index', component: IndexClientComponent },
	{ path: 'client/:clientId/view', component: ViewComponent },
	{ path: 'client/create', component: CreateComponent },
	{ path: 'client/:clientId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
