import { Endereco } from './../shared/entities/endereco';
import { EnderecoService } from './../shared/services/endereco.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome :"Marcelo Lima",
    email: "marcelo.lima@email.com"
  }

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
    console.log(this.usuario);


  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo, form){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCep(cep, form){

    console.log('Cep recebido do form: '+ cep);


    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    if(cep != ''){

      //Expressão regular para validar o CEP.
      let validacep = /^[0-9]{8}$/;

       //Valida o formato do CEP.
       if(validacep.test(cep)) {
         this.resetDadosEndereco(form);

       this.enderecoService.obterDadosEnderecoPorCep(cep).subscribe(dados =>{

         this.populaDadosForm(dados,form);

       });



      }
    }

  }

  populaDadosForm(dados, form){
/*
      form.setValue({
        nome: form.value.nome,
        email: form.value.email,
        endereco: {
          cep: dados.cep,
          numero: '',
          complemento: dados.complemento,
          rua: dados.logradouro ,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      });*/


      form.form.patchValue({
        endereco: {
          cep: dados.cep,
          numero: '',
          complemento: dados.complemento,
          rua: dados.logradouro ,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      });
  }

  resetDadosEndereco(form){

    form.form.patchValue({
      endereco: {
        cep: '',
        numero: '',
        complemento: '',
        rua: '' ,
        bairro: '',
        cidade: '',
        estado: ''
      }
    });


  }

}
