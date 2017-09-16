import { EnderecoService } from './../shared/services/endereco.service';
import { DataFormService } from './data-form.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

const REGEX_EMAIL: string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataFormService: DataFormService, private enderecoService: EnderecoService) { }

  ngOnInit() {

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })


    });
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.dataFormService.salvaDadosFormReativo(this.formulario.value).subscribe(dados => {
      console.log(dados);
      this.resetar();
    }, (erro) => alert('erro'));
  }



  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  verificaCampoEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['pattern'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCep(){
    let cep = this.formulario.get('endereco.cep').value;
    console.log('Cep recebido do form: ' + cep);

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    if (cep != '') {

      //Expressão regular para validar o CEP.
      let validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.resetDadosEndereco();

        this.enderecoService.obterDadosEnderecoPorCep(cep).subscribe(dados => {

          this.populaDadosForm(dados);

        });
      }
    }
  }

  populaDadosForm(dados) {
    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetDadosEndereco() {

    this.formulario.patchValue({
      endereco: {
        cep: '',
        numero: '',
        complemento: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: ''
      }
    });
  }

}
