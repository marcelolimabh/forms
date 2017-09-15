import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoService } from './../shared/services/endereco.service';
import { DataFormComponent } from './data-form.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule

  ],
  declarations: [ DataFormComponent],
  providers: [ EnderecoService ]
})
export class DataFormModule { }
