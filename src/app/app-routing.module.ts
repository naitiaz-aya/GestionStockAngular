import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './product/index/index.component'
import { IndexClientComponent } from './client/index/index.component'
import { IndexCommandeComponent } from './commande/index/index.component'

const routes: Routes = [
	{ path: 'product/index', component: IndexComponent },
	{ path: 'client/index', component: IndexClientComponent },
	{ path: 'commande/index', component: IndexCommandeComponent },
	// { path: 'product/index', component: IndexComponent },
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
