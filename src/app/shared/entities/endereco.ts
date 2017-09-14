export class Endereco {

  _cep: string='';
  _rua: string ='';
  _numero: string='';
  _bairro: string='';
  _cidade: string='';
  _estado: string='';


constructor(){}




get cep():string{
  return this._cep;
}

get rua():string{
  return this._rua
}

get numero():string{
  return this._numero;
}

get bairro():string{
  return this._bairro;
}

get cidade():string{
  return this._cidade;
}

get estado():string{
  return this._estado;
}


set cep(cep){
  this._cep=cep;
}

set rua(rua){
  this._rua = rua;
}

set numero(numero){
  this._numero=numero;
}

set bairro(bairro){
  this._bairro =bairro;
}

set cidade(cidade){
  this._cidade= cidade;
}

set estado(estado){
   this._estado = estado;
}





}
