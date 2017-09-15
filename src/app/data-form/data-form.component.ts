import { DataFormService } from './data-form.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataFormService: DataFormService) { }

  ngOnInit() {

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    });
  }

  onSubmit(){
    console.log(this.formulario.value);
    this.dataFormService.salvaDadosFormReativo(this.formulario.value).subscribe(dados => {
        console.log(dados);
        this.resetar();
    },(erro)=> alert('erro'));
  }

  resetar(){
    this.formulario.reset();
  }

}
