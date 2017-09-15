import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class DataFormService {

  constructor(private http: Http) { }

  salvaDadosFormReativo(dados): Observable<any>{
    return this.http.post('https://httpbin.org/post',JSON.stringify(dados)).map((dados)=>dados);

    }

}






