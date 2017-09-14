import { Endereco } from './../entities/endereco';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable}  from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class EnderecoService {

  constructor(private http: Http) { }

  obterDadosEnderecoPorCep(cep):Observable<any>{

    console.log('Servico:' + cep);


   return this.http.get(`//viacep.com.br/ws/${cep}/json`).map(dados => dados.json());
  }

}
