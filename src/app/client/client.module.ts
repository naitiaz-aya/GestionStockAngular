import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { IndexClientComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexClientComponent,
    ViewComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
	FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
