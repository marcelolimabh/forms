import { SharedModule } from './../shared/shared.module';
import { TemplateFormService } from './template-form.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormComponent } from './template-form.component';

import { EnderecoService } from './../shared/services/endereco.service';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    TemplateFormComponent
  ],
  providers:[EnderecoService, TemplateFormService]
})
export class TemplateFormModule { }
